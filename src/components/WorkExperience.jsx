import React, { useState, useEffect } from "react";
import styles from "./WorkExperience.module.css";
import PakTurkCert from "../assets/Certificates/Intern.png"; // your A4 certificate image


function WorkExperience() {
  const [popupImg, setPopupImg] = useState(null);

  useEffect(() => {
    document.body.style.overflow = popupImg ? "hidden" : "auto";
  }, [popupImg]);

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") setPopupImg(null);
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  return (
    <>
      <section className="my-5">
        <h2 className={`text-center ${styles.work}`}>Work Experience</h2>

        <div className={styles.workContainer}>
          <div className={styles.workCard}>
            <h4 className={styles.company}>
              PakTurk Maarif International Schools and Colleges
            </h4>

            <div className={styles.meta}>
              <span><b>Role:</b> Intern</span>
              <span><b>Duration:</b> August 2025</span>
            </div>

            <ul className={styles.points}>
              <li>Gained practical exposure to an academic and professional working environment.</li>
              <li>Assisted in day-to-day institutional operations.</li>
              <li>Learned about organizational workflows and teamwork.</li>
            </ul>

            <button
              className={styles.certificateBtn}
              onClick={() => setPopupImg(PakTurkCert)}
            >
              View Internship Certificate
            </button>
          </div>
        </div>
      </section>

      {/* CERTIFICATE POPUP */}
      {popupImg && (
        <div className={styles.overlay} onClick={() => setPopupImg(null)}>
          <div
            className={styles.popup}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setPopupImg(null)}
            >
              ×
            </button>
            <img src={popupImg} alt="Internship Certificate" />
          </div>
        </div>
      )}
    </>
  );
}

export default WorkExperience;
