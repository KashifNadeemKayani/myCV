import React from 'react';
import styles from './Contact.module.css'
function Contact() {
  return (
    <section className="my-5">
      <h2 className={`text-center  ${styles.contact}`}>Contact</h2> 
      <div className="text-center">
        <p> <b>Email: </b> kashifnadeem898@gmail.com</p>
        <p> <b> Phone: </b> +923343288223</p>
        <p> <b>Address: </b> Street #09 House #14 Sanam Chowk, Khanna Dak, Islamabad, Pakistan</p>
      </div>
    </section>
  );
}

export default Contact;
