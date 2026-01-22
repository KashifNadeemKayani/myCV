import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className="my-5">
      <h2 className={`text-center ${styles.contact}`}>Contact</h2>

      <div className="text-center">
        <p>
          <b>Email:</b>{" "}
          <a
            href="mailto:kashifnadeem898@gmail.com"
            className={styles.link}
          >
            kashifnadeem898@gmail.com
          </a>
        </p>

        <p>
          <b>Phone:</b>{" "}
          <a
            href="tel:+923343288223"
            className={styles.link}
          >
            +92 334 3288223
          </a>
        </p>

        <p className={styles.address}>
          <b>Address:</b>{" "}
          <a
            href="https://goo.gl/maps/Xn98vh1gpyv9Vhmr8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Street #09 House #14, Sanam Chowk, Khanna Dak, Islamabad, Pakistan
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
