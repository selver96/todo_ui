import { useState } from "react";


export default function useInput(init: any) {
    const [value, setValue] = useState(init);

    const onChange = (e: any) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange
    }
}