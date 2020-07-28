import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/boxing-spar.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
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
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
