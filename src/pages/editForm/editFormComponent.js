import React from "react"

import { AddButton, TextInput } from "../../components"

export const EditFormComponent = ({ value, changeText, onButtonClick }) => {
    return (
        <>
            <TextInput onChange={changeText} value={value} />
            <AddButton onClick={onButtonClick} />
        </>
    )
}
