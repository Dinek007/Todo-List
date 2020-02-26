import React from "react"
import { ListItem } from "./listItem"
import { AddButton, TextInput } from "../../components"

export const ListComponent = ({ list, onButtonCLick, onChangeText, inputText }) => {
    return (
        <>
            {
                list.map((val, index) => (
                    <ListItem label={val} key={index} />

                ))
            }
            <TextInput onChange={onChangeText} value={inputText} />
            <AddButton onClick={onButtonCLick} />
        </>
    )
}
