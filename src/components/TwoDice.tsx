import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [die1, setDie1] = useState<number>(5); //would do d6() but they might randomly start the same
    const [die2, setDie2] = useState<number>(2);

    return (
        <div>
            <span
                style={{ border: "1px solid black", margin: "5px" }}
                data-testid="left-die"
            >
                {die1}
            </span>
            <span style={{ border: "1px solid black" }} data-testid="right-die">
                {die2}
            </span>

            <Button
                onClick={() => {
                    setDie1(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setDie2(d6());
                }}
            >
                Roll Right
            </Button>
            <p>
                {die1 === die2 ?
                    die1 === 1 ?
                        "Snake Eyes! You Lose :("
                    :   "It's a pair... congratulations you Win!"
                :   ""}
            </p>
        </div>
    );
}
