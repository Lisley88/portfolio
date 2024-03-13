import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";
import Card from "../../components/Card/Card";
import "../Home/home.scss";

function Home() {
    return (
        <main>
            <section>
                <Banner />
            </section>

            <section>
                <Skills />
            </section>

            <section>
                <h2>Projects</h2>
                <Card />
            </section>

            <section>
                <h2>Contact</h2>
            </section>
        </main>
    );
}

export default Home;
