import React, { Component, useEffect, useState } from "react";
import axios, { Axios, AxiosError } from "axios";
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
    job: "",
    phone: "",
    email: "",
    password: ""
  }

  componentDidMount() {
    //Cargar Input tipo select con los nombres de las empresas registradas
    axios
      .get("http://localhost:8000/companies")
      .then(response => {
        this.setState({ companies: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.registerContact();
  }

  onChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  registerContact = async () => {

    const contact = {
      doctype: this.state.doctype,
      document: this.state.document,
      gender: this.state.gender,
      name: this.state.name,
      first_lastname: this.state.first_lastname,
      second_lastname: this.state.second_lastname,
      company: this.state.company,/* this.state.companies.find(item => item.id === this.state.company).company_name */
      area: this.state.area,
      job: this.state.job,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password
    }

    const token = sessionStorage.getItem('token')
    try {
      const answer = await axios.post('contacts/create', contact)
      const message = answer.data.message
      alert("El contacto se creó correctamente")
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Container fluid="md">
        <Tabs tabSelect={1} />
        <Form className="mt-4" autoComplete="off">
          <div className="mb-3">
            <h3 className="h3-container ">Información personal</h3>
          </div>

          <FormGroup row className="mb-3">
            <Col sm="4">
              <Label for="doctype">Tipo de documento</Label>
              <Input id="doctype" name="doctype" type="select" value={this.state.doctype} onChange={this.onChange}>
                <option key={0} value={0}>Seleccione el tipo de documento</option>
                <option key={1} value={1}>Tarjeta de identidad</option>
                <option key={2} value={2}>Cédula de ciudadanía</option>
                <option key={3} value={3}>Cédula de extranjería</option>
                <option key={4} value={4}>Pasaporte</option>
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
              <Label for="gen">Género</Label>
              <Input
                id="gender"
                name="gender"
                placeholder="Ingrese su genero"
                type="select"
                value={this.state.gender}
                onChange={this.onChange}
              >
                <option key={0} value={"default"}>Seleccione su género</option>
                <option key={1} value={"M"}>Masculino</option>
                <option key={2} value={"F"}>Femenino</option>
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
                  <option key={company.id} value={company.id}>{company.company_name}</option>
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
                id="job"
                name="job"
                placeholder="Ingrese el cargo que desempeña en la empresa"
                type="text"
                value={this.state.job}
                onChange={this.onChange}
              />
            </Col>
            <Col sm="6">
              <Label for="area">* Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Ingrese su número de teléfono"
                type="number"
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
                type="password"
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