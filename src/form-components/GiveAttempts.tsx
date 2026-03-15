import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [input, setInput] = useState<string>("");

    function useAttempt() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }
    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function updateAttempts() {
        setAttempts(input === "" ? attempts : attempts + parseInt(input));
        setInput("");
    }

    return (
        <div>
            <p>You have {attempts} remaining</p>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={input}
                    onChange={updateInput}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={updateAttempts}>Gain</Button>
        </div>
    );
}
