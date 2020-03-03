import React from "react"

export const AddButton = ({ onClick, label = "+" }) => {
    return (
        <button onClick={onClick}> {label} </button>
    )
}
