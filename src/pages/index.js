import * as React from "react"
import { Link } from "gatsby"
import Card from "../components/card"
import { getImage } from 'gatsby-plugin-image';

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"



const IndexPage = ({data}) => (
  <Layout>
   <nav>
    <ul>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
   </nav>
  <h1>Inicio</h1>
 
  
  <div className="card-container">
      {data.allTecnologiasJson.edges.map(({ node }) => {
        const image = getImage(node.image);
        return (
          
            <Card 
            titulo={node.title}
            descripcion={node.description} 
            imagen={image} 
            piefoto={node.title} 
            link= {node.link}
            ></Card>
          
        );
      })}
    </div>

  </Layout>
)

export const query = graphql`
 query {
  allTecnologiasJson {
    edges {
      node {
        id
        link
        title
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: WEBP
              width: 300
              aspectRatio: 1.77
            )
          }
        }
        description
      }
    }
  }
}
`;

export const Head = () => <Seo title="Home" />

export default IndexPage