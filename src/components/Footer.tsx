const Footer = () => {
    return (
      <footer
        style={{
        backgroundColor: "#A0522D",
          color: "#FFFFFF", // Texto blanco
          textAlign: "center",
          padding: "1rem 0",
          position: "fixed", // Posición fija
          bottom: 0, // Siempre al fondo
          left: 0,
          width: "100%", // Ocupa todo el ancho
          zIndex: 10, // Se asegura de estar por encima del fondo
        }}
      >
        <p style={{ margin: 0, fontSize: "1rem" }}>
          © {new Date().getFullYear()} Emunah Digital Marketing. Todos los derechos reservados.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  