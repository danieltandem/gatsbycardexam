import React from "react"
import "./card.css"
const Cards = ({image ="https://picsum.photos/200/300",footphoto,title,description}) => {
    return(
        <>
        <div className="container cardexamen">
            <figure>
                <img src={image}></img>
                <figcaption>{footphoto}</figcaption>
            </figure>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        </>
    )
}
export default Cards