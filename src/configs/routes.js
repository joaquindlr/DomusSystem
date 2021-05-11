// Layout
import LayoutHome from "../layouts/LayoutHome";

//Pages
import Home from "../pages/Home";
import Propiedad from "../pages/Propiedad";
import RegistroNuevoEmpleado from "../pages/RegistroNuevoEmpleado";
import NuevoClienteParticular from "../pages/NuevoClienteParticular";
import NuevoClienteCorporativo from "../pages/NuevoClienteCorporativo";
import MenuEmpleado from "../pages/MenuEmpleado";
import Documentacion from "../pages/Documentacion";
import Ejemplo from "../pages/ejemplo";

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
        path: "/menu-empleado",
        component: MenuEmpleado,
        exact: true,
      },
      {
        path: "/documentacion",
        component: Documentacion,
        exact: true,
      },
      { path: "/ejemplo", component: Ejemplo, exact: true },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
