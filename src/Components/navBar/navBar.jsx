import React from 'react';
import styles from './navBar.module.css'
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando react-router-dom para manejar las rutas

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
  <nav className={styles.navBar}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <a href="#iAm">Inicio</a>
      </li>
      <li className={styles.navItem}>
        <a href="#about">Sobre Mí</a>
      </li>
      <li className={styles.navItem}>
        <a href="#skills">Habilidades</a>
      </li>
      <li className={styles.navItem}>
        <a href="#work">Proyectos</a>
      </li>
    </ul>
  </nav>
</div>

  );
};

export default NavBar;
