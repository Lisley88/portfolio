import "../Banner/Banner.scss";
import photo from "../../assets/picture.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Banner() {
    return (
        <div className="banner">
            <div className="banner__box">
                <h1 className="msg__banner">
                    <FontAwesomeIcon
                        icon={faHandSparkles}
                        className="handicon"
                    />
                    Bienvenue !
                </h1>
                <h1>Je suis Liaosha</h1>
                <h1>Développeuse web junior</h1>
                <div className="banner__contact">
                    <a href="https://github.com/Lisley88">
                        <span>Github</span>
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="2xl"
                            className="banner__icon"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/liaoshali/">
                        <span>Linkedin</span>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size="2xl"
                            className="banner__icon"
                        />
                    </a>
                </div>
            </div>
            <div className="banner__photo">
                <img src={photo} alt="me"></img>
            </div>
        </div>
    );
}

export default Banner;
