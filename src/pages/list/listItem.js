import React from "react"
import { RemoveButton } from "../../components"
import { EditButton } from "../../components"

export const ListItem = ({ label, id, removeButtonClick, editButtonClick }) => {
    const removeItem = () => {
        removeButtonClick(id)
    }
    const editItem = () => {
        editButtonClick(id)
    }
    return <div>
        <p>{label}</p>
        <RemoveButton onClick={removeItem} />
        <EditButton onClick={editItem} />
    </div>
}
