import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import "./Cardc.css"

//Import images
import avatarMan from "../../assets/images/studentman.png";
import avatarWoman from "../../assets/images/studentwoman.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Cardc(props) {
  const {id , img, name, job, company} = props;
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  return (
    <div>
      <Card className="cardc" onClick={() => navigate(`/contacts/${id}`)}>
        <CardImg className="cardc-img"
          alt="Card image cap"
          src={img === 0 ? avatarMan : avatarWoman}
        />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {job}
          </CardSubtitle>
          <CardText>
            {company}
          </CardText>
          <CardText>
            {company}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
