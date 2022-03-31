import React, { useState } from 'react'

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

export default function SignupCompanies() {
  const [agreement, setAgreement] = useState(false);

  const he = (e) => {
    console.log(e.target.value);
  }

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
            />
          </Col>
          <Col>
            <Label for="company_name">* Razón Social</Label>
            <Input
              id="company_name"
              name="company_name"
              placeholder="Ingrese el nombre de empresa"
              type="text"
            />
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
              <option key={0}>Seleccione un sector</option>
              <option key={1}>Sector 1</option>
              <option key={2}>Sector 2</option>
              <option key={3}>Sector 3</option>
            </Input>
          </Col>
          <Col sm="6">
            <Label for="size_select">Numero de empleados</Label>
            <Input id="size_select" name="size_select" type="select">
              <option>Seleccione un rango</option>
              <option key={0}>1 a 10</option>
              <option key={1}>11 a 50</option>
              <option key={2}>51 a 250</option>
              <option key={3}>Más de 250</option>
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

        <Row className="mb-4">
          <Col sm="3">
            <FormGroup row onChange={(e) => setAgreement(!agreement)} >
              <Label for="r1">¿Tiene convenio con la universidad?</Label>
              <Col>
                <Input defaultChecked id="radio1" name="radio" type="radio" />
                <Label className="px-2">No</Label>
              </Col>
              <Col>
                <Input id="radio2" name="radio" type="radio" />
                <Label className="px-2">Si</Label>
              </Col>
            </FormGroup>
          </Col>
          <Col sm="9">
            {agreement && <div><Label for="agreement_file">* Convenio</Label>
              <Input id="agreement_file" name="agreement_file" type="file" /></div>}
          </Col>
        </Row>

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
