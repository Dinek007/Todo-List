import { useState } from "react"

export const useAddItemForm = (submitFunction) => {
    const [text, changeText] = useState("")
    const onChange = e => {
        changeText(e.target.value)
    }
    const onClick = () => {
        submitFunction(text)
        changeText("")
    }

    return {
        value: text,
        handleChange: onChange,
        handleSubmit: onClick
    }
}