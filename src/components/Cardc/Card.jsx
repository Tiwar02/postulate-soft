import React from 'react';
import { useNavigate } from 'react-router-dom';

//Import images
import male from "../../assets/images/user_male.png";
import female from "../../assets/images/user_female.png";

export default function Card(props) {
  const { id, imgPerfil, name, area, email, cel, profession, company, imgCompany } = props;

  const navigate = useNavigate();

  return (
      <div className="card_item" key={id} /* onClick={() => navigate(`/contacts/${id}`)} */>
        <div className="card_inner">
          <img className='img-profile' src={imgPerfil === 0 ? "https://www.shareicon.net/data/128x128/2016/07/26/802026_man_512x512.png" : "https://www.shareicon.net/data/128x128/2016/07/26/802031_user_512x512.png"} alt="" />
          <div className="userName">{name}</div>
          <div className="userUrl"><a href={"mailto: "+ email} >{email}</a></div>
          <div className='userUrl'><a href={"tel: +57"+ cel} >{cel}</a></div>
          <div className="detail-box">
            <div className="gitDetail"><span>Área</span>{area}</div>
            <div className="gitDetail"><span>Empresa</span>{company}</div>
          </div>
          {/* <button className="seeMore">See More</button> */}
          <img className="img-company" src={imgCompany}/>
        </div>
      </div>
  )
}
