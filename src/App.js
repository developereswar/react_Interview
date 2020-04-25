import React from "react";
import "./styles.css";
import TablePage from "./TablePage";
import { Container, Col, Row } from "react-bootstrap";
export default function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <TablePage />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
