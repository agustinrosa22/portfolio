// HomeView.js
import React from 'react';
import styles from './Skills.module.css'
import htmlLogo from '../../Assets/HTML5.svg.png'
import cssLogo from '../../Assets/CSS3_logo.svg.png'
import jsLogo from '../../Assets/JavaScript-logo.png'
import tsLogo from '../../Assets/Typescript_logo_2020.svg.png'
import reactLogo from '../../Assets/React-icon.svg.png'
import viteLogo from '../../Assets/Vitejs-logo.svg.png'
import pstgresqlLogo from '../../Assets/Postgresql_elephant.svg.png'
import nodeLogo from '../../Assets/nodejs-logo-FBE122E377-seeklogo.com.png'
import reduxLogo from '../../Assets/redux.svg'



const Skills = () => {
  return (
    <div className={styles.habilidades}>
      <h1 className={styles.name}>Habilidades</h1>
     <h2 className={styles.presentation}>Estas son las habilidades con las que eh trabajado</h2>
     <div className={styles.box}>
      <div className={styles.container}>
      <img className={styles.img} src={htmlLogo} alt='html'/>
      <p className={styles.description}>HTML</p>
      </div>
     <div className={styles.container}>
      <img className={styles.img} src={cssLogo} alt="css" />
      <p className={styles.description}>CSS</p>
     </div>
     <div className={styles.container}>
      <img className={styles.img} src={jsLogo} alt="javascript"/>
      <p className={styles.description}>JAVASCRIPT</p>
     </div>
     <div className={styles.container}>
      <img className={styles.img} src={tsLogo} alt="typescript" />
      <p className={styles.description}>TYPESCRIPT</p>
     </div>
     <div className={styles.container}>
      <img className={styles.img} src={reactLogo} alt="React" />
      <p className={styles.description}>REACT</p>
     </div>
     <div className={styles.container}>
      <img className={styles.img} src={reduxLogo} alt="Redux" />
      <p className={styles.description}>Redux</p>
     </div>
     <div className={styles.container}>
      <img className={styles.img} src={viteLogo} alt="Vite" />
      <p className={styles.description}>Vite</p>
     </div>
     <div className={styles.container}>
      <img  className={styles.img}src={pstgresqlLogo} alt="PostgreSQL" />
      <p className={styles.description}>PostgreSQL</p>
     </div>
     <div className={styles.container}>
      <img className={styles.img} src={nodeLogo} alt="Node" />
      <p className={styles.description}>Node</p>
      </div>
     </div>
     </div>
  );
};

export default Skills;
