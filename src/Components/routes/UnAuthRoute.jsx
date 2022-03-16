import { Route, Redirect } from "react-router-dom";



export const UnAuthRoute = (props)=> {
    const {component: Component, ...rest} = props;

    const authorized = false;

    return(
        <Route 
            {...rest}
            render={(matchprops)=>
                authorized ? <Redirect to="/home/window" /> : <Component {...matchprops}/>
            }
        />
    )
}