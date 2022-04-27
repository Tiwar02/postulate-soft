import React, { useState } from 'react';
import { Container, CardGroup, Row, Col, Input } from 'reactstrap';
import { Link} from 'react-router-dom';
import Card from '../../components/Cardc/Card';
import { ContactsData } from "./ContactsData";

export default function Contacts() {
  const [filter, setFilter] = useState('');
  const [filterCompany, setFilterCompany] = useState('');
  // const [filterProfession, setFilterProfession] = useState('');

  const getUnique = (array, comp) => {
    const unique = array
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => array[e])
      .map(e => array[e]);
    return unique;
  }

  const uniqueCompanies = getUnique(ContactsData, "company");
  // const uniqueProfessions = getUnique(ContactsData, "profession");
  const searchText = (e) => setFilter(e.target.value);
  const handleChangeCompany = (e) => setFilterCompany(e.target.value);
  // const handleChangeProfession = (e) => setFilterProfession(e.target.value);

  let dataSearch = ContactsData.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });

  let filterByCompany = ContactsData.filter((result) => {
    return result.company == filterCompany;
  });

  /* let filterByProfession = ContactsData.filter((result) => {
    return result.profession == filterProfession;
  });
 */
  return (
    <Container fluid="md" className="mt-4">
      <Row>
        <Col>
          <h2>Contactos</h2>
        </Col>
        <Col sm="3">
          <Link to="/contacts-dt" className='urlLink' style={{ textDecoration: "none", color: "#fff", width: "100%" }}>
            <div className='box' style={{ width: 200, height: 40, background: "#C20C19", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
              Ver en Datagrid
            </div>
          </Link>
        </Col>
      </Row>

      <h4>Filtros de búsqueda</h4>
      <Row>
        <Col sm="8">
          <Input id='searchInput' className="from-control" type="text" value={filter} onChange={searchText} placeholder="Buscar por nombre, empresa o cargo" />
        </Col>
        <Col sm="4">
          <Input id="filter_name" name="company_name" type="select" onChange={handleChangeCompany}>
            <option key={0} value="default">Filtrar por empresa</option>
            {uniqueCompanies.map(contact =>
              <option key={contact.id} value={contact.company}>{contact.company}</option>
            )}
          </Input>
        </Col>
        {/* <Col sm="3">
          <Input id="filter_name" name="company_name" type="select" onChange={handleChangeProfession}>
            <option key={0} value="default">Filtrar por profesion</option>
            {uniqueProfessions.map(contact =>
              <option key={contact.id} value={contact.profession}>{contact.profession}</option>
            )}
          </Input>
        </Col> */}
      </Row>
      <CardGroup className="group mt-4">
        {/* (filterCompany !== "default" : filterByCompany ? dataSearch) */}
        {dataSearch.map((contact, index) => {
          return (
            <Card id={index} imgPerfil={contact.imgPerfil} name={contact.name} email={contact.email} cel={contact.cel} area={contact.area} profession={contact.profession} company={contact.company} imgCompany={contact.imgCompany} />
          )
        })}
      </CardGroup>
    </Container>
  )
}
