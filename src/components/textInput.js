import React from "react"

export const TextInput = ({ onChange, value }) => {
    return (
        <input type='text' onChange={onChange} value={value} />
    )
}
