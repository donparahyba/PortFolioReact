import React from 'react';
import styles from './Sobre.module.css';
import { getImageURL } from '../../utils';

export const Sobre = () => {
  return (
    <section className={styles.container} id="sobre">
        <div className={styles.content}>
            <h1 className={styles.title}>Prazer, sou Andrei!</h1>
            <p className={styles.description}>Sou desenvolvedor com foco em aprofundar meus conhecimentos tanto em desenvolvimento front-end quanto back-end. Busco experiências no mercado para aplicar e expandir minhas habilidades.</p>
            <a href="mailto:andreihudson@proton.me" className={styles.contactBtn}>Contato</a>
        </div>
        <img src={getImageURL("imagem/minhaimagem.png")} alt="Minha Imagem" className={styles.MyImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    )}