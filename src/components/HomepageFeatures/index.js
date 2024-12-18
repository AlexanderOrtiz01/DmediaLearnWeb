import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Lista de características con imágenes
const FeatureList = [
  {
    title: 'Fácil de usar',
    img: '/img/Imagen1.png', // Ruta pública de la imagen
    description: (
      <>
        Es sencillo y fácil de
         usar, con una interfaz intuitiva que garantiza una experiencia fluida desde el inicio.
      </>
    ),
  },
  {
    title: 'Enfocado en resultados',
    img: '/img/Imagen2.png', // Ruta pública de la imagen
    description: (
      <>
        Está diseñado para potenciar los resultados de aprendizaje de manera eficiente y efectiva.
      </>
    ),
  },
  {
    title: 'Aprendes divirtiéndote',
    img: '/img/Imagen6.png', // Ruta pública de la imagen
    description: (
      <>
        Aprende mientras te diviertes, diseñado para hacer del aprendizaje una experiencia entretenida y efectiva.
      </>
    ),
  },
];

// Modificar el componente Feature para aceptar 'img'
function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Renderizar la imagen usando 'img' */}
        <img src={img} alt={title} className={styles.featureImg} style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Componente principal
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
