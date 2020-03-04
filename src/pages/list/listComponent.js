import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ListItem } from "./listItem"

const useStyles = makeStyles({
    root1: {
        textAlign: "center",
        position: "relative",
        top: "40px",
        padding: "20px",

        flexWrap: "wrap",
        display: "flex",

        margin: "0 auto",
        marginBottom: "150px",
        borderRadius: 7,
        backgroundColor: "#555555",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
    },
    root2: {
        fontSize: "35px",
        margin: "0 auto",
        width: "80%",
    },

});

export const ListComponent = ({ list, removeItem, editItem }) => {
    const classes = useStyles();
    return (
        <Grid item xs="12" sm="6" className={classes.root1}>
            <Typography className={classes.root2}> Todo List </Typography>
            {
                list.map((val, index) => (
                    <ListItem
                        label={val.name}
                        id={val.id}
                        key={index}
                        removeButtonClick={removeItem}
                        editButtonClick={editItem}
                    />
                ))
            }
        </Grid>
    )
}
