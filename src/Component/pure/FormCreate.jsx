import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function FormCreate() {
    const [title, setTitle] = useState("");
    return (
        <>
            <InputGroup className="mb-3 mt-4">
                <InputGroup.Text className="text-indigo" id="basic-addon1">
                    Titulo
                </InputGroup.Text>
                <Form.Control
                    className="text-dark"
                    placeholder="Nombre Titulo de la Tarea"
                    aria-label="title"
                    aria-describedby="basic-addon1"
                    id= "title"
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text className="">Descripción </InputGroup.Text>
                <Form.Control
                    as="textarea"
                    aria-label="Descripción de Tarea"
                    placeholder="Agrega Descripción."
                    id="desc"
                />
            </InputGroup>
        </>
    );
}

export default FormCreate;
