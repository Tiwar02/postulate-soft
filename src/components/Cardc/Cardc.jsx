import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import "./Cardc.css"

//Import images
import avatarMan from "../../assets/images/studentman.png";
import avatarWoman from "../../assets/images/studentwoman.png";

export default function Cardc(props) {
  const {img, title, subtitle, text} = props;

  return (
    <div>
      <Card className="cardc">
        <CardImg className="cardc-img"
          alt="Card image cap"
          src={img === 0 ? avatarMan : avatarWoman}
        />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {subtitle}
          </CardSubtitle>
          <CardText>
            {text}
          </CardText>
          <Button block size="sm" color="danger">Ver más</Button>
        </CardBody>
      </Card>
    </div>
  );
}
