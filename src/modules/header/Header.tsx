import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { logoM } from "../../assets";
import { SideBar } from "../sideBar/SideBar";

import styles from "./header.module.css";

export const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className={styles.header__container}>
      <div className={styles.header__content}>
        <figure className={styles.header__figure__img}>
          <img src={logoM} alt="Logo de la app" />
        </figure>

        <span
          className={styles.header__icon}
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          <HiOutlineMenuAlt3 />
        </span>
      </div>

      {openSideBar && <SideBar setOpenSideBar={setOpenSideBar} />}
    </div>
  );
};
