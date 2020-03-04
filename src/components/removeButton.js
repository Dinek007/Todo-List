import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        position: "relative",
        borderRadius: 3,
        backgroundColor: "#666666",
        border: 0,
        fontSize: 10,
        float: "right",
        right: "5px",
        boxShadow: '0 1px 5px 2px rgba(255, 0, 0, .4)',
        color: 'white',
        height: "35px",
        margin: "10px"
    },
});

export const RemoveButton = ({ onClick, label = "REMOVE" }) => {
    const classes = useStyles();
    return (
        <Button color="primary" className={classes.root} onClick={onClick}> {label} </Button>
    )
}
