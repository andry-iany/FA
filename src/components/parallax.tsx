import React, { FunctionComponent, useRef } from "react";

import { parallaxStyle as style } from "../styles";
import { Header, ParallaxWidget } from "../components";
import ParalaxWdigetV2 from "./paralaxWdigetV2";
import Partners from "./Partners";
import About from "./About";

import * as faImage from "../image";

import useParallax from "../hooks/useParallax";
import ParallaxWidgetV2 from "./paralaxWdigetV2";
import Subscribe from "./Subscribe";

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
              Frontend Awards<br />
              <small>the most exiting frontend challenges</small>
            </Header>
          </div>

          <ParalaxWdigetV2
            top={-25}
            left={-645}
            image={""}
            height={500}
            children={<Partners />}
            width={300}
          />
          <ParallaxWidget
            top={405}
            left={-375}
            image={faImage.fa1}
            width={widgetWidth}
            ref={outerBottom}
          />
          <ParallaxWidget
            top={-415}
            left={535}
            image={faImage.fa2}
            width={widgetWidth}
            ref={outerRight}
          />
        </div>
      </div>

      <div className={`${style.layer} ${style.layer1}`} ref={layer1}>
        <div className={style.center}>
          <ParallaxWidget
            top={-475}
            left={-835}
            image={faImage.fa}
            width={widgetWidth}
            ref={outerLeft}
          />
          <ParallaxWidget
            top={-525}
            left={-375}
            image={faImage.fa4}
            width={widgetWidth}
            ref={outerTop}
          />

          <ParalaxWdigetV2
            top={155}
            left={-105}
            image={""}
            height={350}
            children={<Subscribe />}
            width={300}
          />
        </div>
      </div>

      <div className={`${style.layer} ${style.layer2}`} ref={layer2}>
        <div className={style.center}>
          <ParallaxWidgetV2
            top={-435}
            left={155}
            image={faImage.fa3}
            width={300}
            children={<About />}
            height={300}
          />
          <ParallaxWidget
            top={265}
            left={320}
            image={faImage.fa6}
            width={widgetWidth}
          />
          <ParallaxWidget top={-35} left={355} image={faImage.fa7} width={250} />
        </div>
      </div>
    </div>
  );
};

export default Parallax;
