import { useState } from "react";
import { BiArrowBack, BiBook, BiBookOpen } from "react-icons/bi";
import { listSkills } from "../../../helpers";
import { useReturnPage } from "../../hook/useReturnPage";
import { motion } from "framer-motion";

import styles from "./skillsPage.module.css";

export const SkillsPage = () => {
  const [openHiddenLetters, setOpenHiddenLetters] = useState(false);
  const { onReturnPage } = useReturnPage();

  const onHiddenLetters = () => {
    setOpenHiddenLetters(!openHiddenLetters);
  };

  return (
    <motion.section
      className={styles.skills__container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.skills__content}>
        <div className={styles.skills__nav}>
          <span className={styles.skills__nav_back}>
            <BiArrowBack onClick={onReturnPage} />
            <p>Skills</p>
          </span>

          {openHiddenLetters ? (
            <BiBook onClick={onHiddenLetters} />
          ) : (
            <BiBookOpen onClick={onHiddenLetters} />
          )}
        </div>

        <div
          className={`${styles.skills__content_info} ${
            openHiddenLetters ? styles.skills__hidden_elements : ""
          }`}
        >
          <h1 className={styles.skills__title}>Skills</h1>

          <div className={styles.skills__description}>
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

          <ul className={styles.skills__list_skills}>
            {listSkills.map((skill) => (
              <a
                className={styles.skills__item}
                href={skill.linkTo}
                target="_blank"
                key={skill.name}
              >
                <p>{skill.name}</p>
                <img alt={skill.name} src={skill.image} />
              </a>
            ))}
          </ul>
        </div>

        <div className={styles.skills__back_screen}>
          {listSkills.map(({ name, icon: Icon }) => (
            <div className={styles.skills__item_back} key={name}>
              <Icon />
              <p
                style={{ visibility: openHiddenLetters ? "visible" : "hidden" }}
              >
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
