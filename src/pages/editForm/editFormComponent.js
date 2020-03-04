import React from "react"
import { makeStyles } from '@material-ui/core/styles';

import { AddButton, TextInput } from "../../components"

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        left: "50%",
        top: "50%",
        marginTop: "-47.5px",
        padding: "20px",
        height: "55px",
        flexWrap: "wrap",
        display: "flex",
        width: "280px",
        zIndex: 1,
        marginLeft: "-160px",
        borderRadius: 5,
        backgroundColor: "#666666",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
        position: "fixed",

    },
});

export const EditFormComponent = ({ value, changeText, onButtonClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextInput onChange={changeText} value={value} />
            <AddButton onClick={onButtonClick} label="EDIT" />
        </div>
    )
}
