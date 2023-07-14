import { AiOutlineEdit } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail, MdSubject } from "react-icons/md";
import { socialNetworksMain } from "../../../helpers";
import { useReturnPage } from "../../hook/useReturnPage";
import { motion } from "framer-motion";

import styles from "./contactPage.module.css";

export const ContactPage = () => {
  const { onReturnPage } = useReturnPage();

  return (
    <motion.section
      className={styles.contact__container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.contact__content}>
        <div className={styles.contact__nav}>
          <BiArrowBack onClick={onReturnPage} />
          <p>Contact</p>
        </div>

        <div className={styles.contact__welcome}>
          <h1>Contact me</h1>

          <ul className={styles.contact__list_contacts}>
            <li className={styles.contact__item}>
              <IoLocationSharp />
              <p>Colombia - Cartagena</p>
            </li>
            <li className={styles.contact__item}>
              <BsTelephoneFill />
              <p>+57 300 - 683 - 0624</p>
            </li>
            <li className={styles.contact__item}>
              <MdAlternateEmail />
              <p>martinsimarra4@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className={styles.contact__form}>
          <div className={styles.contact__content_input}>
            <AiOutlineEdit />
            <input
              type="text"
              className={styles.contact__input}
              placeholder="Name..."
            />
          </div>

          <div className={styles.contact__content_input}>
            <MdAlternateEmail />
            <input
              type="text"
              className={styles.contact__input}
              placeholder="Email..."
            />
          </div>

          <div className={styles.contact__content_input}>
            <MdSubject />
            <input
              type="text"
              className={styles.contact__input}
              placeholder="Subject..."
            />
          </div>

          <div className={styles.contact__content_textarea}>
            <textarea
              className={styles.contact__textarea}
              placeholder="Message..."
            />
          </div>

          <div className={styles.contact__content_button}>
            <button className={styles.contact__btn}>Send message</button>
          </div>
        </div>

        <div className={styles.contact__content_social_networks}>
          <p className={styles.contact__title}>Redes sociales</p>

          <div className={styles.contact__list_social_network}>
            {socialNetworksMain.map(({ icon: Icon, linkTo, title }) => (
              <a href={linkTo} key={title} target="_blank">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
