// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
// import styles from './Project.module.css'; // Import your custom CSS
// import KT from './KT Hatori.jpg'; // Import images
// import AKDC from './AKDC.jpg';
// import AKDCNationals from './ADKCnationals.jpg';

// const Project = () => {
//   return (
//     <>
//       <h2 className={`text-center my-4 ${styles.project}`}>Projects</h2>

//       <div className={`${styles.projectSection} container`}>
//         {/* End Semester Projects */}
//         <div className={`${styles.projectAccordion} accordion`} id="endSemesterProjects">
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="endSemesterHeading">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#endSemesterCollapse"
//                 aria-expanded="false"
//                 aria-controls="endSemesterCollapse"
//               >
//                 End Semester Projects
//               </button>
//             </h2>
//             <div
//               id="endSemesterCollapse"
//               className="accordion-collapse collapse"
//               aria-labelledby="endSemesterHeading"
//               data-bs-parent="#endSemesterProjects"
//             >
              
//               <div className="accordion-body">
//                 <strong>Project 1:</strong> Worked as a team named <b>FAKHTA</b> in the <b>KT Hatori Design Challenge</b> in the first semester, making a glider that covers the most distance by gliding. Our glider achieved the highest range by covering 1244cms.
//                 <br />
//                 <hr />
//                 <strong>Project 2:</strong> Worked as a team in the <b>Abul Kalam Design Challenge</b> by designing an obstacle-detecting, repeatable vehicle. Our team got 1st position in AKDC as well.
//                 <br />
//                 <hr />
//                 <strong>Project 3:</strong> Participated in the <b>AKDC Nationals</b> held at <b>UET Taxila</b>, where we finished in the <b>top 4</b>. The challenge was to design a mechanical autonomous car without any electrical components.


//                 <br />
//                 <br />

//                 <div className="mt-3">
//                   <h5>Certificates:</h5>
//                   <a href={KT} target="_blank" rel="noopener noreferrer" className={`${styles.certificateImage} img-fluid`}>
//                     1st Semester: KT Hatori Design Challenge
//                   </a>
//                   <br />
//                   <a href={AKDC} target="_blank" rel="noopener noreferrer" className={`${styles.certificateImage} img-fluid`}>
//                     2nd Semester: AKDC
//                   </a>
//                   {/* Optional: Add a certificate link for AKDC Nationals if you have one */}
//                   <br />
//                   <a href={AKDCNationals} target="_blank" rel="noopener noreferrer" className={`${styles.certificateImage} img-fluid`}>
//                     AKDC Nationals: UET Taxila
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Web Development Projects */}
//         <div className={`${styles.projectAccordion} accordion mt-4`} id="webDevProjects">
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="webDevHeading">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#webDevCollapse"
//                 aria-expanded="false"
//                 aria-controls="webDevCollapse"
//               >
//                 Web Development Projects
//               </button>
//             </h2>
//             <div
//               id="webDevCollapse"
//               className="accordion-collapse collapse"
//               aria-labelledby="webDevHeading"
//               data-bs-parent="#webDevProjects"
//             >
//               <div className="accordion-body">
//                 <strong>Project 1: Rock Paper Scissors</strong> - Created a basic rock-paper-scissors game, playing against the computer only.
//                 <hr />
//                 <strong>Project 2: Tic Tac Toe</strong> - Created a Tic-Tac-Toe game with options to play against a human or AI. It is impossible to defeat the AI while playing second.
//                 <br /><br />
//                 <h5>Links:</h5>
//                 <p>
//                   <b>Project 1:</b> <a href="https://knkayani.github.io/RockPaperScissors/" target="_blank" rel="noopener noreferrer">Rock Paper Scissors</a>
//                   <br />
//                   <b>Project 2:</b> <a href="https://kashifnadeemkayani.github.io/TicTacToe./" target="_blank" rel="noopener noreferrer">Tic Tac Toe</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Project;

//..................................................................
// CHANGING SYTLE {OBJECT TYPE}
//..................................................................

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styles from "./Project.module.css";

import KT from "./Pic/KT Hatori.jpg";
import AKDC from "./Pic/AKDC.jpg";
import AKDCNationals from "./Pic/ADKCnationals.jpg";

const endSemesterProjects = [
  {
    title: 'Winner of "KT Hatori Design Challenge" ',
    description:
      "Worked as a team named FAKHTA in the first semester, designing a glider to achieve maximum glide distance. Our glider achieved the highest range of 1244 cm.",
    certificate: KT,
  },
  {
    title: 'Winner of "Abul Kalam Design Challenge (AKDC)"',
    description:
      "Designed an obstacle-detecting, repeatable vehicle as part of a team. Our team secured 1st position in AKDC.",
    certificate: AKDC,
  },
  {
    title: ' Participated in "AKDC Nationals – UET Taxila"',
    description:
      "Participated in AKDC Nationals held at UET Taxila. Designed a fully mechanical autonomous car without any electrical components and finished in the top 4 teams.",
    certificate: AKDCNationals,
  },
];

const webDevProjects = [
  {
    title: "The Reliable Mart",
    description:
      "Created an Online Accessories Store for university Students for Reliable Products using React JS ",
    link: "https://thereliablemart.github.io/ItemList",
  },
  {
    title: "Portfolio",
    description:
      "Created an Appealing Portfolio containing Skills, Projects and Certificates",
    link: "https://kashifnadeemkayani.github.io/Portfolio/",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Developed a Tic-Tac-Toe game with both human and AI modes. The AI is unbeatable when playing second.",
    link: "https://kashifnadeemkayani.github.io/TicTacToe./",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "Created a basic Rock-Paper-Scissors game where the player competes against the computer.",
    link: "https://knkayani.github.io/RockPaperScissors/",
  },
];

const Project = () => {
  const [popupImg, setPopupImg] = useState(null);

  /* Lock background scroll */
  useEffect(() => {
    document.body.style.overflow = popupImg ? "hidden" : "auto";
  }, [popupImg]);

  /* ESC key close */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setPopupImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <h2 className={`text-center my-4 ${styles.project}`}>Projects</h2>

      <div className={`${styles.projectSection} container`}>

        {/* End Semester Projects */}
        <div className={`${styles.projectAccordion} accordion`}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#endSemesterCollapse"
              >
                End Semester Projects
              </button>
            </h2>

            <div id="endSemesterCollapse" className="accordion-collapse collapse">
              <div className="accordion-body">

                {endSemesterProjects.map((project, index) => (
                  <div key={index}>
                    <strong>{project.title}</strong>
                    <p>{project.description}</p>

                    {project.certificate && (
                     <button
                      className={styles.certificateBtn}
                      onClick={() => setPopupImg(project.certificate)}
                    >
                      View Certificate
                    </button>

                    )}

                    {index !== endSemesterProjects.length - 1 && <hr />}
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* Web Development Projects */}
        <div className={`${styles.projectAccordion} accordion mt-4`}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#webDevCollapse"
              >
                Web Development Projects
              </button>
            </h2>

            <div id="webDevCollapse" className="accordion-collapse collapse">
              <div className="accordion-body">

                {webDevProjects.map((project, index) => (
                  <div key={index}>
                    <strong> {project.title}</strong>
                    <p>{project.description}</p>

                    {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveBtn}
                  >
                    Live Project
                  </a>

                    )}

                    {index !== webDevProjects.length - 1 && <hr />}
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* CERTIFICATE IMAGE POPUP */}
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
            <img src={popupImg} alt="Certificate" />
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
