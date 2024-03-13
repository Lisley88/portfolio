import '../Banner/Banner.scss';
import photo from '../../assets/picture.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand} from '@fortawesome/free-solid-svg-icons';

function Banner() {
        return (
            <div className='banner'>
                <div className='banner-box'>
                    <h3 className='msg-banner'>
                    <FontAwesomeIcon icon={faHand} className='icone' /> Bienvenue ! </h3>
                    <h3>Je suis Liaosha</h3>
                    <h3>Développeuse web junior</h3> 
                </div>
                <div className='banner-photo'>
                  <img src={photo} alt='me'></img>
                </div>
                
            </div>
        ) 
    }


export default Banner