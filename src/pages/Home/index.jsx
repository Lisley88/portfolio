import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";
import Card from "../../components/Card/Card";
import Contact from "../../components/Contact/Contact";
import "../Home/home.scss";

function Home() {
    return (
        <main>
            <section>
                <Banner />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <Card />
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <Contact />
            </section>
        </main>
    );
}

export default Home;
