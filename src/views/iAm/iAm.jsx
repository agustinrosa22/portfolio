import React from 'react';
import styles from './iAm.module.css';

const Presentation = () => {
  return (
    <div className={styles.container}>
      <p className={styles.presentation}>Hola. Mi nombre es</p>
      <h1 className={styles.name}>Agustin Rosa</h1>
      <h2 className={styles.profesion}>Soy un Desarrollador Full Stack</h2>
      <p className={styles.text}>Actualmente, me encuentro sumergido en un profundo viaje de exploración en el fascinante mundo de la tecnología. Estoy dedicando mi tiempo y esfuerzo para entender sus complejidades y desentrañar sus secretos, en busca de un entendimiento más sólido y una perspectiva más amplia. Cada día es una oportunidad emocionante para descubrir nuevas facetas y aplicaciones que la tecnología tiene para ofrecer, y estoy comprometido en aprovechar al máximo esta experiencia enriquecedora.</p>
      <button className={styles.button}>
        <a href="https://drive.google.com/file/d/1F2_ImzZEp-uM0sXbxp9OYLv1ZuT-G7SA/view?usp=sharing" target="_blank">Mira mi curriculum</a>
      </button>
    </div>
  );
};

export default Presentation;
