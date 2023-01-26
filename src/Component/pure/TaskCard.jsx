import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { TaskContext } from "../../Context/TaskContext.jsx";

function Taskcard({ list, statu }) {
    const { updateTask, delenteTask } = useContext(TaskContext);
    if (statu == list.statu) {
        return (
            <Card className="text-dark mt-4">
                <Card.Header className="headerCard">
                    Tarea N° {list.id}
                    <OverlayTrigger
                        key={list.id}
                        placement="left"
                        overlay={
                            <Tooltip id={`delenteTask-${list.id}`}>
                                Eliminar {"  "}
                                <strong className="text-danger">Tárea </strong>
                                N° <cite className="fw-800"> {list.id}</cite>
                            </Tooltip>
                        }
                    >
                        <CloseButton onClick={() => delenteTask(list.id)} />
                    </OverlayTrigger>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{list.title}</Card.Title>
                    <Card.Text>{list.desc}</Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => updateTask(list.id)}
                    >
                        {list.statu}
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Taskcard;
