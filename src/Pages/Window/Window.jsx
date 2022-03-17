import React from "react";
import { makeStyles } from '@mui/styles';
import image from "../../Image/bg.jpg";
import { color, fontFamily } from "@mui/system";
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display:"flex"
    
    },
    title:{

           marginLeft:"50%",
          fontFamily:"Nunito",
          color:"#9de0af",
    },
    name:{
        fontSize:"40px",
        fontFamily:"Nunito",
        color:"#9de0af",
        marginTop:"5%",
         left:"50%",
         marginLeft:"-200px"

    }
 

}));
 

export const Window = ()=> {
    

    const classes = useStyles();
    return (

        <div className={classes.root}>

               <h1 className={classes.title}>Welcome </h1>   
               <h2  className={classes.name}>{localStorage.getItem("username")} !</h2>            

                 </div>

    );

}