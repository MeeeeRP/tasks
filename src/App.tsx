import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "purple" }}
            >
                <h1>AAAAHHHHHH I am so large since I am a header</h1>
                Maya :) Perry&apos;s UD CISC275 with React Hooks and TypeScript
                <br />
                This says Hello World!
            </header>
            <Container>
                <Row>
                    <Col>
                        <Button
                            onClick={() => {
                                console.log("Hello from the button!");
                            }}
                        >
                            Hello I am a button!
                        </Button>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "200px",
                                height: "100px",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World!
                        </Button>
                        <img
                            src="https://media.australian.museum/media/dd/images/2fed90f91bdd0cab0c01edf28f4a6e19.jpg"
                            alt="Image of a Jimble Jellyfish. This is Maya's roomate's favorite jellyfish. A Jimble jellyfish is a square shaped gelatinous creature with four long tendril-like leg things."
                        />
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100px",
                                height: "200px",
                            }}
                        ></div>{" "}
                        <ul>
                            <li>Maya is a cool person</li>
                            <li>She is also a great programmer</li>
                            <li>She is also a great friend</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
