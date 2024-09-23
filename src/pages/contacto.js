import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contacto = () => (
  <Layout>
    <h1>Pagina de Contacto</h1>
    <p>Bienvenido a esta pagina de contacto</p>
    <Link to="/">Inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Contacto
