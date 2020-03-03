import React from "react"
import { useDispatch } from "react-redux"

import { actions } from "../../store/actions"
import { FormComponent } from "./addFormComponent"
import { useItemForm } from "../../hooks/itemForm"



const useButtonClick = () => {
    const dispatch = useDispatch()
    const buttonClick = val => dispatch(actions.addItem(val))
    return buttonClick
}

export const AddFormContainer = () => {
    const onSubmit = useButtonClick()

    const {
        value,
        handleChange,
        handleSubmit
    } = useItemForm(onSubmit)

    return <FormComponent
        onChangeText={handleChange}
        inputText={value}
        onButtonCLick={handleSubmit}
    />
}