import "../Projets/Projets.scss";
import React from "react";
import { useParams } from "react-router-dom";
import datas from "../../datas/projets.json";
import Error from "../Error";

function Projets() {
    const {id} = useParams();
    const projetData = datas.find(project => project.id === id);
   
    if (!projetData) {
        return <Error />;
    } 

    return (
        <main className="projets" >
            <h2 className="projets-titre">{projetData.name}</h2>
            <h4 className="projets-description">{projetData.description}</h4>
            <img
                className="projets-image"
                src={projetData.picture}
                alt={projetData.name}/>
            <h4 className="projets-competences">{projetData.competences}</h4>
        </main>
    );
}

export default Projets;
