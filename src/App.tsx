import React from "react";
import "./App.css";
import { Button, Container, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div
            className="App"
            style={{ border: "4px solid red", padding: "4px" }}
        >
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>

            <Container>
                <Col
                    style={{
                        height: "80px",
                        width: "80px",
                        backgroundColor: "red",
                    }}
                >
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>four</li>
                    </ul>
                </Col>
            </Container>

            <img alt="text" />

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <h1>Hello World</h1>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Chris Letourneau</p>
        </div>
    );
}

export default App;
