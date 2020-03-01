import React from "react"
import { AddButton, TextInput } from "../../components"

export const FormComponent = ({ onButtonCLick, onChangeText, inputText }) => {
    return (
        <>
            <TextInput onChange={onChangeText} value={inputText} />
            <AddButton onClick={onButtonCLick} />
        </>
    )
}
