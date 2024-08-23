import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  return (
    
    <section className="my-5">
      <br ></br>
      <h2 className={`text-center ${styles.skill}`}>Skills</h2>
     
      <div className={styles.skillsContainer}>
        <ul className="list-group list-group-flush text-center">
          
          <li className={`list-group-item ${styles.listItem}`}>Fundamentals of Engineering</li>
          <div className={`${styles.progressBarContainer} progress`} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`} style={{ width: '100%' }}></div>
          </div>

          <li className={`list-group-item ${styles.listItem}`}>Machine Parts and their Working</li>
          <div className={`${styles.progressBarContainer} progress`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`} style={{ width: '75%' }}></div>
          </div>
          
          <li className={`list-group-item ${styles.listItem}`}>Front-end Web Development</li>
          <div className={`${styles.progressBarContainer} progress`} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
            <div className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`} style={{ width: '85%' }}></div>
          </div>
          
        </ul>
      </div>
    </section>
  );
}

export default Skills;
