import React from "react"
import { ListItem } from "./listItem"

export const ListComponent = ({ list, removeItem, editItem }) => {
    return (
        <>

            {
                list.map((val, index) => (
                    <ListItem
                        label={val.name}
                        id={val.id}
                        key={index}
                        removeButtonClick={removeItem}
                        editButtonClick={editItem}
                    />
                ))
            }
        </>
    )
}
