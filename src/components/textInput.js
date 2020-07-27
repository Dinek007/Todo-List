import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        borderRadius: 3,

        border: 0,
        width: "60%",
        display: "flex",
        color: 'white',
        height: "30px",
        margin: "0px",
    },
});

export const TextInput = ({ onChange, value }) => {
    const classes = useStyles();
    return (
        <TextField id="standard-basic" label="Text here" className={classes.root} type='text' onChange={onChange} value={value} />
    )
}
