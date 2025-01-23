import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Estado para controlar el menú móvil
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { text: "Inicio", path: "/" },
    { text: "Servicios", path: "/servicios" },
    { text: "Contacto", path: "/contacto" },
    { text: "Nosotros", path: "/nosotros" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#D2B48C", // Fondo camel
        height: "100px",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo grande */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img
              src={logo}
              alt="Emunah Logo"
              style={{
                height: "230px", // Ajusta el tamaño para que sea proporcional al Navbar
              }}
            />
          </Link>
        </Box>

        {/* Botones del menú para pantallas grandes */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                fontWeight: "bold",
                marginRight: 2,
                color: "#FFFFFF", // Texto blanco
                "&:hover": {
                  color: "#A0522D", // Marrón oscuro al pasar el mouse
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Menú móvil */}
        <IconButton
          edge="end"
          onClick={() => toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>

        {/* Drawer para el menú móvil */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250, backgroundColor: "#D2B48C", height: "100%" }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton component={Link} to={item.path}>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: "bold",
                        color: "#FFFFFF", // Texto blanco
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
