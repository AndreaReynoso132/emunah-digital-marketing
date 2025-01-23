import React from "react";
import { Box, Typography, Grid, Button, Card, CardContent } from "@mui/material";

const ServicePage = () => {
  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        backgroundColor: "#F5F5DC",
        marginTop: "100px", // Compensa la altura del navbar
      }}
    >
      {/* Hero Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" color="#333">
          Lleva tu negocio al siguiente nivel
        </Typography>
        <Typography variant="body1" mt={2} mb={4} color="#4F4F4F">
          Descubre nuestros servicios de marketing digital diseñados para hacer crecer tu negocio.
        </Typography>
        <Button
          variant="contained"
          href="#planes"
          sx={{
            backgroundColor: "#A0522D",
            color: "#FFF",
            "&:hover": { backgroundColor: "#8B4513" },
          }}
        >
          Explorar planes
        </Button>
      </Box>

      {/* Servicios Generales */}
      <Grid container spacing={4} justifyContent="center">
        {[
          {
            title: "Presencia Online",
            description:
              "Crea y gestiona perfiles en redes sociales. Publica contenido educativo y relevante para tu audiencia.",
          },
          {
            title: "Campañas Publicitarias",
            description:
              "Configura Social Ads para captar clientes y posicionarte en los primeros resultados.",
          },
          {
            title: "Gestión de Contenido",
            description:
              "Diseño de publicaciones, respuesta a mensajes y estrategias de contenido personalizadas.",
          },
        ].map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#FFF8E1",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2} color="#333">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="#4F4F4F">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Planes de Servicio */}
      <Box mt={6} id="planes">
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4} color="#333">
          Nuestros Planes
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Plan Básico",
              price: "$100",
              features: [
                "Publicaciones básicas",
                "Configuración de página",
                "Atención básica a mensajes",
              ],
            },
            {
              title: "Plan Intermedio",
              price: "$200",
              features: [
                "Análisis quincenal",
                "Publicaciones adicionales",
                "Estrategias personalizadas",
              ],
            },
            {
              title: "Plan Avanzado",
              price: "$300",
              features: [
                "Reuniones regulares",
                "Estrategias completas",
                "Informes y optimización continua",
              ],
            },
          ].map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#FFF8E1",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                  textAlign: "center",
                  padding: "2rem 1rem",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={2} color="#333">
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    color="#A0522D"
                  >
                    {plan.price}
                  </Typography>
                  {plan.features.map((feature, idx) => (
                    <Typography key={idx} variant="body2" mb={1} color="#4F4F4F">
                      {feature}
                    </Typography>
                  ))}
                  <Button
                    variant="contained"
                    href="/contacto"
                    sx={{
                      mt: 2,
                      backgroundColor: "#A0522D",
                      color: "#FFF",
                      "&:hover": { backgroundColor: "#8B4513" },
                    }}
                  >
                    Consultar
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicePage;
