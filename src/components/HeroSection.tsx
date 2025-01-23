import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      style={{
        padding: "5rem 2rem",
        textAlign: "center",
        marginTop: "100px", // Compensa la altura del Navbar
        backgroundColor: "#F5F5DC", // Fondo beige
      }}
    >
      {/* Título principal */}
      <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "#333333" }}>
        Emunah Digital Marketing
      </h1>

      {/* Subtítulo inspirador */}
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#4F4F4F" }}>
        Lleva tu negocio al siguiente nivel con estrategias digitales efectivas.
      </p>

      {/* Breve explicación de la importancia del marketing digital */}
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#4F4F4F", lineHeight: "1.8" }}>
        El mundo digital te permite llegar a más clientes, generar confianza y
        destacar frente a la competencia. Ya sea que tengas un taller, un
        lavadero, o cualquier otro emprendimiento, una presencia online te
        ayuda a conectar con tus clientes, aumentar tus ventas y expandir tu
        alcance.
      </p>

      {/* Llamado a la acción */}
      <Link to="/contacto" style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: "12px 24px",
            fontSize: "1.2rem",
            backgroundColor: "#A0522D", // Marrón oscuro
            color: "#FFFFFF",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#8B4513") // Efecto hover más oscuro
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#A0522D") // Vuelve al original
          }
        >
          Contáctanos ahora
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
