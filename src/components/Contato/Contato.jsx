import React from "react";
import styles from "./Contato.module.css";
import { getImageURL } from "../../utils";

export const Contato = () => {
  return (
    <footer id="contatos" className={styles.container}>
      <div className={styles.text}>
        <h2>Contatos</h2>
        <p>Envie uma mensagem!</p>
      </div>
      <ul className={styles.links}>
      <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/donparahyba">github.com/donparahyba</a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:andreihudson@proton.me">andreihudson@proton.me</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/andrei-hudson">linkedin.com/andrei-hudson</a>
        </li>
      </ul>
    </footer>
  );
};
