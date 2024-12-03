import styles from './App.module.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Sobre } from "./components/Sobre/Sobre";
import { Projetos } from "./components/Projetos/Projetos";
import { Contato } from "./components/Contato/Contato";
import { Tecnologias } from "./components/Tecnologias/Tecnologias";

function App() {
  return(
    <div className={styles.App}>
      <Navbar />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;