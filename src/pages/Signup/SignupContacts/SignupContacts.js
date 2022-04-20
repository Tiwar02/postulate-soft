import React, { Component, useEffect, useState } from "react";
import "./SignupContacts.css";

//Reactstrap
import {
  Button,
  FormGroup,
  FormText,
  Label,
  Input,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap";

import axios, { Axios } from "axios";

//Components
import Tabs from "../../../components/Tabs/Tabs";

const registerContact = async(e) => {
    const[doctype,setDoctype]=useState('')
    const[document,setDocument]=useState('')
    const[name,setName]=useState('')
    const[first_lastname,setFirst_lastname]=useState('')
    const[second_lastname,setSecond_lastname]=useState('')
    const[company,setCompany]=useState('')
    const[area,setArea]=useState('')
    const[rol,setRol]=useState('')
    const[phone,setPhone]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    e.preventDefault()
    const contact={
      doctype,
      document,
      name,
      first_lastname,
      second_lastname,
      company,
      area,
      rol,
      phone,
      email,
      password
    }

    const token = sessionStorage.getItem('token')
    const answer = await Axios.post('/contact/create',contact,{
      headers:{'authorization':token}
    }) 

    const message = answer.data.message
    console.log(message)
    alert(message)

    


}
function onChange(e) {
  e.target.name === "document"
    ? setDoctype(e.target.value)
    : setDocument(e.target.value)
    // ? setName(e.target.value)
    // ? setFirst_lastname(e.target.value) 
    // ? setSecond_lastname(e.target.value)
    // ? setCompany(e.target.value)
    // ? setArea(e.target.value)
    // ? setRol(e.target.value)
    // ? setPhone(e.target.value)
    // ? setEmail(e.target.value)
    // ? setPassword(e.target.value)
}

function onSubmit(e) {
  e.preventDefault()
  registerContact()
}

export default class SignupContacts extends Component {

  state = {
    companies: []
  }

  

  componentDidMount() {
    //Cargar Input tipo select con los nombres de las empresas registradas
    axios
      .get("https://localhost:8000/")
      .then(response => {
        this.setState({ companies: response.data.companies.name })
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <Container fluid="md">
        <Tabs tabSelect={1} />
        <Form className="mt-4">
          <div className="mb-3">
            <h3 className="h3-container ">Información personal</h3>
          </div>

          <FormGroup row className="mb-3">
            <Col sm="4">
              <Label for="type_select">Tipo de documento</Label>
              <Input id="type_select" name="type_select" type="select">
                <option key={0}>Seleccione el tipo de documento</option>
                <option key={1}>Tarjeta de identidad</option>
                <option key={2}>Cédula de ciudadanía</option>
                <option key={3}>Cédula de extranjería</option>
                <option key={4}>Pasaporte</option>
              </Input>
            </Col>
            <Col sm="4">
              <Label for="document">Documento</Label>
              <Input
                id="document"
                name="document"
                placeholder="Ingrese su número de documento de identidad"
                type="number"
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label for="gen">Genero</Label>
              <Input
                id="gen"
                name="gen"
                placeholder="Ingrese su genero"
                type="text"
                onChange={onChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="4">
              <Label for="area">* Nombre</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ingrese su nombre"
                type="text"
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label for="area">* Primer apellido</Label>
              <Input
                id="first_lastname"
                name="first_lastname"
                placeholder="Ingrese su primer apellido"
                type="text"
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label for="area">Segundo apellido</Label>
              <Input
                id="second_lastname"
                name="second_lastname"
                placeholder="Ingrese su segundo apellido"
                type="text"
                onChange={onChange}
              />
            </Col>
          </FormGroup>

          <div className="mt-4 mb-3">
            <h3 className="h3-container">Ubicación laboral</h3>
          </div>

          <FormGroup row>
            <Col sm="6" >
              <Label for="company">* Empresa</Label>
              <Input id="company" name="company" type="select" onChange={onChange}>
                <option key={0}>Seleccione la empresa a la que pertenece</option>
                {this.state.companies.map(company =>
                  <option key={company.id} value={company.id}>{company.name}</option>
                )}
                
              </Input>
            </Col>
            <Col sm="6" >
              <Label for="area">* Área</Label>
              <Input
                id="area"
                name="area"
                placeholder="Área a la que pertenece en la empresa"
                type="text"
                onChange={onChange}
              />
              <FormText>
                Ejemplo: Contaduría, mercadeo, talento humano
              </FormText>
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="6">
              <Label for="area">* Cargo</Label>
              <Input
                id="rol"
                name="rol"
                placeholder="Ingrese el cargo que desempeña en la empresa"
                type="text"
                onChange={onChange}
              />
            </Col>
            <Col sm="6">
              <Label for="area">* Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Ingrese su número de teléfono"
                type="text"
                onChange={onChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="6">
              <Label for="email">* Email Corporativo</Label>
              <Input
                id="email"
                name="email"
                placeholder="correoejemplo@empresa.com"
                type="email"
                onChange={onChange}
              />
            </Col>
            <Col sm="6">
              <Label for="password">* Contraseña</Label>
              <Input
                id="password"
                name="password"
                placeholder="Ingrese una contraseña segura"
                type="email"
                onChange={onChange}
              />
            </Col>
          </FormGroup>

          <Row className="mb-2 justify-content-center">
            <Col sm="8">
              <Button
                style={{ background: "#C20C19" }}
                block
                onClick={() => alert("Se ha registrado correctamente")}
              >
                Registrar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}