import { useState } from "react"

export const useFormInput = () => {

    const [value, setValue] = useState("");

    const handleValueChange = (e: {target: HTMLInputElement}) => setValue(e.target.value);
    return {
        value: value,
        handleValueChange: handleValueChange
    }
}
