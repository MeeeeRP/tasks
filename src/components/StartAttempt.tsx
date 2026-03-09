import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [started, setStarted] = useState<boolean>(false);

    return (
        console.log(started, !started, attempts, attempts > 0),
        (
            <div>
                The number of attempts left is {attempts}
                {!started && attempts > 0 && (
                    <Button
                        onClick={() => {
                            setStarted(true);
                            setAttempts(attempts - 1);
                        }}
                    >
                        Start Quiz
                    </Button>
                )}
                {started && (
                    <Button
                        onClick={() => {
                            setStarted(false);
                        }}
                    >
                        Stop Quiz
                    </Button>
                )}
                {!started && (
                    <Button
                        onClick={() => {
                            setAttempts(attempts + 1);
                        }}
                    >
                        Mulligan
                    </Button>
                )}
            </div>
        )
    );
}
