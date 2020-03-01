import React from "react"
import { ListItem } from "./listItem"
import { AddButton, TextInput } from "../../components"

export const ListComponent = ({ list, onButtonCLick, onChangeText, inputText, removeItem }) => { // funckjeDousuawania itemow
    return (
        <>
            {
                list.map((val, index) => (
                    <ListItem label={val.name} id={val.id} key={index} removeButtonClick={removeItem} /> // label{val.name} id={val.id} funckjeDousuawani
                ))
            }
            <TextInput onChange={onChangeText} value={inputText} />
            <AddButton onClick={onButtonCLick} />
        </>
    )
}
