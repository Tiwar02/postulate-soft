import React, { useState } from "react";
import "./Login.css";
import {Link} from "react-router-dom";

//Reactstrap
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [textAlert, setTextAlert] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasError, setHasError] = useState(false);

  function onChange(e) {
    e.target.name === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  }

  function validateAccount(account) {
    /* let response = await this.$axios.get("http://localhost:3001/workers");

    for (var i = 0; i < response.data.length && !found; i++) {
      if (response.data[i].cc == this.user.cc) {
        if (response.data[i].password == this.user.password) {
          if (response.data[i].active == true) found = !found;
          this.user.rol = response.data[i].rol;
        }
      }
    } */
    const { username, password } = account;
    if (username === "" || password === "") {
      setHasError(true);
      setTextAlert("Llene todos los campos");
    } else {
      if (username === "1001" && password === "2002") {
        let ac = { username, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIsLoggedIn(true);
        alert("Se ha logueado correctamente!")
      } else {
        setIsLoggedIn(false);
        setTextAlert("Su usuario o contraseña son incorrectos");
        setHasError(true);
      }
    }
  }

  function onSubmit(e) {
    let account = { username, password };
    validateAccount(account);
    /* this.props.addTask(usern, this.state.description);
    e.preventDefault(); */
  }

  return (
    <div>
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

        <Button style={{background: "#C20C19"}} block size="lg" onClick={onSubmit}>
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
