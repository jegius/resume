import React from "react";
import './infoBlock.css';

export function InfoBlock() {
    return(
        <div className="info-block">
            <div className="block-item">
                <h3 className="first-name">Навыки:</h3>
                <ul className="skill-list">
                    <li className="list-item"><span className="label inter">I</span><b>SQL</b> (MySQL, Postgres)</li>
                    <li className="list-item"><span className="label inter">I</span><b>Java</b> (EE, SE, 1.7+)</li>
                    <li className="list-item"><span className="label inter">I</span><b>Spring Framework</b></li>
                    <li className="list-item"><span className="label inter">I</span><b>Selenium</b></li>
                    <li className="list-item"><span className="label inter">I</span><b>Hibernate</b></li>
                    <li className="list-item"><span className="label low">L</span><b>Javascript</b></li>
                    <li className="list-item"><span className="label low">L</span><b>AngularJS/Angular2</b></li>
                </ul>
            </div>

            <div className="block-item">
                <h3 className="first-name">Языки:</h3>
                <ul className="skill-list">
                    <li className="list-item"><b>Английский</b> (А2)</li>
                </ul>
            </div>

            <div className="block-item">
                <h3 className="first-name">Хобби:</h3>
                <ul className="hobby-list">
                    <li className="list-item-hobby">Видеоигры</li>
                    <li className="list-item-hobby">Настолки</li>
                    <li className="list-item-hobby">Путешествия</li>
                    <li className="list-item-hobby">Животные</li>
                    <li className="list-item-hobby">Чтение</li>
                </ul>
            </div>
        </div>
    )
}