import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    root: {
        position: "relative",
        borderRadius: 3,
        backgroundColor: palette.secondary.main,
        borderRadiu: 0,
        fontSize: "14px",
        float: "right",
        right: "5px",
        color: palette.primary.light,
        height: "50px",
        marginTop: "13px",
        marginLeft: "18px",
        marginBottom: "10px",
        marginRight: "5px",
        [breakpoints.down('md')]: {
            height: "38px",
        },
        [breakpoints.down('sm')]: {
            height: "30px",
        },

    },
}));

export const EditButton = ({ onClick, label = "EDIT" }) => {
    const classes = useStyles();
    return (
        <Button color="primary" className={classes.root} onClick={onClick}> {label} </Button>
    )
}
