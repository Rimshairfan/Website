import React from "react";
import { makeStyles } from '@mui/styles';
// import { bgcolor } from "@mui/system";
import image from "./Image/bg.jpg";
import { CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import  Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '60vh',
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },


}));
export default function Window() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
                 </div>

    );

}