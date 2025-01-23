import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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

        {/* Botones del menú */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            component={Link}
            to="/"
            sx={{
              fontWeight: "bold",
              marginRight: 2,
              color: "#FFFFFF", // Texto blanco
              "&:hover": {
                color: "#A0522D", // Marrón oscuro al pasar el mouse
              },
            }}
          >
            Inicio
          </Button>
          <Button
            component={Link}
            to="/servicios"
            sx={{
              fontWeight: "bold",
              marginRight: 2,
              color: "#FFFFFF",
              "&:hover": {
                color: "#A0522D",
              },
            }}
          >
            Servicios
          </Button>
          <Button
            component={Link}
            to="/contacto"
            sx={{
              fontWeight: "bold",
              marginRight: 2,
              color: "#FFFFFF",
              "&:hover": {
                color: "#A0522D",
              },
            }}
          >
            Contacto
          </Button>
          <Button
            component={Link}
            to="/nosotros"
            sx={{
              fontWeight: "bold",
              color: "#FFFFFF",
              "&:hover": {
                color: "#A0522D",
              },
            }}
          >
            Nosotros
          </Button>
        </Box>

        {/* Menú móvil */}
        <IconButton edge="end" sx={{ display: { xs: "block", md: "none" } }}>
          <MenuIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
