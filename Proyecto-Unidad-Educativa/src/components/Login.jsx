import React, { useState } from 'react';
import { Button, Card, Nav, Tab, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, db } from '../config/Config';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/login.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential);
      window.location.href = '/campusVirtual';
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (email !== emailConfirm) {
      setError("Emails do not match");
      return;
    }
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await set(ref(db, 'usuarios/' + user.uid), {
        firstName,
        lastName,
        email,
      });
      alert("Registro exitoso");
      clearForm();
    } catch (error) {
      setError(error.message);
    }
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setEmailConfirm("");
    setPasswordConfirm("");
  };

  return (
    <Container className="mt-5">
      <Tab.Container activeKey={isLogin ? 'login' : 'register'}>
        <Card className="shadow-lg p-3">
          <Card.Header>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="login" onClick={() => setIsLogin(true)}>Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="register" onClick={() => setIsLogin(false)}>Registro</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="loginEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="loginPassword" className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">Ingresar</Button>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="register">
                <Form onSubmit={handleRegister}>
                  <Row>
                    <Col>
                      <Form.Group controlId="firstName" className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="lastName" className="mb-3">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="registerEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="emailConfirm" className="mb-3">
                    <Form.Label>Confirmacion del email</Form.Label>
                    <Form.Control
                      type="email"
                      value={emailConfirm}
                      onChange={(e) => setEmailConfirm(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="registerPassword" className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="passwordConfirm" className="mb-3">
                    <Form.Label>Confirmacion de la contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">Registrar</Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          </Card.Body>
        </Card>
      </Tab.Container>
    </Container>
  );
};

export default AuthPage;
