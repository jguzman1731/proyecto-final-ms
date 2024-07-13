import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/Config';
import './style/CampusVirtual.css';

import bibliotecaImage from './image/biblioteca.jpg';  
import aulaImage from './image/aula.jpg';  
import soporteImage from './image/soporte.jpg';  
import recordImage from './image/record.jpg'; 
import perfilesImage from './image/perfiles.jpg';  

function CampusVirtual() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  };

  const items = [
    { src: bibliotecaImage, alt: "Biblioteca Virtual", link: "/biblioteca-virtual", label: "Biblioteca Virtual" },
    { src: aulaImage, alt: "Aula Virtual", link: "/aula-virtual", label: "Aula Virtual" },
    { src: soporteImage, alt: "Soporte y Ayuda", link: "/soporte-ayuda", label: "Soporte y Ayuda" },
    { src: recordImage, alt: "Record Académico", link: "/record-academico", label: "Record Académico" },
    { src: perfilesImage, alt: "Perfiles", link: "/perfiles", label: "Perfiles" },
  ];

  return (
    <Container className="mt-5">
      <Row>
        {items.map((item, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src={item.src} alt={item.alt} className="card-image" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.label}</Card.Title>
                <Link to={item.link} className="mt-auto">
                  <Button variant="primary" className="w-100">Ir</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
          <Button variant="danger" onClick={handleLogout}>Cerrar Sesión</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CampusVirtual;
