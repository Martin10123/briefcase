import { useState } from "react";
import {
  BiArrowBack,
  BiBook,
  BiBookOpen,
  BiLogoTypescript,
} from "react-icons/bi";
import { java, javascript, react, typescript } from "../../../assets";
import { FaJava, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

import styles from "./skillsPage.module.css";

export const SkillsPage = () => {
  const [openHiddenLetters, setOpenHiddenLetters] = useState(false);

  const onHiddenLetters = () => {
    setOpenHiddenLetters(!openHiddenLetters);
  };

  const hiddenLetters = openHiddenLetters ? "hidden" : "visible";

  return (
    <section className={styles.skills__container}>
      <div className={styles.skills__content}>
        <div className={styles.skills__nav}>
          <span className={styles.skills__nav_back}>
            <BiArrowBack />
            <p>Skills</p>
          </span>

          {openHiddenLetters ? (
            <BiBook onClick={onHiddenLetters} />
          ) : (
            <BiBookOpen onClick={onHiddenLetters} />
          )}
        </div>

        <div className={styles.skills__content_info}>
          <h1
            className={styles.skills__title}
            style={{ visibility: hiddenLetters }}
          >
            Skills
          </h1>

          <div
            className={styles.skills__description}
            style={{ visibility: hiddenLetters }}
          >
            <p>
              As a student, I've developed proficiency in various programming
              languages, such as React using JavaScript or TypeScript, React
              Native, and Java. I've acquired certifications, including a
              diploma from Acamica and an advanced React course from Udemy.
              Although I do not consider myself an expert, I'm dedicated to
              continuous learning and improving my programming and software
              development skills. I'm eager to embrace new challenges and
              further expand my knowledge in this field.
            </p>
          </div>

          <ul
            className={styles.skills__list_skills}
            style={{ visibility: hiddenLetters }}
          >
            <a
              className={styles.skills__item}
              href="https://es.react.dev/"
              target="_blank"
            >
              <img alt="React" src={react} width="20%" />
              <p>React</p>
            </a>
            <a
              className={styles.skills__item}
              href="https://www.java.com/es/"
              target="_blank"
            >
              <img alt="Java" src={java} width="20%" />
              <p>Java</p>
            </a>
            <a
              className={styles.skills__item}
              href="https://www.typescriptlang.org/"
              target="_blank"
            >
              <img alt="Typescript" src={typescript} width="20%" />
              <p>Typescript</p>
            </a>
            <a
              className={styles.skills__item}
              href="https://developer.mozilla.org/es/docs/Web/JavaScript"
              target="_blank"
            >
              <img alt="Javascript" src={javascript} width="20%" />
              <p>Javascript</p>
            </a>
          </ul>

          <div className={styles.skills__back_screen}>
            <a
              className={styles.skills__item_back}
              href="https://es.react.dev/"
              target="_blank"
            >
              <FaReact
                className={
                  openHiddenLetters ? styles.skills__color_images1 : ""
                }
              />
              <p
                className={
                  openHiddenLetters ? styles.skills__color_letters : ""
                }
              >
                React
              </p>
            </a>
            <a
              className={styles.skills__item_back}
              href="https://www.java.com/es/"
              target="_blank"
            >
              <FaJava
                className={
                  openHiddenLetters ? styles.skills__color_images2 : ""
                }
              />
              <p
                className={
                  openHiddenLetters ? styles.skills__color_letters : ""
                }
              >
                Java
              </p>
            </a>
            <a
              className={styles.skills__item_back}
              href="https://www.typescriptlang.org/"
              target="_blank"
            >
              <BiLogoTypescript
                className={
                  openHiddenLetters ? styles.skills__color_images1 : ""
                }
              />
              <p
                className={
                  openHiddenLetters ? styles.skills__color_letters : ""
                }
              >
                Typescript
              </p>
            </a>
            <a
              className={styles.skills__item_back}
              href="https://developer.mozilla.org/es/docs/Web/JavaScript"
              target="_blank"
            >
              <RiJavascriptFill
                className={
                  openHiddenLetters ? styles.skills__color_images2 : ""
                }
              />
              <p
                className={
                  openHiddenLetters ? styles.skills__color_letters : ""
                }
              >
                Javascript
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
