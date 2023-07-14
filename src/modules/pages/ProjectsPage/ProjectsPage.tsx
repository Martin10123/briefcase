import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { listProjects } from "../../../helpers/listProjects";
import { useReturnPage } from "../../hook/useReturnPage";
import { motion } from "framer-motion";

import styles from "./projectsPage.module.css";

export const ProjectsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { onReturnPage } = useReturnPage();

  useEffect(() => {
    // Función para cambiar la imagen cada 2 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    // Limpieza del temporizador cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className={styles.projects__container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.projects__content}>
        <div className={styles.projects__nav}>
          <BiArrowBack onClick={onReturnPage} />
          <p>My work</p>
        </div>

        <div className="projects__info_my_works">
          <p></p>
        </div>

        <div className={styles.projects__list_projects}>
          {listProjects.map(({ images, name }) => (
            <div className={styles.projects__project} key={name}>
              <h2 className={styles.projects__name}>{name}</h2>

              <figure className={styles.projects__image}>
                <img src={images[currentImageIndex]} alt={name} />
              </figure>

              <p className={styles.projects__descripcion}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus non dolor nobis, atque nesciunt itaque maiores
                incidunt fugit expedita, autem sint corporis voluptatibus sunt
                libero laudantium magni impedit asperiores porro!
              </p>

              <div className={styles.projects__buttons}>
                <button className={styles.projects__view}>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
