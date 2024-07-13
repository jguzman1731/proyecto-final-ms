import React from "react";

const Nosotros = () => {
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-md-6 display-grid align-center">
          <h1>Nuestra Historia</h1>
          <img src="/fondo-principal.jpg" width="80%" />
        </div>
        <div className="col-md-6" style={styles.textcenter}>
          <p>
            "Gotitas del Saber" fue fundada el 19 de abril de 1980 por el padre
            Alfonso Romero y el profesor José Wilian, con la visión de crear un
            espacio educativo que no solo se centrara en el desarrollo
            académico, sino también en el crecimiento personal y social de cada
            estudiante. Inspirados por la necesidad de una educación integral
            que estimulara la curiosidad y promoviera valores fundamentales como
            el respeto y la excelencia, nuestros fundadores establecieron esta
            institución con un compromiso inquebrantable hacia la calidad
            educativa y el bienestar de los estudiantes
          </p>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6" style={styles.textcenter}>
          <p>
            En "Gotitas del Saber", nuestra visión es ser reconocidos como
            líderes en la formación educativa integral, donde cada estudiante
            descubre y desarrolla su máximo potencial académico, emocional y
            social. Nos comprometemos a cultivar un ambiente donde la curiosidad
            sea fomentada, el respeto mutuo sea valorado y la excelencia sea una
            meta alcanzable para todos nuestros alumnos. A través de programas
            educativos innovadores y un equipo docente dedicado, aspiramos a
            preparar a nuestros estudiantes para enfrentar los desafíos del
            mundo moderno con confianza y competencia.
          </p>
        </div>
        <div className="col-md-6" style={styles.textcenter}>
          <h1>Misión y Visión</h1>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6" style={styles.textcenter}>
          <h1>Nuestro Equipo</h1>
        </div>
        <div className="col-md-6" style={styles.textcenter}>
          <p>
            En "Gotitas del Saber", nuestro equipo está compuesto por educadores
            apasionados y dedicados que son el corazón de nuestra comunidad
            educativa. Cada miembro de nuestro equipo está comprometido con el
            desarrollo integral de nuestros estudiantes, ofreciendo no solo
            conocimientos académicos, sino también guía emocional y apoyo
            personalizado.
          </p>
          <p>
            <strong>Director/a:</strong> Hernando Jaramillo - Con 25 años de
            experiencia en educación, lidera nuestra institución con visión y
            dedicación, asegurando que cada decisión y proyecto esté alineado
            con nuestra misión educativa.
            <br />
            <strong>Coordinador Académico:</strong> Paul Loza - Responsable de
            supervisar el currículo escolar y coordinar los programas
            educativos, asegurando que cada estudiante reciba una educación de
            calidad que estimule su crecimiento académico y personal.
          </p>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6" style={styles.textcenter}>
          <ul>
            <li>
              Premios Académicos: Constantemente nuestros estudiantes han
              destacado en competencias académicas locales y nacionales,
              demostrando un alto nivel de conocimientos y habilidades.
            </li>
            <li>
              Programas Extracurriculares: Nuestros programas deportivos,
              artísticos y culturales han obtenido reconocimientos por su
              contribución al desarrollo físico, emocional y social de nuestros
              estudiantes.
            </li>
            <li>
              Impacto Comunitario: "Gotitas del Saber" se ha comprometido
              activamente con la comunidad a través de proyectos de servicio
              social y colaboraciones con instituciones locales, promoviendo
              valores de solidaridad y responsabilidad cívica entre nuestros
              estudiantes.
            </li>
          </ul>
        </div>
        <div className="col-md-6" style={styles.textcenter}>
          <h1>Logros y Reconocimientos</h1>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-12 text-center">
          <h1>Contacto</h1>
          <br />
          <p style={styles.contactInfo}>
            ¡Estamos aquí para ayudarte! Puedes encontrarnos en CDI Gotitas del
            saber sur, S42 &, Quito 170146{" "}
            <a
              href="https://maps.app.goo.gl/iypLjV4qjppzRHSw8"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Haz clic aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  textcenter: {
    display: "grid",
    placeItems: "center",
  },
  container: {
    maxWidth: "90%",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  contactInfo: {
    fontSize: "1.2rem",
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Nosotros;
