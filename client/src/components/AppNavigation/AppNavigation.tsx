import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MapIcon from "@mui/icons-material/Map";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import { Routes } from "$Routes";
import { Link } from "react-router-dom";
import { navigationConfig } from "$models/main/navigationConfig";
import { useStyles } from "./styles";

export const AppNavigation = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='default'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            className={classes.itemLinkText}>
            The Hidden
          </Typography>

          <Link
            to='/authorization'
            className={`${classes.itemLink} ${classes.itemLinkText}`}>
            <Button color='inherit' variant='outlined'>
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={open} onClose={() => setOpen(!open)}>
        <List>
          {navigationConfig.map((el, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <Link to={el.path} className={classes.itemLink}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    {index === 0 && <MapIcon color='action' />}
                    {index === 1 && <AccountBoxIcon color='action' />}
                    {index === 2 && <SettingsIcon color='action' />}
                    {index === 3 && <InfoIcon color='action' />}
                  </ListItemIcon>
                  <ListItemText
                    primary={el.title}
                    sx={{ opacity: open ? 1 : 0 }}
                    className={classes.itemLinkText}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        {location.pathname === "/" && (
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Создать метку'
                  sx={{ opacity: open ? 1 : 0 }}
                  className={classes.itemLinkText}
                />
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }} style={{ padding: 0 }}>
        <Routes />
      </Box>
    </Box>
  );
};
