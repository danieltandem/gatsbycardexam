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
  </Layout>
)


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

