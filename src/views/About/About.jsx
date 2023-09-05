// HomeView.js
import React from 'react';
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.about}>Sobre mi</h1>
      <h2 className={styles.presentation}>Hola, de nuevo. ¡Siéntete libre de explorar mi portafolio!</h2>
      <p className={styles.text}>
Desde una temprana edad, cultivé una profunda afinidad por el mundo de la tecnología, en parte gracias a la influencia de mi padre, un destacado técnico informático. A través de su guía y mentoría, tuve la fortuna de explorar y sumergirme en las fascinantes complejidades de esta disciplina. Durante varios años de mi adolescencia, tuve la oportunidad de colaborar activamente junto a él, impulsado por una inextinguible curiosidad por descubrir más acerca de este apasionante ámbito.

Esta colaboración me brindó la invaluable oportunidad de adentrarme en la esencia misma de la tecnología, y fue un catalizador esencial para mi determinación de elegir el camino de convertirme en desarrollador. Cada interacción con mi padre, cada desafío que enfrentamos juntos y cada solución que creamos colaborativamente me sirvieron de base para consolidar mi pasión y decidir con convicción dedicarme a la profesión de desarrollo.

Mi trayectoria, desde esos primeros momentos hasta el día de hoy, ha sido un viaje de exploración constante, aprendizaje continuo y búsqueda incansable de la excelencia en el campo del desarrollo. A través de estudios rigurosos, proyectos desafiantes y la voluntad inquebrantable de superar obstáculos, he cultivado una base sólida de habilidades técnicas y una profunda comprensión de las dinámicas cambiantes en el mundo tecnológico.

Hoy, estoy comprometido a seguir forjando mi camino como desarrollador, persiguiendo nuevos conocimientos, abordando proyectos innovadores y contribuyendo de manera significativa al avance de la tecnología. Mi historia personal y profesional es un testimonio de mi dedicación y pasión por esta disciplina en constante evolución, y estoy emocionado por las oportunidades que el futuro me depara como profesional en el mundo del desarrollo.
      </p>
     </div>
  );
};

export default About;
