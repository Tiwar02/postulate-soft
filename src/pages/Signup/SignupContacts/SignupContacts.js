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

import axios, { Axios, AxiosError } from "axios";

//Components
import Tabs from "../../../components/Tabs/Tabs";




export default class SignupContacts extends Component {

  state = {
    companies: [],
    doctype: "",
    document: "",
    name: "",
    gender: "",
    first_lastname: "",
    second_lastname: "",
    company: "",
    area: "",
    employment: "",
    phone: "",
    email: "",
    password: ""
  }

  componentDidMount() {
    //Cargar Input tipo select con los nombres de las empresas registradas
    axios
      .get("https://localhost:8000/companies")
      .then(response => {
        this.setState({ companies: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.registerContact()
  }

  onChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  registerContact = async (e) => {


    // const[doctype,setDoctype]=useState('')
    // const[document,setDocument]=useState('')
    // const[name,setName]=useState('')
    // const[first_lastname,setFirst_lastname]=useState('')
    // const[second_lastname,setSecond_lastname]=useState('')
    // const[company,setCompany]=useState('')
    // const[area,setArea]=useState('')
    // const[rol,setRol]=useState('')
    // const[phone,setPhone]=useState('')
    // const[email,setEmail]=useState('')
    // const[password,setPassword]=useState('')

  
    const contact = {
      doctype,
      document,
      gender,
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
    try{
      const answer = await Axios.post('/contact/create', contact)
      const message = answer.data.message
      console.log(message)
      alert(message)
    }catch(error){
      const err = AxiosError
      if(err.response){
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
    
    

    
    

  };

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
              <Label for="doctype">Tipo de documento</Label>
              <Input id="doctype" name="doctype" type="select" value={this.state.doctype} onChange={this.onChange}>
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
                value={this.state.document}
                onChange={this.onChange}
              />
            </Col>
            <Col sm="4">
              <Label for="gen">Genero</Label>
              <Input
                id="gender"
                name="gender"
                placeholder="Ingrese su genero"
                type="select"
                value={this.state.gender}
                onChange={this.onChange}
              >
                <option key={0} value={"M"}>Masculino</option>
                <option key={1} value={"F"}>Femenino</option>
              </Input>
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
                value={this.state.name}
                onChange={this.onChange}
              />
            </Col>
            <Col sm="4">
              <Label for="area">* Primer apellido</Label>
              <Input
                id="first_lastname"
                name="first_lastname"
                placeholder="Ingrese su primer apellido"
                type="text"
                value={this.state.first_lastname}
                onChange={this.onChange}
              />
            </Col>
            <Col sm="4">
              <Label for="area">Segundo apellido</Label>
              <Input
                id="second_lastname"
                name="second_lastname"
                placeholder="Ingrese su segundo apellido"
                type="text"
                value={this.state.second_lastname}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>

          <div className="mt-4 mb-3">
            <h3 className="h3-container">Ubicación laboral</h3>
          </div>

          <FormGroup row>
            <Col sm="6" >
              <Label for="company">* Empresa</Label>
              <Input id="company" name="company" type="select" onChange={this.onChange} value={this.state.company}>
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
                value={this.state.area}
                onChange={this.onChange}
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
                value={this.state.rol}
                onChange={this.onChange}
              />
            </Col>
            <Col sm="6">
              <Label for="area">* Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Ingrese su número de teléfono"
                type="text"
                value={this.state.phone}
                onChange={this.onChange}
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
                value={this.state.email}
                onChange={this.onChange}
              />
            </Col>
            <Col sm="6">
              <Label for="password">* Contraseña</Label>
              <Input
                id="password"
                name="password"
                placeholder="Ingrese una contraseña segura"
                type="email"
                value={this.state.password}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>

          <Row className="mb-2 justify-content-center">
            <Col sm="8">
              <Button
                style={{ background: "#C20C19" }}
                block
                onClick={this.onSubmit}
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