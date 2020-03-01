import React from "react"
import { ListItem } from "./listItem"

export const ListComponent = ({ list, removeItem }) => {
    return (
        <>
            {
                list.map((val, index) => (
                    <ListItem label={val.name} id={val.id} key={index} removeButtonClick={removeItem} />
                ))
            }
        </>
    )
}
