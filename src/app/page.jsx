import React from 'react'
import styles from "./page.module.css"
import {HiArrowNarrowRight } from 'react-icons/hi'


function page() {
  return (
    <div name="home">

      <div className={styles.mainContainer}>
        <p style={{color:"#F1C305"}} >Hi my name is</p>
        <h1 className={styles.name}>Soso Buzaladze</h1>
        <h2 className={styles.dev} >I'm Frontend Developer</h2>
        <p className={styles.desc} >I'm a Frontend Developer specializing in bullding (and occasionally designing)
           exceptional digital experiences.focused on Currently,
         building responsiv websites</p>
         <div>
          <button className={styles.but} >View Work
          <span className={styles.arrow} >
            <HiArrowNarrowRight style={{marginLeft:"10px"}}/>
            </span>   
          </button>
         </div>


      </div>


  
    </div>
  )
}

export default page