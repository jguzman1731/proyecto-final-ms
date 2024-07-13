import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://itsqmet.edu.ec/wp-content/uploads/2023/12/noticia_nueva_-08-1024x650.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="bg-dark bg-opacity-50 text-white p-2 rounded">Educación de Calidad</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://itsqmet.edu.ec/wp-content/uploads/2024/07/Aventura-de-verano-2.webp"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="bg-dark bg-opacity-50 text-white p-2 rounded">Desarrollo Personalizado</h3>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Agrega más elementos del carrusel según sea necesario */}
        </Carousel>
      </div>

      <Container className="mt-5">
        <Row>
          <Col>
            <Card className="mb-4 shadow-sm rounded-lg">
              <Card.Body>
                <Card.Title className="fs-3 fw-bold text-primary">
                  Bienvenido a nuestra Unidad Educativa Gotitas del saber
                </Card.Title>
                <Card.Text className="fs-5 text-muted">
                  En "Gotitas del Saber", nos enorgullece contar con un equipo
                  excepcional de educadores dedicados, administrativos
                  comprometidos y especialistas en apoyo educativo, quienes son
                  el corazón latente de nuestra comunidad educativa. Cada
                  miembro de nuestro equipo está motivado por la pasión por la
                  enseñanza y el desarrollo integral de nuestros estudiantes,
                  trabajando incansablemente para asegurar que cada niño y
                  adolescente que pasa por nuestras aulas reciba una educación
                  de calidad que trascienda lo académico.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-4 shadow-sm rounded-lg">
              <Card.Body>
                <Card.Title className="fs-3 fw-bold text-primary">
                  Quiénes Somos
                </Card.Title>
                <Card.Text className="fs-5 text-muted">
                  En "Gotitas del Saber", nos dedicamos al desarrollo integral
                  de nuestros estudiantes desde preescolar hasta secundaria.
                  Nuestra misión es inspirar el amor por el aprendizaje y
                  fomentar un ambiente seguro y estimulante donde cada alumno
                  pueda alcanzar su máximo potencial académico, emocional y
                  social importándonos el bienestar físico y psicológico de
                  nuestros queridos estudiantes. Con un equipo de educadores
                  apasionados y comprometidos, estamos enfocados en preparar a
                  nuestros estudiantes para enfrentar los desafíos del mundo
                  moderno con confianza y competencia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        

        <Row>
          <Col>
            <Card className="mb-4 shadow-sm rounded-lg">
              <Card.Body>
                <Card.Title className="fs-3 fw-bold text-primary text-center">
                  Contacto
                </Card.Title>
                <Card.Text className="fs-5 text-muted text-center">
                  Información de contacto: Dirección: Carán 3 - 195 y, Calle B
                  2, Quito 170403, teléfono: 3187-509; 3846-459, correo
                  electrónico: gotitadelsaber@gmail.com.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
