import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "calc(100vh - 200px)", // Altura ajustada al viewport menos el footer y navbar
        padding: "4rem 2rem", // Mayor margen superior e inferior
        backgroundColor: "#F5F5DC", // Fondo beige
        marginTop: "100px", // Espacio adicional para separar del navbar
      }}
    >
      {/* Título llamativo */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: "#333333", // Texto principal
        }}
      >
        Impulsa tu negocio al éxito digital
      </Typography>

      {/* Descripción */}
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.2rem",
          marginBottom: "3rem",
          color: "#4F4F4F", // Texto secundario
        }}
      >
        Estamos aquí para ayudarte a conectar con tus clientes y alcanzar tus
        metas digitales. Contáctanos por correo o WhatsApp.
      </Typography>

      {/* Opciones de contacto */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        {/* Correo Electrónico */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "#FFF8E1", // Fondo suave
            padding: "1rem 2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            width: "100%",
          }}
        >
          <FaEnvelope size={32} color="#A0522D" />
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              color: "#333333",
              fontWeight: "bold",
              flexGrow: 1,
            }}
          >
            Email: igslynch@gmail.com
          </Typography>
          <Button
            variant="contained"
            href="mailto:igslynch@gmail.com"
            sx={{
              backgroundColor: "#A0522D",
              "&:hover": { backgroundColor: "#8B4513" },
              color: "#FFFFFF",
              fontWeight: "bold",
            }}
          >
            Escribir
          </Button>
        </Box>

        {/* WhatsApp */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "#E8F5E9", // Fondo verde claro
            padding: "1rem 2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            width: "100%",
          }}
        >
          <FaWhatsapp size={32} color="#25D366" />
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              color: "#333333",
              fontWeight: "bold",
              flexGrow: 1,
            }}
          >
            WhatsApp: +54 9 294 464-0994
          </Typography>
          <Button
            variant="contained"
            href="https://wa.me/5492944640994"
            target="_blank"
            sx={{
              backgroundColor: "#25D366",
              "&:hover": { backgroundColor: "#1EBF57" },
              color: "#FFFFFF",
              fontWeight: "bold",
            }}
          >
            Enviar mensaje
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
