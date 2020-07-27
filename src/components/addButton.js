import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    root: {
        backgroundColor: palette.secondary.main,
        border: 0,
        borderRadius: 10,
        position: "relative",
        float: "left",
        left: "5%",
        color: palette.primary.light,
        height: "40px",
        margin: "10px"
    },
}));

export const AddButton = ({ onClick, label = "ADD" }) => {
    const classes = useStyles();
    return (
        <Button className={classes.root} onClick={onClick}> {label} </Button>
    )
}
