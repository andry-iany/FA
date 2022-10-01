import {useEffect, useState} from "react";

const useViewports = () => {
    const [viewportsSize, SetViewportsSize] = useState({vh: window.innerHeight, vw: window.innerWidth});

    useEffect(() => {
        const listener = () => {
            SetViewportsSize({vh: window.innerHeight, vw: window.innerWidth})
        };

        window.addEventListener("resize", listener);

        return () => window.removeEventListener("resize", listener);
    }, [viewportsSize]);
    return [viewportsSize.vh, viewportsSize.vw];
};

export default useViewports;