import React from "react"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { RemoveButton } from "../../components"
import { EditButton } from "../../components"

const useStyles = makeStyles({
    root1: {
        float: "left",
        backgroundColor: "#505050",
        position: "relative",
        margin: "12px",
        borderRadius: 5,
        boxShadow: '1px 1px 3px 3px rgba(0, 0, 0, .5)',
    },
    root2: {
        left: "10px",
        position: "relative",
        float: "left",
        color: 'white',
        aligContent: "left",
        margin: "15px",
    },
    root3: {
        position: "relative",
        float: "right",
        alignItems: "content",
    },
});

export const ListItem = ({ label, id, removeButtonClick, editButtonClick }) => {
    const removeItem = () => {
        removeButtonClick(id)
    }
    const editItem = () => {
        editButtonClick(id)
    }
    const classes = useStyles();

    return <Grid item xs="12" sm="12" className={classes.root1}>
        <Typography className={classes.root2}>{label}</Typography>
        <div className={classes.root3}>
            <RemoveButton onClick={removeItem} />
            <EditButton onClick={editItem} />
        </div>

    </Grid>
}
