import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import Cards from "./Cards";
const useStyles = makeStyles((theme) => ({}));
export default function(){
const classes=useStyles();
return(
<div className={classes.root}>
    <Cards/>
</div>
);

}
