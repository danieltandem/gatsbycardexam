import React from "react";
import './card.css'
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";

const Card=({titulo,imagen, piefoto, descripcion,link})=>{
return(
  <>
  <div className="cardexamen">
  <h2 className="titulo">{titulo}</h2>
    <figure>
      <a href={link}>
      <GatsbyImage className="imagen" image={imagen} alt={piefoto} />
      </a>
    </figure>
    <p className="textotarjeta">{descripcion}</p>
    <button className="botonlink">
    <Link to={link} ><p className="textoboton">MAS INFO</p></Link>
    </button>
  </div>
  </>
)
}
export default Card