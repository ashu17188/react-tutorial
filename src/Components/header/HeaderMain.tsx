import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeaderMain.scss";
const HeaderMain = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="p-0">
          <div className="header">I am header</div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderMain;
