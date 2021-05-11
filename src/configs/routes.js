// Layout
import LayoutHome from "../layouts/LayoutHome";

//Pages
import Home from "../pages/Home";

//register

//Other
import Error404 from "../pages/Error404";
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
        exact:true,
      },
      {
        path: "/cita",
        component: cita,
        exact:true,
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
