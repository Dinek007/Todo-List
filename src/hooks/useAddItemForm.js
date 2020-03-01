import { useState } from "react"

export const idGenerator = () => Math.floor(new Date().valueOf() * Math.random())

export const useAddItemForm = (submitFunction) => {
    const [text, changeText] = useState("")
    const onChange = e => {
        changeText(e.target.value)
    }
    const onClick = () => {
        submitFunction({ name: text, id: idGenerator() })
        changeText("")
    }

    return {
        value: text,
        handleChange: onChange,
        handleSubmit: onClick
    }
}