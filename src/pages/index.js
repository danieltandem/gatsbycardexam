import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Cards from "../components/card"
import { Link,graphql } from "gatsby"
import { GatsbyImage,getImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => (
  <Layout>
    <nav>
      <ul>
        <li><Link to= "/">Inicio"</Link></li>
        <li><Link to= "/contacto">Contacto</Link></li>
      </ul>
    </nav>
    <div className="contenedor-card">
      <div>
      {data.allTecnologiasJson.edges.map(({ node }) => {
        const image = getImage(node.image);
        return (
          <div key={node.id}>
            <h2>{node.title}</h2>
            <p>{node.description}</p>
            <GatsbyImage image={image} alt={node.title} />
            <a href={node.link}>Leer más</a>
          </div>
        );
      })}
      <Cards
      footphoto={"Hola mamsasita"}
      title={"Hola bebe"}
      description={"Muy bonito"}>
      </Cards>
      <Cards
      footphoto={"Opaca "}
      title={"La bim Bam Bum"}
      description={"No LE MIRES "}>
      </Cards>
      <Cards
      footphoto={"Ky puto"}
      title={"Er kyrian"}
      description={"Chopped"}>
      </Cards>
    </div>
    </div>
  </Layout>
)

export const query = graphql`
query MyQuery {
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
`


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

