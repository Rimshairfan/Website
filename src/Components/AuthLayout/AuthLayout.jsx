import { Route, Redirect,Switch } from "react-router-dom";
import { Routes } from "../routes/Routes";
import {Footer} from '../Footer'
import {Navbar} from '../Navbar';

export const AuthLayout = (props)=> {
    return(
        <>
            <Navbar />
            <Switch>
                <Routes routeType={"auth"} />
                <Route exact path="/" render={()=> <Redirect to="/home/window" />} />
            </Switch>
            <Footer />
        </>
    )
}