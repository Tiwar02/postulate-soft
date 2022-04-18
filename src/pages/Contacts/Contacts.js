import React, { useState } from 'react'
import { Container, CardGroup, Row, Col, Input } from 'reactstrap';
import Cardc from "../../components/Cardc/Cardc";
import { ContactsData } from "./ContactsData";
import { logos } from '../../assets/images/logos';

export default function Contacts() {
  const [filter, setFilter] = useState('');
  const [filterCompany, setFilterCompany] = useState('');
  const [filterJob, setFilterJob] = useState('');

  const getUnique = (array, comp) => {
    const unique = array
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => array[e])
      .map(e => array[e]);
    return unique;
  }

  const uniqueCompanies = getUnique(ContactsData, "company");
  const uniqueJobs = getUnique(ContactsData, "job");
  const searchText = (e) => setFilter(e.target.value);
  const handleChangeCompany = (e) => setFilterCompany(e.target.value);
  const handleChangeJob = (e) => setFilterJob(e.target.value);

  let dataSearch = ContactsData.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });

  let filterByCompany = ContactsData.filter((result) => {
    return result.company == filterCompany;
  });

  let filterByJob = ContactsData.filter((result) => {
    return result.job == filterJob;
  });

  return (
    <Container fluid="md" className="mt-4">
      <h2>Contactos</h2>
      <h4>Filtros de búsqueda</h4>
      <Row>
        <Col sm="5">
          <Input id='searchInput' className="from-control" type="text" value={filter} onChange={searchText} placeholder="Buscar por nombre, empresa o cargo" />
        </Col>
        <Col sm="3">
          <Input id="filter_name" name="company_name" type="select" onChange={handleChangeCompany}>
            <option key={0}>Filtrar por empresa</option>
            {uniqueCompanies.map(contact =>
              <option key={contact.id} value={contact.company}>{contact.company}</option>
            )}
          </Input>
        </Col>
        <Col sm="3">
          <Input id="filter_name" name="company_name" type="select" onChange={handleChangeJob}>
            <option key={0}>Filtrar por cargo</option>
            {uniqueJobs.map(contact =>
              <option key={contact.id} value={contact.job}>{contact.job}</option>
            )}
          </Input>
        </Col>
      </Row>
      <CardGroup className="group mt-4">
        {dataSearch.map((contact, index) => {
          return (
            <Cardc id={index} imgPerfil={contact.imgPerfil} name={contact.name} job={contact.job} company={contact.company} imgCompany={contact.imgCompany} />
          )
        })}
      </CardGroup>
    </Container>
  )
}
