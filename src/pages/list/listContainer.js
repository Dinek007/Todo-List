import React from "react"
import { ListComponent } from "./listComponent"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../store/actions"

const useButtonRemove = () => {
    const dispatch = useDispatch()
    const buttonClick = id => dispatch(actions.removeItem(id))
    return buttonClick
}
const useButtonEdit = () => {
    const dispatch = useDispatch()

    const buttonClick = id => dispatch(actions.showEditForm(id))
    return buttonClick
}

export const ListContainer = () => {
    const list = useSelector(store => store.items)
    const removeItem = useButtonRemove()
    const editItem = useButtonEdit()

    return (
        <ListComponent
            list={list}
            removeItem={removeItem}
            editItem={editItem}
        />
    )
}
