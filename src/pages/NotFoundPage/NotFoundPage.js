import React from 'react'
import { Button, Container } from 'reactstrap'
// import Lottie from 'lottie-web';
import Lottie from 'react-lottie';
import animation404 from "../../assets/animations/404page.json";
import "./NotFoundPage.css";
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {

  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation404,
  };

  return (
    <Container>
      <div className='content'>
        <Lottie options={defaultOptions} width={400} height={400} />
        <h2 className='text'>Oops, la página solicitada no ha sido encontrada o no existe.</h2>
        <Button
          style={{ background: "#C20C19" }}
          className='btn'
          size="sm"
          onClick={() => {navigate("/")}}
        > 
          Regresar
        </Button>
      </div>
    </Container>
  )
}
