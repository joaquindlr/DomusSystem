// Layout
import LayoutHome from "../layouts/LayoutHome";

//Pages
import Home from "../pages/Home";
import Propiedad from "../pages/Propiedad";
import MenuEmpleados from "../pages/MenuEmpleados";
import RegistroNuevoEmpleado from "../pages/RegistroNuevoEmpleado";
import NuevoClienteParticular from "../pages/NuevoClienteParticular";
import NuevoClienteCorporativo from "../pages/NuevoClienteCorporativo";

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
        path: "/propiedad/:id",
        component: Propiedad,
        exact: true,
      },
      {
        path: "/menu-empleados",
        component: MenuEmpleados,
        path: "/registro-empleado",
        component: RegistroNuevoEmpleado,
        exact: true,
      },
      {
        path: "/registro-particular",
        component: NuevoClienteParticular,
        exact: true,
      },
      {
        path: "/registro-corporativo",
        component: NuevoClienteCorporativo,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
