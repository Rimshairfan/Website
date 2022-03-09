import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import { AppBar, Collapse, IconButton, Toolbar } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'

    }
    ,
    appbar: {
        background: 'none',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    bartitle: {
        flexGrow: '1',
        fontFamily: 'Nunito',
    },
    tool: {
        width: '80%',
        margin: '0 auto',

    },
    color: {
        color: "#B80F5E",
        fontFamily: 'Nunito',
        fontSize: '2rem',

    },
    color2: {
        color: "#fff",
        fontFamily: 'Nunito',
        fontSize: '3rem',
    },
    container: {

        textAlign: 'center'

    },
    godown: {
        color: "#B80F5E",
        fontSize: "7rem"

    }


}));

export default function Header() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.tool}>
                    <h1 className={classes.bartitle}>Your<span className={classes.color}>Diet</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked}  {...(checked ? { timeout: 1000 } : {})} collapsedheight={50}>
                <div className={classes.container}>
                    <h1><span className={classes.color2}>Welcome To </span><br /><span className={classes.color}>HealthCare.</span></h1>
                    <IconButton>
                        <KeyboardArrowDownIcon className={classes.godown} />
                    </IconButton>
                </div>
            </Collapse>
        </div>
    )
}