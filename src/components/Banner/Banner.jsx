import '../Banner/Banner.scss';
import photo from '../../assets/logo_ls.jpg'


function Banner() {
        return (
            <div className='banner'>
                <div className='banner-box'>
                    <h3 className='msg-banner'>Bienvenue ! </h3>
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