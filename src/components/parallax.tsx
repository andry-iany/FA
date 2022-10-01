import React, { FunctionComponent, useRef } from "react";

import { parallaxStyle as style } from "../styles";
import { Header, ParallaxWidget } from "../components";

import {
  TheDizzyDrains,
  gaelle,
  Alala,
  Faniah,
  kristel,
  Andriaina,
  Nuiraza,
  Loharano,
  JohnOabmar,
  MikasyDavis,
  Imiaingaly,
  mafonja,
} from "../image";

import useParallax from "../hooks/useParallax";

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

  const widgetWidth = 250;

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
              A strange art – music – the most poetic and precise of all the arts ...
            </Header>
          </div>

          <ParallaxWidget
            top={255}
            left={-645}
            image={Loharano}
            width={widgetWidth}
            name={"Loharano"}
          />
          <ParallaxWidget
            top={-405}
            left={-545}
            image={JohnOabmar}
            width={widgetWidth}
            name={"John Oabmar"}
          />
          <ParallaxWidget
            top={165}
            left={-5}
            image={TheDizzyDrains}
            width={widgetWidth}
            name={"The Dizzy Drains"}
          />
          <ParallaxWidget
            top={-415}
            left={535}
            image={MikasyDavis}
            width={widgetWidth}
            name={"Mika & Davis"}
          />
        </div>
      </div>

      <div className={`${style.layer} ${style.layer1}`} ref={layer1}>
        <div className={style.center}>
          <ParallaxWidget
            top={-385}
            left={-185}
            image={kristel}
            width={widgetWidth}
            ref={outerTop}
            name={"kristel"}
          />
          <ParallaxWidget
            top={-75}
            left={-865}
            image={Faniah}
            width={widgetWidth}
            ref={outerLeft}
            name={"Faniah"}
          />
          <ParallaxWidget
            top={-45}
            left={285}
            image={gaelle}
            width={widgetWidth}
            name={"Gaelle tsirinofy"}
          />
          <ParallaxWidget
            top={325}
            left={-305}
            image={Imiaingaly}
            width={widgetWidth}
            ref={outerBottom}
            name={"Imiaingaly"}
          />
        </div>
      </div>

      <div className={`${style.layer} ${style.layer2}`} ref={layer2}>
        <div className={style.center}>
          <ParallaxWidget
            top={-355}
            left={155}
            image={Nuiraza}
            width={widgetWidth}
            name={"Nui Raza"}
          />
          <ParallaxWidget
            top={-75}
            left={-495}
            image={Alala}
            width={widgetWidth}
            name={"ALALA"}
          />
          <ParallaxWidget
            top={275}
            left={320}
            image={mafonja}
            width={widgetWidth}
            name={"Mafonja"}
          />
          <ParallaxWidget
            top={15}
            left={595}
            image={Andriaina}
            width={widgetWidth}
            ref={outerRight}
            name={"Andriaina"}
          />
        </div>
      </div>
    </div>
  );
};

export default Parallax;
