import React from "react"
import { ListComponent } from "./listComponent"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../store/actions"
import { useAddItemForm } from "../../hooks/useAddItemForm"

const useButtonClick = () => {
    const dispatch = useDispatch()
    const buttonClick = val => dispatch(actions.addItem(val))
    return buttonClick
}

export const ListContainer = () => {
    const list = useSelector(store => store.items)

    const onSubmit = useButtonClick()

    const {
        value,
        handleChange,
        handleSubmit
    } = useAddItemForm(onSubmit)

    return <ListComponent
        list={list}
        onChangeText={handleChange}
        inputText={value}
        onButtonCLick={handleSubmit}
    />
}
