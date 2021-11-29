import React, { useEffect, useState } from "react";
import { Card, Button, Alert, ListGroup, Row, Col } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { UserService } from "./UserService";
import { User } from "./Model/User";
import axios from "axios";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const [user, setUser] = useState({ name: "", email: "" });
  useEffect(() => {
    loadUesrById(1);
  }, []);

  const loadUesrById = async (id: number) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser({ name: res.data.name, email: res.data.email });
  };
  return (
    <>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
              </Link>
              <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Alert variant="primary">
                {user.name},{user.email}
              </Alert>
              <h2>User's List</h2>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
