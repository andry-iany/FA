import React, { forwardRef, useEffect, useState } from "react";
import style from "../styles/parallaxWidget.module.scss";

interface props {
    name?: string;
    top: number;
    left: number;
    image: string;
    width: number;
    height:number;
    children : JSX.Element
}

const ParallaxWidgetV2 = forwardRef<HTMLDivElement, props>(
    ({ name, top, left, image, width , height , children}: props, ref) => {
        const degClass = ["_one", "_one_five", "_two", "one", "one_five", "two"][
            Math.floor(Math.random() * 6)
            ];


        useEffect(() => {
            const img = new Image();
            img.src = image;
        }, []);

        return (
            <div
                className={`${style.widget} ${style[degClass]} `}
                style={{
                    width: `${width}px`,
                    height : `${height}px`,
                    top: `${top}px`,
                    left: `${left}px`,
                }}
                ref={ref}
            >
                <div className={style.children}>
                    {children}
                </div>
                <p className={style.name}>{name}</p>
            </div>
        );
    },
);

export default ParallaxWidgetV2;
