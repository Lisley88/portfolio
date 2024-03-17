import "../Projets/Projets.scss";
import React from "react";
import { useParams } from "react-router-dom";
import datas from "../../datas/projets.json";
import Error from "../Error";
import Collapse from "../../components/Collapse/Collapse";

function Projets() {
    const { id } = useParams();
    const projetData = datas.find((project) => project.id === id);

    if (!projetData) {
        return <Error />;
    }

    const renderCompetence = () => {
        return projetData.competences.map((competence, index) => (
            <li className="competence__item" key={index}>
                - {competence}
            </li>
        ));
    };

    return (
        <main className="projets">
            <h2 className="projets__titre">{projetData.name}</h2>
            <p className="projets__description">{projetData.description}</p>
            <img
                className="projets__image"
                src={projetData.picture}
                alt={projetData.name}
            />
            <div className="projets__titreDescription">
                <Collapse
                    title={"Compétences acquises"}
                    description={renderCompetence(projetData.competences)}
                />
            </div>
            <div className="projets__links">
                <div>
                    <button>
                        <a href={projetData.lien_repo}> Github </a>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Projets;
