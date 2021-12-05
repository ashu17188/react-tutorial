import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeaderMain.scss";
const HeaderMain = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="p-0">
          <small>
            You are running this application in <b>{process.env.NODE_ENV}</b>{" "}
            mode.
          </small>
          <form>
            <input
              type="hidden"
              defaultValue={process.env.REACT_APP_NOT_SECRET_CODE}
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderMain;
