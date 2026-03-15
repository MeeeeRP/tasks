import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="editMode">
                <Form.Label>Edit Mode</Form.Label>
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    checked={isEditing}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setIsEditing(event.target.checked);
                    }}
                />
            </Form.Group>
            {isEditing && (
                <Row>
                    <Col>
                        <Form.Group controlId="nameInput">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setName(event.target.value);
                                }}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="studentStatus">
                            <Form.Label>Student Status</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label="Is a student"
                                checked={isStudent}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setIsStudent(event.target.checked);
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            )}
            {!isEditing && (
                <p>
                    {name} is {isStudent ? "" : "not"} a student.
                </p>
            )}
        </div>
    );
}
