import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ListItem } from "./listItem"

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    root1: {
        textAlign: "center",
        position: "relative",
        top: "40px",
        padding: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        display: "flex",
        margin: "0 auto",
        marginBottom: "150px",
        borderRadius: 7,
        backgroundColor: palette.primary.dark,
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
    },
    root2: {
        fontSize: "50px",
        margin: "0 auto",
        width: "100%",
        color: palette.primary.light
    },

}));

export const ListComponent = ({ list, removeItem, editItem }) => {
    const classes = useStyles();
    return (
        <Grid item xs="12" sm="10" className={classes.root1}>
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
