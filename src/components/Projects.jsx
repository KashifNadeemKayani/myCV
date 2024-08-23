import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Project.module.css';
import KT from './KT Hatori.jpg';
import AKDC from './AKDC.jpg';

const Project = () => {
  return (<>
  
    <h2 className={`text-center my-4 ${styles.project }`}>Projects</h2>

    <div className={`${styles.projectSection} container`}>
      
      
      {/* End Semester Projects */}
      <div className={`${styles.projectAccordion} accordion`} id="endSemesterProjects">
        <div className="accordion-item">
          <h2 className="accordion-header" id="endSemesterHeading">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#endSemesterCollapse" aria-expanded="false" aria-controls="endSemesterCollapse">

              End Semester Projects
            </button>
          </h2>
          <div id="endSemesterCollapse" className="accordion-collapse collapse " aria-labelledby="endSemesterHeading" data-bs-parent="#endSemesterProjects">
            <div className="accordion-body">
              <strong>Project 1:</strong> Worked as a team named as <b>FAKHTA</b> in <b> KT Hatori Design Challenge</b> in First Semester, making a glider that covers most distance by gliding. Our glider achieved highest range by covering 1244cms.
              <br />
              <hr />
              <strong>Project 2:</strong> Worked as a team in <b>Abul Kalam Design Challenge</b> by designing Obstacle detecting repeatable vehical. Our team got 1st position in AKDC as well.
              <div className="mt-3">
                <h5>Certificates:</h5>
                <a href={KT} target="_blank" rel="noopener noreferrer" className={`${styles.certificateImage} img-fluid`} >1st Semester: KT Hatori Design CHallenge</a>
                <br />
                <a href={AKDC} target="_blank" rel="noopener noreferrer" className={`${styles.certificateImage} img-fluid`} >2nd Semester: AKDC</a>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Web Development Projects */}
      <div className={`${styles.projectAccordion} accordion mt-4`} id="webDevProjects">
        <div className="accordion-item">
          <h2 className="accordion-header" id="webDevHeading">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#webDevCollapse" aria-expanded="false" aria-controls="webDevCollapse">
              Web Development Projects
            </button>
          </h2>
          <div id="webDevCollapse" className="accordion-collapse collapse" aria-labelledby="webDevHeading" data-bs-parent="#webDevProjects">
            <div className="accordion-body">
              <strong>Project 1: Rock Paper Scissors</strong> - Created a basic rock paper scissors game, playing against computer only.
              <hr />
              <strong>Project 2: Tic Tac Toe</strong> - Created a Tic-Tac-Toe having options to play against Human and AI. It is impossible to defeat AI while playing second against AI.
              <br /><br />
              <h5>Links:</h5>
              <p><b>Project 1:</b> <a href="https://knkayani.github.io/RockPaperScissors/" target="_blank" rel="noopener noreferrer">Rock Paper Scissors</a>
              <br />
              <b>Project 2: </b> <a href="https://kashifnadeemkayani.github.io/TicTacToe./" target="_blank" rel="noopener noreferrer">Tic Tac Toe</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Project;
