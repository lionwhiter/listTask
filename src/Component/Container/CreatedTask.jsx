import { useState, useContext } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";

import FormCreate from "../pure/FormCreate.jsx";
import { TaskContext } from "../../Context/TaskContext.jsx";

const CreatedTask = (props) => {
    const { createTask, task } = useContext(TaskContext);
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("");
    function alertShow(mesegge) {
        setMessage(mesegge);
        setShowAlert(!showAlert);
    }
    function handlerSubmit(params) {
        let title = document.getElementById("title"),
            desc = document.getElementById("desc");
        alertShow("Los Campos no deben estar Vacios");
        if (title.value.length <= 0 && desc.value.length <= 0) {
        } else {
            createTask({
                id: task.length + 1,
                title: title.value,
                desc: desc.value,
                statu: false,
                user: "Default User",
            });
            alertShow("Tarea agregada");
        }
    }

    return (
        <>
            <Toast
                show={showAlert}
                onClose={() => setShowAlert(!showAlert)}
                className="position-fixed top-0 end-0 mt-1 mx-2 shadow-lg text-end"
            >
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Aviso</strong>
                    <small>1 Seg</small>
                </Toast.Header>
                <Toast.Body className=" text-warning"> {message} </Toast.Body>
            </Toast>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Creación de Tarea
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className=" p-4">
                    <FormCreate />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>
                        Salir
                    </Button>
                    <Button variant="success" onClick={handlerSubmit}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CreatedTask;
