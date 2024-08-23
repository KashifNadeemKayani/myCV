import React from 'react';
import styles from './Languages.module.css';

function Languages() {
  return (
    <section className="my-5">
      <h2 className={`text-center ${styles.language}`}>Languages</h2> 
      <div className={styles.skillsContainer}>
        <ul className="list-group list-group-flush text-center">
          
          <li className={`list-group-item ${styles.listItem}`}>Urdu</li>
          <div className={`${styles.progressBarContainer} progress`} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`} style={{ width: '100%' }}></div>
          </div>

          <li className={`list-group-item ${styles.listItem}`}>English</li>
          <div className={`${styles.progressBarContainer} progress`} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
            <div className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`} style={{ width: '85%' }}></div>
          </div>

          <li className={`list-group-item ${styles.listItem}`}>Punjabi</li>
          <div className={`${styles.progressBarContainer} progress`} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            <div className={`progress-bar progress-bar-striped progress-bar-animated ${styles.progressBar}`} style={{ width: '70%' }}></div>
          </div>
          
        </ul>
      </div>
    </section>
  );
}

export default Languages;
