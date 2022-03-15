import { Login } from "../../Pages/Login/Login";
import { Meals } from "../../Pages/Plan/Meals";
import { Window } from "../../Pages/Window/Window";
import { Menu } from "../../Pages/Menu/Menu";
import { Plan } from "../../Pages/Plan/Plan";
import {Contact} from "../Contact";

const routes = {
  auth: [
    {
      path: "/home/window",
      component: Window,
      exact: true,
    },
    {
      path: "/home/meals",
      component: Meals,
      exact: true,
    },
    {
      path: "/home/menu",
      component: Menu,
      exact: true,
    },
    {
      path: "/home/plans",
      component: Plan,
      exact: true,
    },
    {
        path: "/home/contact",
        component: Contact,
        exact: true,
    },
  ],
  unAuth: [
    {
      path: "/",
      component: Login,
      exact: true,
    },
  ],
};

export const getRoutes = (type) => {
  return routes[type];
};
