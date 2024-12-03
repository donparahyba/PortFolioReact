import React from 'react';
import styles from "./Tecnologias.module.css";
import { getImageURL } from '../../utils';

export const Tecnologias = () => {
  return (
    <section className={styles.container} id="tecnologias">
      <h2 className={styles.title}>Tecnologias dominadas</h2>
      <div className={styles.imagens}>
        <div className={styles.item}>
          <img src={getImageURL("skills/html.png")} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className={styles.item}>
          <img src={getImageURL("skills/css.png")} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className={styles.item}>
          <img src={getImageURL("skills/Bootstrap.png")} alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className={styles.item}>
          <img src={getImageURL("skills/javascript.png")} alt="Javascript" />
          <p>Javascript</p>
        </div>
        <div className={styles.item}>
          <img src={getImageURL("skills/node.png")} alt="Node" />
          <p>Node</p>
        </div>
        <div className={styles.item}>
          <img src={getImageURL("skills/react.png")} alt="React" />
          <p>React</p>
        </div>
        <div className={styles.item}>
          <img src={getImageURL("skills/python.png")} alt="Python" />
          <p>Python</p>
        </div>
        <div className={styles.item}>
          <img src={getImageURL("skills/java.png")} alt="Java" />
          <p>Java</p>
        </div>
      </div>
    </section>
  );
};