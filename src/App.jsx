import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import CreatedTask from "./Component/Container/CreatedTask.jsx";
import ListTask from "./Component/Container/ListTask.jsx";
import "./App.css";

const App = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <main>
            <Container fluid className="p-3 text-white">
                <Container className="p-5 mb-4 bg-dark rounded-3 ">
                    <Row xs = {1}>
                        <Col  className="contentGeneri">
                            <h1 className="header text-center">
                                Bienvenido a la Gestion de tareas Internas!...
                            </h1>
                            <Button
                                variant="success"
                                onClick={() => setModalShow(true)}
                            >
                                Crear Nuevas Tarea
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <ListTask />
            </Container>
            <CreatedTask show={modalShow} onHide={() => setModalShow(false)} />
        </main>
    );
};

export default App;
