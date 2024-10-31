import { About } from "./About";
import styles from "./App.module.css";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;