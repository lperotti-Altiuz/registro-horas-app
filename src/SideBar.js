import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Logo from "../src/assets/company_logo.png";
import {
  Link,
  useHistory
} from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuthDispatch, useAuthState } from "./hooks/LoginContext";
import { logout } from "./hooks/LoginActions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#3378af",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  img: {
    height: 30
  },
}));

export const SideBar = () => {
  const history = useHistory();
  const classes = useStyles();
   
  const routes = [
    {
      path: "/dashboard/projects",
      name: "Proyectos",
    },
    {
      path: "/dashboard/details",
      name: "Detalles",
    },
  ];

  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch);
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Registro de Horas
          </Typography>
          <Typography component="p" color="inherit">
            Bienvenido {userDetails.user.email}
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <Badge color="secondary">
              <ExitToAppIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
      >
        <div className={classes.toolbarIcon}>
          {/* LOGO ALTIUZ */}
          <img src={Logo} className={classes.img} alt="Logo Altiuz" />
        </div>
        <Divider />
        <List>
          {routes.map((route, index) => (
            <Link className={classes.link} key={index} to={route.path}>
              <ListItem button>
                <ListItemIcon>
                  {route.path === "/dashboard/projects" ? (
                    <AssignmentIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List></List>
      </Drawer>
    </div>
  );
};
