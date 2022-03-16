import { Route, Redirect } from "react-router-dom";
import {withRouter} from 'react-router';

export const AuthRoute = (props)=> {
    const {component: Component, ...rest} = props;

    const authorized = true;

    return(
        <Route 
            {...rest}
            render={(matchprops)=>
                authorized ? <Component {...matchprops}/> : <Redirect to="/" />
            }
        />
    )
}