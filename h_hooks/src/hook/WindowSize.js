import { useState, useEffect } from "react";

export default function WindowSize(){
    const [size, setSize] = useState({width: undefined, height: undefined});

    useEffect(() => {
        function handleResize(){
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}