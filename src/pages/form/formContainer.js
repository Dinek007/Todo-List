import React from "react"
import { useDispatch } from "react-redux"
import { actions } from "../../store/actions"
import { useAddItemForm } from "../../hooks/useAddItemForm"
import { FormComponent } from "./formComponent"

const useButtonClick = () => {
    const dispatch = useDispatch()
    const buttonClick = val => dispatch(actions.addItem(val))
    return buttonClick
}

export const FormContainer = () => {
    const onSubmit = useButtonClick()

    const {
        value,
        handleChange,
        handleSubmit
    } = useAddItemForm(onSubmit)

    return <FormComponent
        onChangeText={handleChange}
        inputText={value}
        onButtonCLick={handleSubmit}
    />
}