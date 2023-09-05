import React from 'react';
import styles from './Work.module.css'
import image01 from '../../Assets/Captura(99).png';
import image03 from '../../Assets/Captura(101).png';
import image04 from '../../Assets/Captura(102).png';
import image05 from '../../Assets/Captura(103).png';
import image06 from '../../Assets/Captura(104).png';
import image07 from '../../Assets/Captura(105).png';
import image08 from '../../Assets/Captura(106).png';
import imageDog from '../../Assets/Captura(108).png';
import logoGoogle from '../../Assets/Google.webp'
import logoGithub from '../../Assets/github.svg.png'


const Work = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.name}>Proyectos</h1>
      <h2 className={styles.presentation}>Mira algunos de mis proyectos más recientes</h2>
      <h3 className={styles.title}>Aplicacion CraftBerr</h3>
      <div className={styles.boxContent}>
      <div className={styles.galery}>
      <img src={image01} alt="" />
      <img src={image03} alt="" />
      <img src={image04} alt="" />
      <img src={image05} alt="" />
      <img src={image06} alt="" />
      <img src={image07} alt="" />
      <img src={image08} alt="" />
      </div>
      <p className={styles.text}>
      Esta aplicación tiene como propósito convertirse en un completo e-commerce que ofrece a sus usuarios la flexibilidad de elegir entre dos roles principales: 
      vendedor o comprador. Los vendedores, que pueden ser empresas productoras o individuos, tienen la oportunidad de exhibir y vender sus productos de manera eficiente y cómoda. 
      Por otro lado, los usuarios compradores disfrutan de la posibilidad de explorar una amplia gama de productos y realizar compras de sus artículos favoritos de manera conveniente.
       La plataforma busca brindar una experiencia fluida y satisfactoria, fomentando así la interacción y el intercambio comercial entre vendedores y compradores.
      </p>
      </div>
      <div className={styles.galeryLogo}>
      <a href="https://craftbeer-team.netlify.app" target="_blank">
  <img className={styles.logo} src={logoGoogle} alt="Logo de Google" />
</a>
<a href="https://github.com/OctavioLavarello/CraftBeer.git" target="_blank">
  <img className={styles.logo} src={logoGithub} alt="Logo de GitHub" />
</a>
      </div>
  <h3 className={styles.title}> Aplicación de Perros</h3>
  <div className={styles.imageAndText}>
    <img className={styles.galeryDog} src={imageDog} alt="Imagen de Perro" />
    <p className={styles.text}>
    Una SPA que utiliza datos de una API externa para mostrar información detallada y general de más de 100 razas de perros. 
    Ofrece funciones de búsqueda eficiente por nombre, filtrado y ordenamiento combinado,
     y la capacidad de crear nuevas razas a través de un formulario controlado.
    </p>
</div>
    <div className={styles.galeryLogo}>
<a href="https://github.com/agustinrosa22/proyectoDogs.git" target="_blank">
  <img className={styles.logo} src={logoGithub} alt="Logo de GitHub" />
</a>
      </div>
    </div>
  );
};

export default Work;