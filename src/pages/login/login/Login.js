import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import useFirebase from "../../../hook/useFirebase";

const Login = () => {
  const {user, signInUsingGoogle } = useFirebase();
  return (
    <Form className="mx-auto mt-4 w-50">
      <h3 className="text-info text-center">Please Login</h3>
      <p>{user.email}</p>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check className="text-start" label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>

      <div className="mx-auto text-center">
        --------------or use one of these options------------------
      </div>

      <div className="mx-auto text-center mt-4">
        <Button onClick={signInUsingGoogle} variant="primary">
          Google Sign In
        </Button>
      </div>
    </Form>
  );
};

export default Login;
