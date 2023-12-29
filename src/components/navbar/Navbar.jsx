import React from 'react'
import styles from "./navbar.module.css"
import { FaFacebook } from 'react-icons/fa';
// import {FaTimes} from 'react-icons/fa'
// import {HiOutlineMail} from "react-icons/hi"
// import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../../../public/logo.png"
import Image from 'next/image'
// FaBars,FaTimes FaGithub,FaLinkedin
function Navbar() {
  return (
    <div className={styles.mainContainer}>
      <div>
      <Image src={Logo} alt="Logo Image" style={{width:"20%",height:"50%"}} />
      </div>
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
          <li className={styles.icon} >
            <a className={styles.face} href="">
              Linkedin <FaFacebook/>
            </a>
          </li>
          <li className={styles.icon}></li>
          <li className={styles.icon}></li>
        </ul>

      </div>

      

      


    </div>
  )
}

export default Navbar