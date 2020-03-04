import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        borderRadius: 3,
        backgroundColor: "#777777",
        border: 0,
        borderRadius: 10,
        boxShadow: '0 1px 5px 2px rgba(0, 255, 0, .9)',
        color: 'white',
        height: "40px",
        margin: "10px"
    },
});

export const AddButton = ({ onClick, label = "ADD" }) => {
    const classes = useStyles();
    return (
        <Button className={classes.root} onClick={onClick}> {label} </Button>
    )
}
