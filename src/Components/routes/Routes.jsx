import { getRoutes } from "./navigation";
import { Route } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import { UnAuthRoute } from "./UnAuthRoute";

const selectRoute = (routes, routeType) => {
  return routes.map((route, index) => {
    if (routeType === "auth") {
      return (
        <AuthRoute
          key={routeType + index + route.name}
          exact={route.exact}
          component={route.component}
          path={route.path}
        />
      );
    } else if (routeType === "unAuth") {
      return (
        <UnAuthRoute
          key={routeType + index + route.name}
          exact={route.exact}
          component={route.component}
          path={route.path}
        />
      );
    } else {
      return (
        <Route
          key={routeType + index + route.name}
          path={route.path}
          component={route.component}
        />
      );
    }
  });
};

export const Routes = (props)=> {
    const {routeType} = props;
    return selectRoute(getRoutes(routeType),routeType);
}
