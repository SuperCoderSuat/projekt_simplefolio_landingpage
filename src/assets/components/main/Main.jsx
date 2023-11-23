import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import './Main.css'

const Main = () => {
    return (
        <main className='main'>
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}

export default Main;