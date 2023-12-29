import React from 'react'
import styles from "./Contact.module.css"

function Contact() {
  return (
    <div name='contact' className={styles.mainContainer}>
    <form method='POST' action="https://getform.io/f/c7e54cd5-78e8-4e08-bfaf-085b19f3276b" className={styles.container}>
        <div className={styles.desc}>
            <p className={styles.cont}>Contact</p>
            <p className={styles.gmail}>// Submit the form below or shoot me an email -soso.buzaladze2007i@gmail.com</p>
        </div>
        <input className={styles.text} type="text" placeholder='Name' name='name' />
        <input className={styles.email} type="email" placeholder='Email' name='email' />
        <textarea className={styles.message} name="message" rows="10" placeholder='Message'></textarea>
        <button className={styles.submit}>Let's Collaborate</button>
    </form>
</div>
  )
}

export default Contact