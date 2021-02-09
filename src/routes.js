import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Appointment from "views/registry/Appointment";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Registry from "views/registry";
import Login from "views/auths/Login.js";
import Signup from "views/auths/Signup.js";

const authRoutes = [
  {
    path: "/login",
    name: "login",
    icon: "nc-icon nc-bell-55",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "signup",
    icon: "nc-icon nc-bell-55",
    component: Signup,
    layout: "/auth",
  },
];

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  {
    path: "/registry",
    name: "Registry",
    icon: "nc-icon nc-circle-09",
    component: Registry,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: Appointment,
    layout: "/admin",
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  {
    path: "/apointment",
    name: "apointment",
    icon: "nc-icon nc-bell-55",
    component: Appointment,
    layout: "/admin",
  },
  ...authRoutes,
];

export default dashboardRoutes;
