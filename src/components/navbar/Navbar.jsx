import React from 'react'
import styles from "./navbar.module.css"
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
// import {FaTimes} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../../../public/logo.png"
import Image from 'next/image'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';


function Navbar() {
  return (
    <div className={styles.mainContainer}>
      <div>
      <Image className={styles.logo} src={Logo} alt="Logo Image" style={{width:"15%",height:"40%"}} />
      </div>
      <DarkModeToggle/>
{/* menu */}
      <div>
        <ul className={styles.container}>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Social Icons */}

      <div className={styles.socialIcons}>
        <ul>
          <li className={styles.icon}>
            <a className={styles.face} href="https://www.linkedin.com/in/soso-buzaladze-a18286285/" target='blank'>
              Linkedin  <FaLinkedin className={styles.faicon} />
          </a>
            </li>
      </ul>
            </div>

            <div className={styles.socialIcons1}>
              <ul>
            <li className={styles.git } style={{ backgroundColor: '#333333' }}>
            <a className={styles.face} href="https://github.com/Buzala21/Portfolio-Updated" target='blank' >
              Github  <FaGithub className={styles.faicon} />
          </a>
            </li>
            </ul>
        </div>

        <div className={styles.socialIcons2}>
              <ul>
            <li className={styles.git } style={{ backgroundColor: '#6fc2b0'  }}>
            <a className={styles.face} href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBcZgGQHzJDBdkFxwxwWXWVGsWldmVgKxHlfwVTJcCzwxSQcdtjwPrBLcvMqZDjKVzgzl" target='blank' >
            Email  <HiOutlineMail className={styles.faicon} />
          </a>
            </li>
            </ul>
        </div>

        <div className={styles.socialIcons3}>
              <ul>
            <li className={styles.git } style={{ backgroundColor: '#565f69' }}>
            <a className={styles.face} href="https://buzala21.github.io/Resume/" target='blank' >
            Resume  <BsFillPersonLinesFill className={styles.faicon} />
          </a>
            </li>
            </ul>
        </div>

      

      

      

      
            {/* <li className={styles.icon} style={{ backgroundColor: '#6fc2b0' }}>
            <a className={styles.face} href="/">
              Email  <HiOutlineMail className={styles.faicon} />
          </a>
            </li>
            <li className={styles.icon} style={{ backgroundColor: '#565f69' }}>
            <a className={styles.face} href="/">
              Resume  <BsFillPersonLinesFill className={styles.faicon} />
          </a>
            </li> */}


    </div>
  )
}

export default Navbar