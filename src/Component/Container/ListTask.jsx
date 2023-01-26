import React, { useState, useContext } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import TaskCard from "../pure/TaskCard";
import { TaskContext } from "../../Context/TaskContext";

const ListTask = () => {
    const [listState, setListState] = useState("Pendiente");
    const { task } = useContext(TaskContext);

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={listState}
            onSelect={(K) => setListState(K)}
            className="mb-3 text-dark"
        >
            <Tab eventKey="Pendiente" title="Pendiente">
                <Row xs={1} md={2}>
                    {task.map((task) => (
                        <Col key={task.id}>
                            <TaskCard list={task} statu={"Pendiente"} />
                        </Col>
                    ))}
                </Row>
            </Tab>
            <Tab eventKey="Realizados" title="Realizados">
                <Row xs={1} md={2}>
                    {task.map((task) => (
                        <Col key={task.id}>
                            <TaskCard list={task} statu={"Realizados"} />
                        </Col>
                    ))}
                </Row>
            </Tab>
        </Tabs>
    );
};

export default ListTask;
