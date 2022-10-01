import React, { useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import useViewports from "./useViewports";

interface layer {
  elements: React.RefObject<HTMLDivElement>;
  friction: { x: number; y: number };
}

const useParallax = (
  wrapper: React.RefObject<HTMLDivElement>,
  layer: Array<layer>,
  outer: Array<React.RefObject<HTMLDivElement>>,
  pointerCursor: React.RefObject<HTMLDivElement>,
) => {
  let [vh, vw] = useViewports();

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    // Recenter all layer on window resize
    layer.forEach((layer) => {
      layer.elements.current!.style.transform = "";

      const scale =
        layer.elements.current!.getBoundingClientRect().width /
        layer.elements.current!.offsetWidth;

      gsap.to(layer.elements.current, {
        ease: "power4.out",
        duration: 0.5,
        scaleX: scale,
        scaleY: scale,
        x: 0,
        y: 0,
      });
    });

    const wrapperDim = wrapper.current?.getBoundingClientRect();
    const outerRight = outer[0].current?.getBoundingClientRect();
    const outerLeft = outer[1].current?.getBoundingClientRect();
    const outerTop = outer[2].current?.getBoundingClientRect();
    const outerBottom = outer[3].current?.getBoundingClientRect();

    let mousemove: (e: MouseEvent) => void;
    // will use To remove the event later

    if (wrapperDim && outerRight && outerLeft && outerTop && outerBottom) {
      const alpha = {
        // layer width between the center
        "+x": outerRight.x - wrapperDim.width / 2 + outerRight.width,
        "-x": outerLeft.x - wrapperDim.width / 2,
        "+y": outerTop.y - wrapperDim.height / 2,
        "-y": outerBottom.y - wrapperDim.height / 2 + outerBottom.width, // this should be the height, but I can't find out why
      };

      const theta = {
        // wrapper with between the center
        x: wrapperDim.width / 2,
        y: wrapperDim.height / 2,
      };

      const delta = {
        "+x": Math.abs(alpha["+x"]) - theta.x + 100,
        "-x": Math.abs(alpha["-x"]) - theta.x + 100,
        "+y": Math.abs(alpha["+y"]) - theta.y + 100,
        "-y": Math.abs(alpha["-y"]) - theta.y + 100,
      };

      if (pointerCursor && window.matchMedia("(pointer: coarse)").matches) {
        const pointerCursorDim = {
          width: outerRight.x + outerRight.width - outerLeft.x,
          height: outerBottom.y + outerBottom.width - outerTop.y,
          top: outerTop.y,
          left: outerLeft.x,
        };

        const bounds = {
          maxX: -outerLeft.x + 50,
          minX: -outerRight.x - outerRight.width + wrapperDim.width - 50,
          maxY: -outerTop.y + 100,
          minY: -outerBottom.y - outerBottom.width + wrapperDim.height - 100,
        };

        pointerCursor.current!.style.width = `${pointerCursorDim.width}px`;
        pointerCursor.current!.style.height = `${pointerCursorDim.height}px`;
        pointerCursor.current!.style.top = `${pointerCursorDim.top}px`;
        pointerCursor.current!.style.left = `${pointerCursorDim.left}px`; // AGAIN this should be the height, but I can't find out why

        Draggable.create(pointerCursor.current, {
          trigger: wrapper.current,
          type: "x,y",
          edgeResistance: 1,
          bounds: bounds,
          onMove: () => {
            let X =
              pointerCursor.current?.getBoundingClientRect().x! +
              (wrapperDim.width / 2 - outerLeft.x) -
              wrapperDim.width / 2;

            let Y =
              pointerCursor.current?.getBoundingClientRect().y! +
              (wrapperDim.height / 2 - outerTop.y) -
              wrapperDim.height / 2;

            layer.forEach((layer) => {
              gsap.to(layer.elements.current, {
                duration: 0.25,
                y: Y * layer.friction.y,
              });

              gsap.to(layer.elements.current, {
                duration: 0.25,
                x: X * layer.friction.x,
              });
            });
          },
          onDragEnd: () => {
            pointerCursor.current!.style.zIndex = "-1";
          },
        });
      } else {
        document.addEventListener(
          "mousemove",
          (mousemove = (e) => {
            const cursor = {
              // Cursor position from the wrapper center
              x: e.clientX - wrapperDim.width / 2,
              y: e.clientY - wrapperDim.height / 2,
            };

            let X = 0;
            let Y = 0;

            if (cursor.x >= 0) {
              X = -(delta["+x"] * cursor.x) / theta.x;
            } else {
              X = -(delta["-x"] * cursor.x) / theta.x;
            }

            if (cursor.y <= 0) {
              Y = -(delta["+y"] * cursor.y) / theta.y;
            } else {
              Y = -(delta["-y"] * cursor.y) / theta.y;
            }

            layer.forEach((layer) => {
              gsap.to(layer.elements.current, {
                ease: "power4.out",
                duration: 5,
                x: X * layer.friction.x,
                y: Y * layer.friction.y,
              });
            });
          }),
        );
      }
    }
    return () => {
      document.removeEventListener("mousemove", mousemove);
    };
  }, [vh, vw]);
};

export default useParallax;
