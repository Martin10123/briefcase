import { BiArrowBack } from "react-icons/bi";
import { title2 } from "../../../assets";

import styles from "./aboutMePage.module.css";

export const AboutMePage = () => {
  return (
    <section className={styles.about__container}>
      <div className={styles.about__content}>
        <div className={styles.about__nav}>
          <BiArrowBack />
          <p>About me</p>
        </div>

        <div className={styles.about__content_info_about_me}>
          <div className={styles.about__line_grandient}></div>

          <div className={styles.about__about_me}>
            <h1>Martin ELias</h1>

            <div className={styles.about__content_bio}>
              <p className={styles.about__bio}>
                Hi! I'm name is Martin Simarra, and I'm passionate about web
                development and creating intuitive, user-friendly experiences.{" "}
                <span>
                  I'm currently studying software development at Tecnológico
                  Comfenalco
                </span>
                , after completing a web development course with React at
                Acamica.
              </p>

              <br />

              <p className={styles.about__bio}>
                I'm excited about future opportunities in web development and
                look forward to contributing creative and effective solutions.
                I'm always open to new challenges and learning experiences. Feel
                free to reach out and explore how we can work together!
              </p>

              <figure className={styles.about__bio_img}>
                <img alt="Imagen de un programador" src={title2} />
              </figure>
            </div>
          </div>

          <div className={styles.about__line_grandient2}></div>
        </div>
      </div>
    </section>
  );
};
