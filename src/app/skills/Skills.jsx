import React from 'react'
import styles from "./Skills.module.css"
import Image from 'next/image';


import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';




function exp() {
  return (
    <div name='skills' className={styles.mainContainer}  >
      {/* container */}
      <div className={styles.container} >
        <div>
          <p  className={styles.title} >Skills</p> 
          <p  className={styles.desc} >//These are the technologies I've worked with</p>
        </div>

        <div className={styles.all} >
          <div className={styles.group} >
            <Image className={styles.icon} src={HTML} alt='Html icon'/>
            <p className={styles.bot} >
            HTML
            </p>
          </div>

                    <div className={styles.group} >
            <Image className={styles.icon} src={CSS} alt='Html icon'/>
            <p className={styles.bot} >
            CSS
            </p>
          </div>

          
          <div className={styles.group} >
            <Image className={styles.icon} src={JavaScript} alt='Html icon'/>
            <p className={styles.bot} >
            JAVASCRIPT
            </p>
          </div>

          
          <div className={styles.group} >
            <Image className={styles.icon} src={ReactImg} alt='Html icon'/>
            <p className={styles.bot} >
            REACT
            </p>
          </div>

          <div className={styles.group} >
            <Image className={styles.icon} src={Node} alt='Html icon'/>
            <p className={styles.bot} >
            NODE
            </p>
          </div>

          <div className={styles.group} >
            <Image className={styles.icon} src={GitHub} alt='Html icon'/>
            <p className={styles.bot} >
           GITHUB
            </p>
          </div>

          
          
        </div>
      </div>
     
    </div>
  )
}

export default exp