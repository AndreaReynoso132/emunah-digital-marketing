import { Box, Typography, Button, Container, Card, CardContent } from "@mui/material";

const AboutPage = () => {
  return (
    <Box
      sx={{
        padding: "5rem 2rem",
        backgroundColor: "#F5F5DC", // Fondo beige
        textAlign: "center",
        marginTop: "100px", // Compensación para el Navbar
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#333333", // Texto oscuro
        }}
      >
        La Fe en cada estrategia, el éxito en cada paso
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.2rem",
          color: "#4F4F4F",
          marginBottom: "2rem",
        }}
      >
        En <strong>Emunah Digital Marketing</strong>, nos dedicamos a ayudar a
        negocios pequeños y medianos a alcanzar su máximo potencial mediante estrategias
        de marketing digital efectivas y personalizadas. Nuestro objetivo es brindarte las herramientas
        necesarias para que tu marca destaque y crezca.
      </Typography>

      {/* Información de Ignacio */}
      <Container maxWidth="sm">
        <Card
          sx={{
            backgroundColor: "#D2B48C", // Fondo camel
            color: "#FFFFFF",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            marginBottom: "2rem",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "#FFFFFF",
              }}
            >
              Ignacio Serra Lynch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                marginBottom: "1rem",
                color: "#FFE4C4", // Color más claro para resaltar
              }}
            >
              Especialista en Marketing Digital
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "1rem",
              }}
            >
              Con experiencia en <strong>marketing digital</strong> y pasión por ayudar a negocios a
              prosperar, Ignacio combina creatividad con estrategias basadas en datos para lograr
              resultados significativos para sus clientes.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8B4513", // Marrón oscuro
                "&:hover": {
                  backgroundColor: "#A0522D", // Marrón claro
                },
              }}
              href="https://www.linkedin.com/in/ignacio-serra-lynch-219693ba/"
              target="_blank"
            >
              Conéctate en LinkedIn
            </Button>
          </CardContent>
        </Card>
      </Container>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1.2rem",
          color: "#4F4F4F",
        }}
      >
        Creemos en el poder del marketing digital para transformar negocios. ¡Trabajemos juntos
        para alcanzar tus metas!
      </Typography>
    </Box>
  );
};

export default AboutPage;
