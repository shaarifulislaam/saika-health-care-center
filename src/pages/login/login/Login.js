import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import useAuth from "../../../hook/useAuth/useAuth";


const Login = () => {

  const {user, signInUsingGoogle , userRegisterHandle ,loginProcessHandle} = useAuth();
console.log(user)
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [isLogin , setIsLogin] = useState(false);

  const emailHandle = (e) => {
     setEmail(e.target.value);
  } 
  const passwordHandle = (e) => {
      setPassword(e.target.value);
  }
  // console.log(email , password)
  const registerHandle = (e) =>{
    e.preventDefault();
        userRegisterHandle(email , password); 
  }
  const signInHandle = (e) =>{
    e.preventDefault();
    loginProcessHandle(email, password)
  }

  return (

    <Form className="mx-auto mt-4 w-50" >
        <p>User Email :{user.email}</p>
      <h3 className="text-info text-center">Please {isLogin ? "Login" : "Register"}</h3>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control 
          onBlur={emailHandle}
           type="email" 
           placeholder="Email"
            required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control 
          onBlur={passwordHandle}
          type="password"
           placeholder="Password" 
           required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check className="text-start" label="Already Registered ?" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button onClick={registerHandle} type="submit">Register</Button>
          <Button onClick={signInHandle} className="mx-2" type="submit">Login</Button>
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
