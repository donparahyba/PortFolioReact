import React from 'react';
import styles from "./Projetos.module.css";
import projects from "../../data/projects.json";
import { getImageURL } from '../../utils';

export const Projetos = () => {
  return <section className={styles.container} id="projetos">
    <h2 className={styles.title}>Projetos</h2>
    <div className={styles.projects}>
        {
            projects.map((project, id) => {
                return <div key={id} className={styles.card}><img src={getImageURL(project.imageSrc)} alt={`Ilustração de ${project.title}`} className={styles.image}/>
                <h3 className={styles.cardtitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.skills}>{project.skills.map((skill, id) => {
                    return(<li key={id} className={styles.skill}>{skill}</li>);
                })}
                </ul>
                <div className={styles.links}>
                    <a href={project.demo} className={styles.link}>Github</a>
                </div>
                </div>
            })
        }
    </div>
    </section>
}