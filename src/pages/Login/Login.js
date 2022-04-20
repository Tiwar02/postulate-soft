import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Axios from 'axios'

//Reactstrap
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";



const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { user, setUser } = useContext(UserContext);

  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [textAlert, setTextAlert] = useState("");
  const [hasError, setHasError] = useState(false);

  //Backend
  const login= async(e)=>{
    const u={document,password}
    const answer= await Axios.post('/contact/login', u);
    console.log(answer)
    const message = answer.data.message;

    if(message!=='Bienvenido'){
        setTextAlert(message);
        setHasError(true);
        
    }
    else{
      const token = answer.data.token
      const name = answer.data.name
      const idUser = answer.data.id

      sessionStorage.setItem('token',token)
      sessionStorage.setItem('name',name)
      sessionStorage.setItem('idUser',idUser)
      setUser({loggedIn:true,name:user.name})
      alert("Logueo Exitoso")
      navigate('/')
    }
  }



  function onChange(e) {
    e.target.name === "document"
      ? setDocument(e.target.value)
      : setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault()
    if (document === "" || password === "") {
      setTextAlert("Llene todos los campos");
      setHasError(true);
    } else {
      
        login()
    
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
          <Label for="document">Usuario</Label>
          <Input
            id="document"
            name="document"
            placeholder="Ingrese su documento"
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

        <Button style={{ background: "#C20C19" }} block onClick={onSubmit}>
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
