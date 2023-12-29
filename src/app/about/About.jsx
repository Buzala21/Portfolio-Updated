import React from 'react'
import styles from "./About.module.css"

function About() {
  return (
    <div name="about" className={styles.mainContainer}>
      <div className={styles.new}>
        <div className={styles.container} >
        <div className={styles.minContainer} >
          <p> About</p>
        </div>
        <div>
          
        </div>
        </div>

        <div className={styles.desc} >
          <div className={styles.name} >
            <p>Hi. I'm Soso,nice to meet you.Please take a look around.</p>
          </div>
          <div>
            <p>
            I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do If you had a software expert available at your fingertips
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About