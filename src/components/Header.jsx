import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Header.module.css";
import pic from './Pic.jpg'

function Header() {
  return (
    <header className={`bg-dark text-white text-center py-4 ${styles.header}`}>
      <div className="d-flex flex-column align-items-center">
        <img 
          src= {pic}
          alt="Kashif Nadeem Kayani" 
          className={`rounded-circle ${styles.profileImage}`} 
        />
        <h1 className="mt-3">Kashif Nadeem Kayani</h1>
        <p className="mt-2">Driven to innovate and eager to make an impact.</p>
      </div>
    </header>
  );
}

export default Header;
