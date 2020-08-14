import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/boxing-spar.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "boxing-spar2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Unleash Your Potential</h4>
          <p>
            At Sunday Punch we encourage the members to improve mentally,
            spiritually and physically to be an all-around better person and
            athlete. We facilitate the process of helping people make themselves
            better by improving the holistic, physical, and emotional qualities
            of life. By following our one of a kind program, members will
            improve muscular strength, muscular endurance, cardiovascular
            endurance, flexibility, power, reflex, agility, and self-esteem.{" "}
          </p>
          <p>
            We host USA Boxing Sanctioned Amateur events annually and
            exhibitions throughout the year. If you are interested in competing
            in a local club show, tournament, or exhibition please contact one
            of our coaches.
          </p>
          <p>
            Good vibes, friendly staff, accessible parking, sanitized restrooms,
            and lockers available. We pride ourselves in always maintaining a
            clean gym. Due to COVID-19 we are taking extra precautions. We use
            Coronavirus fighting disinfectants and have hand sanitizers easily
            accessible for all members.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
