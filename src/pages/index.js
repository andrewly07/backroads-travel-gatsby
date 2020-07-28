import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="get your fight on"
        info="Every champion was once a contender that refused to give up."
      >
        <Link to="/classes" className="btn-white">
          our classes
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
