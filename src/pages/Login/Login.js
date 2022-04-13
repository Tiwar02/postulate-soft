import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

//Reactstrap
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [textAlert, setTextAlert] = useState("");
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  function onChange(e) {
    e.target.name === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  }

  function onSubmit(e) {
    if (username === "" || password === "") {
      setTextAlert("Llene todos los campos");
      setHasError(true);
    } else {
      if (username === "1001" && password === "2002") {
        setUser({ loggedIn: true });
        if (location.state?.from) {
          navigate(location.state.from);
        }
        alert("Logueo Exitosoo")
      } else {
        setUser({ loggedIn: true });
        setTextAlert("Su usuario o contraseña son incorrectos");
        setHasError(true);
      }
    }
  }

  return (
    <div>
      {/* <p>{`Logged: ${user.loggedIn}`}</p> */}
      <Form className="login-form">
        <h1 className="text-center">Bienvenido/a</h1>
        <Alert
          color="danger"
          toggle={() => {
            setHasError(false);
          }}
          isOpen={hasError}
        >
          {textAlert}
        </Alert>
        <FormGroup>
          <Label for="username">Usuario</Label>
          <Input
            id="username"
            name="username"
            placeholder="Ingrese su usuario"
            type="number"
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            type="password"
            onChange={onChange}
          />
        </FormGroup>

        <Button style={{ background: "#C20C19" }} block size="lg" onClick={onSubmit}>
          Login
        </Button>
      </Form>
      <div className="text-center pt-3">
        <Link className="link-style" to="/signup-companies" >¿Nueva empresa o contacto? Regístrate</Link>
        <span className="p-2">|</span>
        <Link className="link-style" to="/forgot-password">Olvidé la contraseña</Link>
      </div>
    </div>
  );
};

export default Login;
