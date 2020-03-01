import React from "react"
import { ListComponent } from "./listComponent"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../store/actions"

const useButtonRemove = () => {
    const dispatch = useDispatch()
    const buttonClick = id => dispatch(actions.removeItem(id))
    return buttonClick
}

export const ListContainer = () => {
    const list = useSelector(store => store.items)
    const removeItem = useButtonRemove()

    return (
        <ListComponent
            list={list}
            removeItem={removeItem}
        />
    )
}
