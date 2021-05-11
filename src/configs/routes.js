// Layout
import LayoutHome from "../layouts/LayoutHome";

//Pages
import Home from "../pages/Home";
import MenuEmpleado from "../pages/MenuEmpleado";
import Documentacion from "../pages/Documentacion";

//register

//Other
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/",
    component: LayoutHome,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/menu-empleado",
        component: MenuEmpleado,
        exact: true,
      },
      {
        path: "/documentacion",
        component: Documentacion,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
