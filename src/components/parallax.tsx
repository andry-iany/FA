import React, { FunctionComponent, useRef } from "react";

import { parallaxStyle as style } from "../styles";
import { Header, ParallaxWidget } from "../components";
import ParalaxWdigetV2 from "./paralaxWdigetV2";
import Partners from "./Partners";
import About from "./About";

import * as faImage from "../image";

import useParallax from "../hooks/useParallax";
import ParallaxWidgetV2 from "./paralaxWdigetV2";

const Parallax: FunctionComponent = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const layer0 = useRef<HTMLDivElement>(null);
  const layer1 = useRef<HTMLDivElement>(null);
  const layer2 = useRef<HTMLDivElement>(null);
  const pointerCursor = useRef<HTMLDivElement>(null);

  const outerRight = useRef<HTMLDivElement>(null);
  const outerLeft = useRef<HTMLDivElement>(null);
  const outerTop = useRef<HTMLDivElement>(null);
  const outerBottom = useRef<HTMLDivElement>(null);

  const widgetWidth = 350;

  useParallax(
    wrapper,
    [
      {
        elements: layer0,
        friction: {
          x: 1.1,
          y: 1.1,
        },
      },
      {
        elements: layer1,
        friction: {
          x: 1.05,
          y: 1.0,
        },
      },
      {
        elements: layer2,
        friction: {
          x: 1.0,
          y: 1.05,
        },
      },
    ],
    [outerRight, outerLeft, outerTop, outerBottom],
    pointerCursor,
  );

  return (
    <div className={style.wrapper} ref={wrapper}>
      <div id={style.pointerCursor} ref={pointerCursor}></div>
      <div className={`${style.layer} ${style.layer0}`} ref={layer0}>
        <div className={style.center}>
          <div className={style.headerWrapper}>
            <Header>
              Frontend Awards Hackathon - <br /> the most exiting frontend challenges
            </Header>
          </div>

          <ParalaxWdigetV2
            top={255}
            left={-645}
            image={""}
            height={500}
            children={<Partners />}
            width={300}
          />
          <ParallaxWidget
            top={165}
            left={-5}
            image={faImage.fa1}
            width={widgetWidth}
          />
          <ParallaxWidget
            top={-415}
            left={535}
            image={faImage.fa2}
            width={widgetWidth}
          />
        </div>
      </div>

      <div className={`${style.layer} ${style.layer1}`} ref={layer1}>
        <div className={style.center}>
          <ParallaxWidget
            top={-385}
            left={-185}
            image={faImage.fa}
            width={widgetWidth}
            ref={outerTop}
          />
          <ParallaxWidget
            top={-75}
            left={-865}
            image={faImage.fa4}
            width={widgetWidth}
            ref={outerLeft}
          />
      
          <ParallaxWidget
            top={325}
            left={-305}
            image={faImage.fa5}
            width={widgetWidth}
            ref={outerBottom}
          />
        </div>
      </div>

      <div className={`${style.layer} ${style.layer2}`} ref={layer2}>
        <div className={style.center}>
          <ParallaxWidgetV2
            top={-355}
            left={155}
            image={faImage.fa3}
            width={300}
            children={<About />}
            height={300}
          />
          <ParallaxWidget
            top={275}
            left={320}
            image={faImage.fa6}
            width={widgetWidth}
          />
          <ParallaxWidget
            top={15}
            left={595}
            image={faImage.fa7}
            width={widgetWidth}
            ref={outerRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Parallax;
