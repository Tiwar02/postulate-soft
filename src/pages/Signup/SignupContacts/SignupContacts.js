import React, { Component } from "react";
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

import axios from "axios";

//Components
import Tabs from "../../../components/Tabs/Tabs";

export default class SignupContacts extends Component {

  state = {
    companies: []
  }

  componentDidMount() {
    //Cargar Input tipo select con los nombres de las empresas registradas
    axios
      .get("https://622243ef666291106a22301b.mockapi.io/api/v1/business")
      .then(response => {
        this.setState({ companies: response.data })
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
            <Col sm="6">
              <Label for="type_select">Tipo de documento</Label>
              <Input id="type_select" name="type_select" type="select">
                <option key={0}>Seleccione el tipo de documento</option>
                <option key={1}>Tarjeta de identidad</option>
                <option key={2}>Cédula de ciudadanía</option>
                <option key={3}>Cédula de extranjería</option>
                <option key={4}>Pasaporte</option>
              </Input>
            </Col>
            <Col sm="6">
              <Label for="document">Documento</Label>
              <Input
                id="document"
                name="document"
                placeholder="Ingrese su número de documento de identidad"
                type="number"
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
              />
            </Col>
            <Col sm="4">
              <Label for="area">* Primer apellido</Label>
              <Input
                id="first_lastname"
                name="first_lastname"
                placeholder="Ingrese su primer apellido"
                type="text"
              />
            </Col>
            <Col sm="4">
              <Label for="area">Segundo apellido</Label>
              <Input
                id="second_lastname"
                name="second_lastname"
                placeholder="Ingrese su segundo apellido"
                type="text"
              />
            </Col>
          </FormGroup>

          <div className="mt-4 mb-3">
            <h3 className="h3-container">Ubicación laboral</h3>
          </div>

          <FormGroup row>
            <Col sm="6" >
              <Label for="company_name">* Razón social</Label>
              <Input id="company_name" name="company_name" type="select">
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
                id="employment"
                name="employment"
                placeholder="Ingrese el cargo que desempeña en la empresa"
                type="text"
              />
            </Col>
            <Col sm="6">
              <Label for="area">* Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Ingrese su número de teléfono"
                type="text"
              />
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="12">
              <Label for="email">* Email Corporativo</Label>
              <Input
                id="email"
                name="email"
                placeholder="correoejemplo@empresa.com"
                type="email"
              />
            </Col>
          </FormGroup>

          <Row className="mb-2 justify-content-center">
            <Col sm="8">
              <Button
                style={{ background: "#C20C19" }}
                block
                size="lg"
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