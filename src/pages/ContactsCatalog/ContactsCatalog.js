import React from "react";
import { CardGroup, Container } from "reactstrap";

import Cardc from "../../components/Cardc/Cardc";

export default function StudentCatalog() {
  return (
    <Container className="mt-4">
       <CardGroup className="group">
        <Cardc img={0} title="Juan Felipe de la Torre" subtitle="Ingeniero Civil" text="Edad: 23 Años"/>
        <Cardc img={1} title="Maria Fernanda Perez" subtitle="Psicologa" text="Edad: 21 Años"/>
        <Cardc img={0} title="Juan Felipe de la Torre" subtitle="Ingeniero Civil" text="Edad: 23 Años"/>
        <Cardc img={1} title="Maria Fernanda Perez" subtitle="Psicologa" text="Edad: 21 Años"/>
        <Cardc img={1} title="Maria Fernanda Perez" subtitle="Psicologa" text="Edad: 21 Años"/>
        <Cardc img={0} title="Juan Felipe de la Torre" subtitle="Ingeniero Civil" text="Edad: 23 Años"/>
        <Cardc img={1} title="Maria Fernanda Perez" subtitle="Psicologa" text="Edad: 21 Años"/>
        <Cardc img={0} title="Juan Felipe de la Torre" subtitle="Ingeniero Civil" text="Edad: 23 Años"/>
        <Cardc img={1} title="Maria Fernanda Perez" subtitle="Psicologa" text="Edad: 21 Años"/>
        <Cardc img={1} title="Maria Fernanda Perez" subtitle="Psicologa" text="Edad: 21 Años"/>
      </CardGroup> 
    </Container>
  );
}
