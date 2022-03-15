import React from "react";
import { makeStyles } from '@mui/styles';
import image from "../../Image/bg.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },


}));

export const Window = ()=> {

    const classes = useStyles();
    return (
        <div className={classes.root}>
        welcome
                 </div>

    );

}