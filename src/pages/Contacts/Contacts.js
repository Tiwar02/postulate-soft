import React from 'react'
import { Container, CardGroup } from 'reactstrap';
import Cardc from "../../components/Cardc/Cardc";

export default function Contacts() {
  return (
    <Container className="mt-4">
       <CardGroup className="group">
        <Cardc id={0} img={0} name="Juan Felipe de la Torre" job="Ingeniero Civil" company="Exito"/>
        <Cardc id={1} img={1} name="Maria Fernanda Perez" job="Psicologa" company="Tuya SAS"/>
        <Cardc id={2} img={0} name="Juan Felipe de la Torre" job="Ingeniero Civil" company="Bancolombia"/>
        <Cardc id={3} img={1} name="Maria Fernanda Perez" job="Psicologa" company="Comfama"/>
        <Cardc id={4} img={1} name="Maria Fernanda Perez" job="Psicologa" company="Globant"/>
        <Cardc id={5} img={0} name="Juan Felipe de la Torre" job="Ingeniero Civil" company="LeanTech"/>
        <Cardc id={6} img={1} name="Maria Fernanda Perez" job="Psicologa" company="Bancolombia"/>
        <Cardc id={7} img={0} name="Juan Felipe de la Torre" job="Ingeniero Civil" company="Intergrupo"/>
        <Cardc id={8} img={1} name="Maria Fernanda Perez" job="Psicologa" company="Ceiba"/>
        <Cardc id={9} img={1} name="Maria Fernanda Perez" job="Psicologa" company="Intersoft"/>
      </CardGroup> 
    </Container>
  )
}
