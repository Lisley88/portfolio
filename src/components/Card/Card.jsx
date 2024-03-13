import React from 'react';
import { Link } from 'react-router-dom';
import datas from '../../datas/projets.json';
import '../Card/Card.scss';

function Card() {
        return (
            <div className="cards">
                {React.Children.toArray(
                    datas.map((data)=>(
                        <Link to={`/projets/${data.id}`} className="cards-lien">
                            <div className="card">
                                <img src={data.picture} alt={data.name} />
                                <h2>{data.name}</h2>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        )
    }

export default Card