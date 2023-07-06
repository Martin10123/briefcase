import { logoM } from "../../assets";
import { menuSideBar, socialNetworks } from "../../helpers";

import styles from "./sideBar.module.css";

interface Props {
  setOpenSideBar: (value: React.SetStateAction<boolean>) => void;
}

export const SideBar = ({ setOpenSideBar }: Props) => {
  return (
    <nav className={styles.sideBar__container}>
      <div className={styles.sideBar__content}>
        <div className={styles.sideBar__nav_logo}>
          <figure className={styles.sideBar__logo}>
            <img
              alt="Logo de la app"
              onClick={() => setOpenSideBar(false)}
              src={logoM}
            />
            <figcaption>Martin Elias</figcaption>
          </figure>
        </div>

        <div className={styles.sideBar__content_menu}>
          <span className={styles.sideBar__title_menu}>
            <h3>MENU</h3>
          </span>

          <ul className={styles.sideBar__list_options}>
            {menuSideBar.map(({ icon: Icon, title }) => (
              <li className={styles.sideBar__item} key={title}>
                <Icon />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.sideBar__content_menu}>
          <span className={styles.sideBar__title_menu}>
            <h3>SOCIAl NETWORKS</h3>
          </span>

          <div className={styles.sideBar__list_social}>
            {socialNetworks.map(({ icon, linkTo, title }) => (
              <a
                className={styles.sideBar__item_social}
                href={linkTo}
                key={title}
                target="_blank"
              >
                <img src={icon} alt="Logo red social" />
                <p>{title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
