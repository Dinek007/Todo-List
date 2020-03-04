import React from "react"
import { makeStyles } from '@material-ui/core/styles';

import { AddButton, TextInput } from "../../components"

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        top: "100%",
        left: "50%",
        marginTop: "-110px",
        padding: "20px",
        height: "55px",
        flexWrap: "wrap",
        display: "flex",
        width: "280px",
        marginLeft: "-160px",
        borderRadius: 5,
        backgroundColor: "#666666",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
        position: "fixed",

    },
});

export const FormComponent = ({ onButtonCLick, onChangeText, inputText }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextInput onChange={onChangeText} value={inputText} />
            <AddButton onClick={onButtonCLick} />
        </div>
    )
}
