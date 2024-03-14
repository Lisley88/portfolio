import React from 'react';
import { Link } from 'react-router-dom';
import datas from '../../datas/projets.json';
import '../Card/Card.scss';

function Card() {
        return (
            <div className="cards" >
                {datas.map((data,key)=>(
                        <Link to={`/${data.id}`} className="cards-lien" key={key}>
                            <div className="card"> 
                                <h2>{data.name}</h2>
                                <span></span>
                                <img src={data.picture} alt={data.name} />
                            </div>
                        </Link>
                    ))
                }
            </div>
        )
    }

export default Card