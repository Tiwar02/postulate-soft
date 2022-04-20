import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from "reactstrap";
import "./Cardc.css"

//Import images
import male from "../../assets/images/user_male.png";
import female from "../../assets/images/user_female.png";

import { useLocation, useNavigate } from "react-router-dom";

export default function Cardc(props) {
  const { id, imgPerfil, name, profession, company, imgCompany } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  return (
    <div>
      <Card className="cardc" onClick={() => navigate(`/contacts/${id}`)}>
        <CardImg className="cardc-img"
          alt="Card image cap"
          src={imgPerfil === 0 ? male : female}
        />
        <CardBody>
          <CardTitle tag="h4">{name}</CardTitle>
          <CardSubtitle className="mb-2" tag="h5">
            {profession}
          </CardSubtitle>
          <CardSubtitle className="">{company}</CardSubtitle>
          <div className="container-company">
            <Col>
              <img className="logo-company" src={imgCompany} alt={company} />
            </Col>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
