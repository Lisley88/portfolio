import React from "react";
import "../Skills/Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faSass, faNode, faSquareGit, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-title">
                <h2>Compétences</h2>
            </div>
            <div className="skills-content">
                <ul>
                    <h3>Front-end</h3>

                    <li>
                        HTML5
                        <span>
                            <FontAwesomeIcon icon={faHtml5} className="icone" size="2xl"/>
                        </span>
                    </li>
                    <li>
                        CSS
                        <span>
                            <FontAwesomeIcon
                                icon={faCss3Alt}
                                className="icone"
                                size="2xl"
                            />
                        </span>
                    </li>
                    <li>
                        JavaScript
                        <span>
                            <FontAwesomeIcon icon={faJs} className="icone" size="2xl" />
                        </span>
                    </li>
                    <li>
                        React.Js
                        <span>
                            <FontAwesomeIcon icon={faReact} className="icone"  size="2xl" />
                        </span>
                    </li>
                    <li>
                        Sass
                        <span>
                            <FontAwesomeIcon icon={faSass} className="icone" size="2xl" />
                        </span>
                    </li>
                </ul>

                <ul>
                    <h3>Back-end</h3>

                    <li>
                        NodeJs
                        <span>
                            <FontAwesomeIcon icon={faNode} className="icone" size="2xl"/>
                        </span>
                    </li>
                    <li>
                        MongoDB
                        <span>
                            <FontAwesomeIcon
                                icon={faDatabase}
                                className="icone"
                                size="2xl"
                            />
                        </span>
                    </li>
                </ul>
                <ul>
                    <h3>Les autres</h3>
                    
                    <li>
                        Git
                        <span>
                            <FontAwesomeIcon
                                icon={faSquareGit}
                                className="icone"
                                size="2xl"
                            />
                        </span>
                    </li>
                    <li>
                        Github
                        <span>
                            <FontAwesomeIcon
                                icon={faSquareGithub}
                                className="icone"
                                size="2xl"
                            />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
