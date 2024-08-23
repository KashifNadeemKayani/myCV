import React from 'react';
import Matric from "./Matric.jpg"
import Fsc from './HSSC.jpg'
import transcript from './Transcript.jpg'
import styles from "./Education.module.css"



function Education() {
  return (
    <section className="my-5">
      <h2 className={`text-center ${styles.edu}`} >Education</h2> <hr />
      <div className="container">
        <div className="row">
         
        <div className="col-md-4">
  <h4>Iftikhar Model Academy | Islamabad Pakistan</h4>
  <p>
    Science, Matric<br />
    Secured 998/1100 (90.73%) marks.<br />
    Apr.2019 - May.2021
  </p>
  <a href={Matric} target="_blank" rel="noopener noreferrer">Click Here to Get Result Card</a>
  </div>

          <div className="col-md-4">
            <h4>Pak Turk Maarif International Schools and Colleges | Islamabad Pakistan</h4>
            <p>Pre-Engineering, FSc.<br />Secured 949/1100 (86.27%) marks.<br />Sep.2021 - May.2023</p>
            <a href={Fsc} target="_blank" rel="noopener noreferrer">Click Here to Get Result Card</a>
          </div>
          <div className="col-md-4">
            <h4>National University of Sciences and Technology | Islamabad Pakistan</h4>
            <p>Mechanical Engineering, Bachelor of Engineering<br />Currently studying with a CGPA of 3.41<br />Sep.2023 - Present</p>
            <a   href={transcript}   target="_blank"   rel="noopener noreferrer"  onClick={() => {alert("2nd Semester Transcript not Available, Showing you 1st semester Transcript"); }}>
                Click Here to View Transcript
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
