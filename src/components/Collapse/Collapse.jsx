import React, { useState } from "react";
import arrow from '../../assets/arrow.svg';
import '../Collapse/Collapse.scss';

function Collapse({title, description}) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="collapse">
            <div className="collapse__header">
                <h2 className="collapse__title">{title}</h2>
                <img onClick={() => setIsOpen(!isOpen)}
                     src={arrow}
                     className={isOpen ? "collapse__arrow-up" : "collapse__arrow-down"}
                     alt="arrow" />
            </div>
            <div className={`collapse__description ${
                    isOpen ? "collapse__description-visible" : "collapse__description-hidden"
                }`}>
                {description}
            </div>
        </div>
    )
}
export default Collapse