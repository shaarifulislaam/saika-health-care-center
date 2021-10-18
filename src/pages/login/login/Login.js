import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hook/useAuth/useAuth";


const Login = () => {

  const { signInUsingGoogle , userRegisterHandle ,loginProcessHandle ,handleNameChange , setUser} = useAuth();

  const history = useHistory();
  const location = useLocation();

  const redirect_url = location.state?.from || "/home";

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [isLogin , setIsLogin] = useState(false);

  const handleGoogleSign = () => {
    signInUsingGoogle()
    .then((result) => {
      setUser(result.user)
      history.push(redirect_url);
    });
  }

  const emailHandle = (e) => {
     setEmail(e.target.value);
  } 
  const passwordHandle = (e) => {
      setPassword(e.target.value);
  }
  
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  const registerHandle = (e) =>{
    e.preventDefault();
      isLogin ?
      loginProcessHandle(email, password) 
      : userRegisterHandle(email , password);;
  }
  
  return (

    <Form className="mx-auto mt-4 w-50" onSubmit={registerHandle}>
     
      <h3 className="text-info text-center">Please {isLogin ? "Login" : "Register"}</h3>
      {
     !isLogin &&
     <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
     <Form.Label column sm={2}>
       Name
     </Form.Label>
     <Col sm={10}>
       <Form.Control 
     onBlur={handleNameChange}
        
        placeholder="Your name"
         required />
     </Col>
   </Form.Group>
  }
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
          <Form.Check onChange={toggleLogin} className="text-start" label="Already Registered ?" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button  type="submit">{isLogin ? "login" : "Register"}</Button>
         
        </Col>
      </Form.Group>

      <div className="mx-auto text-center">
        --------------or use one of these options------------------
      </div>

      <div className="mx-auto text-center mt-4">
        <Button onClick={handleGoogleSign} variant="primary">
          Google Sign In
        </Button>
      </div>
    </Form>
  );
};

export default Login;
