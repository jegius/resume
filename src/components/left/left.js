import React from "react";
import './left.css';
import {Photo} from "./components/photo/photo";
import {InfoBlock} from "./components/info/infoBlock";

export default function Left() {
    return (<div className="left">
        <div className="left-top">
            <Photo />
            <div className="block-item">
                <h3 className="first-name">Роман</h3>
                <h1 className="last-name">Семенчук</h1>
                <span className="location">Тольятти, Россия, 30 лет</span>
                <div className="relocation">Готов к релокации</div>
            </div>
            <div className="job-position">Java Developer</div>
        </div>
        <InfoBlock />
    </div>)
}