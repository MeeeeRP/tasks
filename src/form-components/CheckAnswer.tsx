import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function answerDisplay() {
        return answer === expectedAnswer ? "✔️" : "❌";
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Check Answer</Form.Label>
                <p>What is the answer to life, the universe, and everything?</p>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <h3>{answerDisplay()}</h3>
        </div>
    );
}
