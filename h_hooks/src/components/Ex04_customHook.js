import { useState } from "react";

export default function Ex04_customHook(initValue = false){
    const [value, setValue] = useState(initValue);
    const toggleValue = () => {
        setValue(!value)
    }

    return [value, toggleValue];
}