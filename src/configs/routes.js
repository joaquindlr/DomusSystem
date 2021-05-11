// Layout
import LayoutHome from "../layouts/LayoutHome";

//Pages
import Home from "../pages/Home";
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
        path: "/regempleado",
        component: RegistroNuevoEmpleado,
        exact: true,
      },
      {
        path: "/regparticular",
        component: NuevoClienteParticular,
        exact: true,
      },
      {
        path: "/regcorporativo",
        component: NuevoClienteCorporativo,
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
