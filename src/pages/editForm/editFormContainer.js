import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { EditFormComponent } from "./editFormComponent"
import { useItemForm } from "../../hooks/itemForm"
import { actions } from "../../store/actions"


const useButtonClick = () => {
    const dispatch = useDispatch()
    const buttonClick = val => dispatch(actions.editItem(val))
    return buttonClick
}

const useEditFormSubmit = (handleSubmit) => {
    const dispatch = useDispatch()
    return (data) => {
        handleSubmit(data)
        dispatch(actions.hideEditForm())
    }
}


export const EditFormContainer = () => {
    const editedId = useSelector(store => store.editedId)
    const showAddItemForm = useSelector(store => store.showAddItemForm)
    const itemData = useSelector(store => store.items.find(val => val.id === editedId)) || {}
    const onSubmit = useButtonClick()

    const {
        value,
        handleChange,
        handleSubmit
    } = useItemForm(onSubmit, itemData.name, editedId)

    const submitEditForm = useEditFormSubmit(handleSubmit)

    return (
        <>
            {
                showAddItemForm && <EditFormComponent
                    val={value}
                    changeText={handleChange}
                    onButtonClick={submitEditForm}
                />
            }
        </>
    )
}