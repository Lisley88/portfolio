import "../Banner/Banner.scss";
import photo from "../../assets/picture.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";

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
            </div>
            <div className="banner__photo">
                <img src={photo} alt="me"></img>
            </div>
        </div>
    );
}

export default Banner;
