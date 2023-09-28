// HomeView.js
import React from 'react';
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.about}>Sobre mi</h1>
      <h2 className={styles.presentation}>Hola, de nuevo. ¡Siéntete libre de explorar mi portafolio!</h2>
      <p className={styles.text}>
      Desde joven, me apasionó la tecnología gracias a la influencia de mi padre, un experto en informática. Trabajé junto a él, explorando el mundo de la tecnología y colaborando en proyectos. Esta experiencia me llevó a decidir convertirme en desarrollador. Mi trayectoria ha sido un constante aprendizaje y búsqueda de excelencia. Estoy comprometido a seguir creciendo como desarrollador y contribuir al avance tecnológico. Mi historia es un testimonio de mi dedicación y pasión por esta disciplina en constante evolución. Estoy emocionado por las oportunidades que el futuro me depara en el mundo del desarrollo.
      </p>
     </div>
  );
};

export default About;
