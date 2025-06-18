// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "./Header.module.css";
// import pic from './picccc.jpg'

// function Header() {
//   return (
//     <header className={`bg-dark text-white text-center py-4 ${styles.header}`}>
//       <div className="d-flex flex-column align-items-center">
//         <img
//           src={pic}
//           alt="Kashif Nadeem Kayani"
//           className={`rounded-circle ${styles.profileImage}`}
//         />
//         <h1 className="mt-3">Kashif Nadeem Kayani</h1>
//         <p className="mt-2">Driven to innovate and eager to make an impact.</p>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Header.module.css";
import pic from './picccc.jpg';

function Header() {
  const [isZoomed, setIsZoomed] = useState(false);

  // Scroll and ESC key behavior
  useEffect(() => {
    // Scroll lock
    document.body.style.overflow = isZoomed ? 'hidden' : 'auto';
    document.body.style.touchAction = isZoomed ? 'none' : 'auto';

    // ESC key listener
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsZoomed(false);
      }
    };

    if (isZoomed) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isZoomed]);

  return (
    <header className={`bg-dark text-white text-center py-4 ${styles.header}`}>
      <div className="d-flex flex-column align-items-center">
        <div className={styles.imageContainer}>
          <img
            src={pic}
            alt="Kashif Nadeem Kayani"
            onClick={() => setIsZoomed(true)}
            className={`rounded-circle ${styles.profileImage} ${!isZoomed ? styles.hoverEffect : ''}`}
          />
        </div>
        <h1 className="mt-3">Kashif Nadeem Kayani</h1>
        <p className="mt-2">Driven to innovate and eager to make an impact.</p>
      </div>

      {isZoomed && (
        <div className={styles.overlay}>
          <div className={styles.zoomWrapper}>
            <button className={styles.closeButton} onClick={() => setIsZoomed(false)}>×</button>
            <img
              src={pic}
              alt="Zoomed"
              className={`rounded-circle ${styles.profileImage} ${styles.zoomed}`}
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
