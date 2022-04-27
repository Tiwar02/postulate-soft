import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Card.css";

//Import images
import male from "../../assets/images/user_male.png";
import female from "../../assets/images/user_female.png";

export default function Card(props) {
  const { id, imgPerfil, name, area, email, cel, profession, company, imgCompany } = props;

  const navigate = useNavigate();

  return (
      <div className="card_item" key={id} /* onClick={() => navigate(`/contacts/${id}`)} */>
        <div className="card_inner">
          <img className='img-profile' src={imgPerfil === "M" ? "https://www.shareicon.net/data/128x128/2016/07/26/802026_man_512x512.png" : "https://www.shareicon.net/data/128x128/2016/07/26/802031_user_512x512.png"} alt="" />
          <div className="card-name">{name}</div>
          <div className="url"><a href={"mailto: "+ email} >{email}</a></div>
          <div className='url'><a href={"tel: +57"+ cel} >{cel}</a></div>
          <div className="detail-box">
            <div className="detail"><span>Área</span>{area}</div>
            <div className="detail"><span>Empresa</span>{company}</div>
          </div>
          {/* <button className="seeMore">See More</button> */}
          <img className="img-company" src={imgCompany}/>
        </div>
      </div>
  )
}
