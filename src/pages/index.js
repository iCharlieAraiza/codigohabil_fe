import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Homepage from './homepage';

const IndexPage = () => (
  <Homepage>
    <SEO title="Home" />
    
    <Link to="/page-2/">Go to page 2</Link>
  </Homepage>
)

export default IndexPage
