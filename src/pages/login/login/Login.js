import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useAuth from "../../../hook/useAuth/useAuth";
import iconGoogle from "../../../images/icon/google.svg";

const Login = () => {
  const {
    signInUsingGoogle,
    userRegisterHandle,
    loginProcessHandle,
    handleNameChange,
    setUser,
  } = useAuth();

  // const history = useHistory();
  const location = useLocation();

  const redirect_url = location.state?.from || "/home";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  //handle google sign in
  const handleGoogleSign = () => {
    signInUsingGoogle().then((result) => {
      setUser(result.user);
      // history.push(redirect_url);
    });
  };

  //handle email
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };

  //handle password
  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  //handle toggle
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  //handle register
  const registerHandle = (e) => {
    e.preventDefault();
    // history.push(redirect_url);
    if (password.length < 6) {
      setError("Password must be atLeast 6 characters long");
      return;
    }
    isLogin
      ? loginProcessHandle(email, password)
      : userRegisterHandle(email, password);
  };

  return (
    <Form className="mx-auto mt-4 w-50" onSubmit={registerHandle}>
      <h3 className="login-text text-center ">
        Please {isLogin ? "Login" : "Register"}
      </h3>
      {!isLogin && (
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onBlur={handleNameChange}
              placeholder="Your name"
              required
            />
          </Col>
        </Form.Group>
      )}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            onBlur={emailHandle}
            type="email"
            placeholder="Email"
            required
          />
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
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check
            onChange={toggleLogin}
            className="text-start"
            label="Already Registered ?"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 text-warning">
        {error}
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit " className="btn-global">
            <span>
              <i class="fas fa-user-plus"></i> {isLogin ? "login" : "Register"}
            </span>
          </Button>
        </Col>
      </Form.Group>

      <div className="mx-auto text-center login-text-p">
        --------------or use one of these options------------------
      </div>

      <div className="mx-auto text-center mt-4">
        <Button
          onClick={handleGoogleSign}
          variant="white border border-1 border-gray"
        >
          <span>
            <img src={iconGoogle} alt="" />
          </span>
        </Button>
      </div>
    </Form>
  );
};

export default Login;
