import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";
import Card from "../../components/Card/Card";
import Contact from "../../components/Contact/Contact";
import "../Home/home.scss";

function Home() {
    return (
        <main>
            <section id="home">
                <Banner />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="projects">
                <Card />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </main>
    );
}

export default Home;
