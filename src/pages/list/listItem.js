import React from "react"
import { RemoveButton } from "../../components"

export const ListItem = ({ label, id, removeButtonClick }) => {
    const removeItem = () => {
        removeButtonClick(id)
    }
    return <div>
        <p>{label}</p>
        <RemoveButton onClick={removeItem} />
    </div>
}
