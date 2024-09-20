import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageURL  } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfólio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen ? getImageURL("nav/closeIcon.png") : getImageURL("nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li><a href="#sobre">Sobre Mim</a></li>
                <li><a href="#tecnologias">Tecnologias</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contatos">Contatos</a></li>
            </ul>
        </div>
    </nav>;
}