import { useState } from "react"

export const idGenerator = () => Math.floor(new Date().valueOf() * Math.random())

export const useItemForm = (submitFunction, defaultValue = "", id) => {

    const [text, changeText] = useState(defaultValue)
    const onChange = e => {
        changeText(e.target.value)
    }
    const onClick = () => {
        submitFunction({ name: text, id: id || idGenerator() })
        changeText("")
    }
    return {
        value: text,
        handleChange: onChange,
        handleSubmit: onClick
    }
}