import React from "react";

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

export default function SignupContacts() {
  return (
    <Container fluid="md">
      <Tabs tabSelect={1} />
      <Form className="mt-4">
        <FormGroup row className="mb-3">
          <Col>
            <Label for="company_name">* Razón Social</Label>
            <Input id="company_name" name="company_name" type="select">
              <option>Seleccione la empresa a la que pertenece</option>
              <option>Empresa 1</option>
              <option>Empresa 2</option>
              <option>Empresa 3</option>
              <option>Empresa 4</option>
            </Input>
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
            />
          </Col>
        </FormGroup>

        <FormGroup row className="mb-3">
          <Col sm="6">
            <Label for="type_select">Sector</Label>
            <Input id="type_select" name="type_select" type="select">
              <option>Seleccione un sector</option>
              <option>Sector 1</option>
              <option>Sector 2</option>
              <option>Sector 3</option>
            </Input>
          </Col>
          <Col sm="6">
            <Label for="size_select">Numero de empleados</Label>
            <Input id="size_select" name="size_select" type="select">
              <option>Seleccione un rango</option>
              <option>1 a 10</option>
              <option>11 a 50</option>
              <option>51 a 250</option>
              <option>Más de 250</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row className="mb-3">
          <Col sm="12">
            <Label for="webpage">Página web</Label>
            <Input
              id="webpage"
              name="email"
              placeholder="https://www.pagina.com"
              type="email"
            />
          </Col>
        </FormGroup>

        <FormGroup row className="mb-3">
          <Col sm="4">
            <Label for="country_select">* País</Label>
            <Input id="country_select" name="country_select" type="select">
              <option>Seleccione un país</option>
              <option>Argentina</option>
              <option>Brazil</option>
              <option>Colombia</option>
              <option>Estados Unidos</option>
              <option>México</option>
            </Input>
          </Col>
          <Col sm="4">
            <Label for="department_select">* Departamento</Label>
            <Input
              id="department_select"
              name="department_select"
              type="select"
            >
              <option>Seleccione un departamento</option>
              <option>Antioqua</option>
              <option>Cundinamarca</option>
              <option>Valle del Cauca</option>
            </Input>
          </Col>
          <Col sm="4">
            <Label for="city_select">* Ciudad</Label>
            <Input id="city_select" name="city_select" type="select">
              <option>Seleccione una ciudad</option>
              <option>Bogotá</option>
              <option>Cali</option>
              <option>Medellín</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row className="mb-4">
          <Col sm="12">
            <Label for="rut_file">* RUT (No mayor a 3 meses)</Label>
            <Input id="rut_file" name="rut_file" type="file" />
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
  );
}
