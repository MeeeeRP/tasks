import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [started, setStarted] = useState<boolean>(false);

    return (
        <div>
            The number of attempts left is {attempts}
            <Button
                onClick={() => {
                    setStarted(true);
                    setAttempts(attempts - 1);
                }}
                disabled={started || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setStarted(false);
                }}
                disabled={!started}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={started}
            >
                Mulligan
            </Button>
        </div>
    );
}
