import { socialNetworksMain } from "../../helpers";
import { Header } from "../header/Header";

import styles from "./main.module.css";

export const Main = () => {
  return (
    <main className={styles.main__container}>
      <Header />
      <div className={styles.main__content}>
        <section className={styles.main__title_welcome}>
          <p className={styles.main__title1}>
            <span>Hi there,</span> my name is <span>Martin Elias</span>,
          </p>
          <p className={styles.main__title2}>I'm a web developer</p>
        </section>

        <section className={styles.main__contact_me}>
          <div className={styles.main__line_gradient}></div>
          <div className={styles.main__info_contact}>
            <p>Contactame a traves de</p>
            <p>martinsimarra4@gmail.com - 3006830624</p>
          </div>

          <div className={styles.main__info_social_network}>
            {socialNetworksMain.map(({ icon: Icon, linkTo, title }) => (
              <a
                className={styles.main__item_social}
                href={linkTo}
                key={title}
                target="_blank"
              >
                <Icon />
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
