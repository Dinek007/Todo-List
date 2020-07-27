import React from "react"
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { RemoveButton } from "../../components"
import { EditButton } from "../../components"

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    root1: {
        float: "left",
        backgroundColor: palette.primary.main,
        position: "relative",
        margin: "12px",
        borderRadius: 5,
        boxShadow: '1px 1px 3px 3px rgba(0, 0, 0, .5)',

    },
    root2: {
        left: "10px",
        position: "relative",
        float: "left",
        color: palette.secondary.main,
        aligContent: "left",
        margin: "15px",
        fontSize: "30px",
        [breakpoints.down('md')]: {
            fontSize: "23px",
        },
        [breakpoints.down('sm')]: {
            fontSize: "18px",
        },
    },
    root3: {
        position: "relative",
        float: "right",
        alignItems: "content",
    },
}));

export const ListItem = ({ label, id, removeButtonClick, editButtonClick }) => {
    const removeItem = () => {
        removeButtonClick(id)
    }
    const editItem = () => {
        editButtonClick(id)
    }
    const classes = useStyles();

    return <Grid className={classes.root1}>
        <Typography className={classes.root2}>{label}</Typography>
        <div className={classes.root3}>
            <RemoveButton onClick={removeItem} />
            <EditButton onClick={editItem} />
        </div>

    </Grid>
}
