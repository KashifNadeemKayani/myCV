// import React from 'react';
// import styles from './Skills.module.css';

// function Skills() {
//   return (

//     <section className="my-5">
//       <br ></br>
//       <h2 className={`text-center ${styles.skill}`}>Skills</h2>

//       <div className={styles.skillsContainer}>
//         <ul className="list-group list-group-flush text-center">

//           <li className={`list-group-item ${styles.listItem}`}>Fundamentals of Engineering</li>
//           <div className={`${styles.progressBarContainer} progress`} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
//             <div className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`} style={{ width: '100%' }}></div>
//           </div>



//           <li className={`list-group-item ${styles.listItem}`}>Machine Parts and their Working</li>
//           <div className={`${styles.progressBarContainer} progress`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
//             <div className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`} style={{ width: '75%' }}></div>
//           </div>
//           <li className={`list-group-item ${styles.listItem}`}>Auto Desk Fusion</li>
//           <div className={`${styles.progressBarContainer} progress`} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
//             <div className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`} style={{ width: '85%' }}></div>
//           </div> <li className={`list-group-item ${styles.listItem}`}>Front-end Web Development</li>
//           <div className={`${styles.progressBarContainer} progress`} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
//             <div className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`} style={{ width: '85%' }}></div>
//           </div>



//         </ul>
//       </div>
//     </section>
//   );
// }

// export default Skills;



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Style change
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css";

/* Import Coursera certificates */
import SW_3D from "../assets/Certificates/SW_3D.png";
import MaterMatlab from "../assets/Certificates/MaterMatlab.png";
import AdvancedExcel from "../assets/Certificates/AdvancedExcel.png";
import DavinciSpecialization from "../assets/Certificates/DavinciSpecialization.png";
import Meta from "../assets/Certificates/Meta.png";

const skillsData = [
  {
    name: "SOLIDWORKS 3D CAD",
    level: 96,
    certificate: SW_3D,
  },
  {
    name: "MATLAB",
    level: 75,
    certificate: MaterMatlab, // no certificate yet
  },
  {
    name: "ADVANCED EXCEL",
    level: 95,
    certificate: AdvancedExcel ,
  },
  {
    name: "DaVINCI RESOLVE",
    level: 90,
    certificate: DavinciSpecialization ,
  },
  {
    name: "FRONT END WEB DEV",
    level: 95,
    certificate: Meta,
  },
];

function Skills() {
  const [popupImg, setPopupImg] = useState(null);

  /* Lock background scroll */
  useEffect(() => {
    document.body.style.overflow = popupImg ? "hidden" : "auto";
  }, [popupImg]);

  /* ESC key closes popup */
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
        <br />
        <h2 className={`text-center ${styles.skill}`}>Skills</h2>

        <div className={styles.skillsContainer}>
          <ul className="list-group list-group-flush text-center">

            {skillsData.map((skill, index) => (
              <React.Fragment key={index}>
                {/* <li
                  className={`list-group-item ${styles.listItem}`}
                  style={{
                    cursor: skill.certificate ? "pointer" : "default",
                  }}
                  onClick={() =>
                    skill.certificate && setPopupImg(skill.certificate)
                  }
                >
                  {skill.name}
                </li> */}
                    <li
                      className={`list-group-item ${styles.listItem}`}
                      onClick={() => skill.certificate && setPopupImg(skill.certificate)}
                      style={{ cursor: skill.certificate ? "pointer" : "default" }}
                    >
                      {skill.name}
                      {skill.certificate && (
                        <span className={styles.certBadge}>Certificate</span>
                      )}
                    </li>

                <div
                  className={`${styles.progressBarContainer} progress`}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </React.Fragment>
            ))}

          </ul>
        </div>
      </section>

      {/* CERTIFICATE POPUP (same as Projects) */}
      {popupImg && (
        <div className={styles.overlay} onClick={() => setPopupImg(null)}>
          <div
            className={styles.popup}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setPopupImg(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img src={popupImg} alt="Skill Certificate" />
          </div>
        </div>
      )}
    </>
  );
}

export default Skills;
