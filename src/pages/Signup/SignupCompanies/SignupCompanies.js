import React, { Component, useState } from 'react'
import axios, { Axios, AxiosError } from "axios";

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


export default class SignupCompanies extends Component {
  
  state = {
    nit: "",
    company_name: "",
    //logo_file: "",
    sector: "",
    employers_number: "",
    webpage: "",
    country: "",
    department: "",
    city: "",
    //rut_file: "",
    email: "",
    //agreement_file: "",
    agreement: false
  }
  

  // componentDidMount() {
  //   //Cargar Input tipo select con los nombres de las empresas registradas
  //   axios
  //     .get("http://localhost:8000/contasc")
  //     .then(response => {
  //       this.setState({ companies: response.data })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  onSubmit = (e) => {
    e.preventDefault();
    this.registerCompany();
  }

  onChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  registerCompany = async () => {

    const company = {
      nit: this.state.nit,
      company_name: this.state.company_name,
      //logo_file: this.state.logo_file,
      sector: this.state.sector,
      employers_number: this.state.employers_number,
      webpage: this.state.webpage,
      country: this.state.country,
      department: this.state.department,
      city: this.state.city,
      //rut_file: this.state.rut_file,
      email: this.state.email,
      //agreement_file: this.state.agreement_file
    }

    const token = sessionStorage.getItem('token')
    try {
      const answer = await axios.post('companies/create', company)
      const message = answer.data.message
      alert("La empresa se creó correctamente")
    } catch (error) {
      console.log(error);
    }
  }


  render(){
    return (
      <Container fluid="md">
        <Tabs tabSelect={0} />
        <Form className="mt-4">
          <FormGroup row className="mb-3">
            <Col sm="3">
              <Label for="nit">* Nit</Label>
              <Input
                id="nit"
                name="nit"
                placeholder="Ingresa el NIT"
                type="number"
                value={this.state.nit}
                onChange={this.onChange}
              />
            </Col>
            <Col sm="6">
              <Label for="company_name">* Empresa</Label>
              <Input
                id="company_name"
                name="company_name"
                placeholder="Ingrese el nombre de empresa"
                type="text"
                value={this.state.company_name}
                onChange={this.onChange}
              />
            </Col>
            <Col sm="3">
              <Label for="logo_file">Logo de la empresa (PNG)</Label>
              <Input id="logo_file" name="logo_file" type="file" value={this.state.logo_file} onChange={this.onChange}/>
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="12">
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="correoejemplo@empresa.com"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="6">
              <Label for="sector">Sector</Label>
              <Input id="sector" name="sector" type="select" value={this.state.sector} onChange={this.onChange}>
                <option key={0} value={0}>Seleccione un sector</option>
                <option key={1} value={1}>Sector 1</option>
                <option key={2} value={2}>Sector 2</option>
                <option key={3} value={3}>Sector 3</option>
                
              </Input>
            </Col>
            <Col sm="6">
              <Label for="size_select">Numero de empleados</Label>
              <Input id="employers_number" name="employers_number" type="select" value={this.state.employers_number} onChange={this.onChange}>
                <option>Seleccione un rango</option>
                <option key={0} value={0}>1 a 10</option>
                <option key={1} value={1}>11 a 50</option>
                <option key={2} value={2}>51 a 250</option>
                <option key={3} value={3}>Más de 250</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="12">
              <Label for="webpage">Página web</Label>
              <Input
                id="webpage"
                name="webpage"
                placeholder="https://www.pagina.com"
                type="email"
                value={this.state.webpage} 
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="4">
              <Label for="country_select">* País</Label>
              <Input id="country" name="country" type="select" value={this.state.country} onChange={this.onChange}>
                <option key={0} value={0}>Seleccione un país</option>
                <option key={1} value={1}>Argentina</option>
                <option key={2} value={2}>Brazil</option>
                <option key={3} value={3}>Colombia</option>
                <option key={4} value={4}>Estados Unidos</option>
                <option key={5} value={5}>México</option>
              </Input>
            </Col>
            <Col sm="4">
              <Label for="department_select">* Departamento</Label>
              <Input
                id="department"
                name="department"
                type="select"
                value={this.state.department} 
                onChange={this.onChange}
              >
                <option key={0} value={0}>Seleccione un departamento</option>
                <option key={1} value={1}>Antioqua</option>
                <option key={2} value={2}>Cundinamarca</option>
                <option key={3} value={3}>Valle del Cauca</option>
              </Input>
            </Col>
            <Col sm="4">
              <Label for="city_select">* Ciudad</Label>
              <Input id="city" name="city" type="select" value={this.state.city} onChange={this.onChange}>
                <option key={0} value={0}>Seleccione una ciudad</option>
                <option key={1} value={1}>Bogotá</option>
                <option key={2} value={2}>Cali</option>
                <option key={3} value={3}>Medellín</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row className="mb-4">
            <Col sm="12">
              <Label for="rut_file">* RUT (No mayor a 3 meses)</Label>
              <Input id="rut_file" name="rut_file" type="file" value={this.state.rut_file} onChange={this.onChange}/>
            </Col>
          </FormGroup>

          <Row className="mb-4">
            <Col sm="3">
              <FormGroup row onChange={() =>{
                this.setState({
                  ...this.state,
                  ["agreement"]: !this.state.agreement
                });
              }} >
                <Label for="r1">¿Tiene convenio con la universidad?</Label>
                <Col>
                  <Input defaultChecked id="radio1" name="radio" type="radio"/>
                  <Label className="px-2">No</Label>
                </Col>
                <Col>
                  <Input id="radio2" name="radio" type="radio" />
                  <Label className="px-2">Si</Label>
                </Col>
              </FormGroup>
            </Col>
            <Col sm="9">
            {this.state.agreement && <div><Label for="agreement_file">* Convenio</Label>
              <Input id="agreement_file" name="agreement_file" type="file"  value={this.state.agreement_file} onChange={this.onChange}/></div>}
            </Col>
          </Row>

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
    );
  }
}

