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
import Login from "../pages/login"
//register

//Other
import Error404 from "../pages/Error404";
import NuevaPropiedad from "../pages/NuevaPropiedad";
//agenda
import agenda from "../pages/agenda";
//cita
import cita from "../pages/cita";

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
        path: "/agenda",
        component: agenda,
        exact: true,
      },
      {
        path: "/cita",
        component: cita,
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
        path: "/nueva-propiedad",
        component: NuevaPropiedad,
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
        path: "/login",
        component: Login,
        exact: true,
      },
      {
        component: Error404,
      },

      // {
      //   path: "/propiedad",
      //   component: Propiedad,
      //   exact: true
      // }
    ],
  },
];

export default routes;
