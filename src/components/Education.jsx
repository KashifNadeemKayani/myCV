
// import Matric from "./Matric.jpg";
// import Fsc from './HSSC.jpg';
// import transcript from './Transcript.png';
// import styles from "./Education.module.css";

// function Education() {
//   return (
//     <section className="my-5">
//       <h2 className={`text-center ${styles.edu}`}>Education</h2>
//       <hr />
//       <div className="container">
//         <div className="row">
//           <div className="row">
//             <div className={`col-md-4 ${styles.eduBlock}`}>
//               <h4>Iftikhar Model Academy | Islamabad Pakistan</h4>
//               <p>
//                 Science, Matric<br />
//                 Secured 998/1100 (90.73%) marks.<br />
//                 Apr. 2019 - May. 2021
//               </p>
//               <a href={Matric} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
//                 View Result Card
//               </a>
//               {/* Horizontal line for mobile */}
//               <hr className={styles.mobileHr} />
//             </div>

//             <div className={`col-md-4 ${styles.eduBlock}`}>
//               <h4>Pak Turk Maarif International Schools and Colleges | Islamabad Pakistan</h4>
//               <p>
//                 Pre-Engineering, FSc.<br />
//                 Secured 949/1100 (86.27%) marks.<br />
//                 Sep. 2021 - May. 2023
//               </p>
//               <a href={Fsc} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
//                 View Result Card
//               </a>
//               {/* Horizontal line for mobile */}
//               <hr className={styles.mobileHr} />
//             </div>

//             <div className={`col-md-4 ${styles.eduBlock}`}>
//               <h4>National University of Sciences and Technology | Islamabad Pakistan</h4>
//               <p>
//                 Mechanical Engineering, Bachelor of Engineering<br />
//                 Currently studying with a CGPA of 3.43<br />
//                 Sep. 2023 - Present
//               </p>
//               <a href={transcript} target="_blank" rel="noopener noreferrer" className={styles.linkButton}
//                onClick={() => {alert("5th Semester Transcript is not Available, Showing you 4th semester Transcript"); }}
//               >
//                 View Transcript
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Education;


import { useState, useEffect } from "react";
import Matric from "./Pic/Matric.jpg";
import Fsc from "./Pic/HSSC.jpg";
import transcript from "./Pic/Transcript.png";
import styles from "./Education.module.css";

function Education() {
  const [popupImg, setPopupImg] = useState(null);
  const [popupMsg, setPopupMsg] = useState("");

  /* Lock background scroll */
  useEffect(() => {
    document.body.style.overflow =
      popupImg || popupMsg ? "hidden" : "auto";
  }, [popupImg, popupMsg]);

  /* ESC closes popup */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setPopupImg(null);
        setPopupMsg("");
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section className="my-5">
        <h2 className={`text-center ${styles.edu}`}>Education</h2>
        <hr />

        <div className="container">
          <div className="row">

            <div className={`col-md-4 ${styles.eduBlock}`}>
              <h4>Iftikhar Model Academy | Islamabad Pakistan</h4>
              <p>
                Science, Matric<br />
                Secured 998/1100 (90.73%) marks.<br />
                Apr. 2019 – May. 2021
              </p>
              <button
                className={styles.linkButton}
                onClick={() => setPopupImg(Matric)}
              >
                View Result Card
              </button>
              <hr className={styles.mobileHr} />
            </div>

            <div className={`col-md-4 ${styles.eduBlock}`}>
              <h4>
                Pak Turk Maarif International Schools and Colleges |
                Islamabad Pakistan
              </h4>
              <p>
                Pre-Engineering, FSc.<br />
                Secured 949/1100 (86.27%) marks.<br />
                Sep. 2021 – May. 2023
              </p>
              <button
                className={styles.linkButton}
                onClick={() => setPopupImg(Fsc)}
              >
                View Result Card
              </button>
              <hr className={styles.mobileHr} />
            </div>

            <div className={`col-md-4 ${styles.eduBlock}`}>
              <h4>
                National University of Sciences and Technology |
                Islamabad Pakistan
              </h4>
              <p>
                Mechanical Engineering, Bachelor of Engineering<br />
                Currently studying with a CGPA of 3.43<br />
                Sep. 2023 – Present
              </p>
              <button
                className={styles.linkButton}
                onClick={() => {
                  setPopupMsg(
                    "5th Semester transcript is not available yet.\nShowing transcript up to 4th semester."
                  );
                  setTimeout(() => {
                    setPopupMsg("");
                    setPopupImg(transcript);
                  }, 1500);
                }}
              >
                View Transcript
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* IMAGE POPUP */}
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
            <img src={popupImg} alt="Document Preview" />
          </div>
        </div>
      )}

      {/* MESSAGE POPUP */}
      {popupMsg && (
        <div className={styles.overlay} onClick={() => setPopupMsg("")}>
          <div
            className={styles.popupMsg}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setPopupMsg("")}
              aria-label="Close"
            >
              ×
            </button>
            <h4>Transcript Status</h4>
            <p>{popupMsg}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Education;
