import React from "react";
import './right.css';
import Section from "./components/section/section";

export default function Right() {
    return(<div className="right">
        <Section withMargin>
            <h3 className="section-header">- Обо мне -</h3>
            <p className="article">
                Долгое время я работал в других сферах,пока однажды не попробовал написать свою первую программу.
            </p>
            <p className="article">
                После этого я почувствовал страсть к
                программированию и начал углубляться в эту сферу. Мои труды не прошли даром
                и я без обучения самостоятельно попал в штат компании Netcracker на позицию Test Automation Engineer.
            </p>
            <p className="article">
                Здесь, не смотря на то, что я попал на позицию инженера по автоматизации тестирования
                я получил бесценны опыт написания веб приложений с использованием java, java фреймворков и тестирования
                веб приложений с помощью инструментов тестирования вроде Selenium и Selenide.
            </p>
            <p className="article">
                Так же за это время я получил навыки управления командой,
                так как довольно часто мне поручали руководства разработки небольших
                фич.
            </p>
            <p className="article">
                Я не хочу останавливаться на достигнутом и ищу место в котором смогу более продуктивно развивать свои навыки.
            </p>
        </Section>
        <Section title={'Образование'} withMargin>
            <div className="title">
                <div className="education-image" />
                <h3 className="education-title">
                    Тольяттинский государственный университет
                </h3>
            </div>
            <h4 className="education-sub">
                2017-2019
            </h4>
            <div className="education">
                <span className="degree">Магистр</span>
                (Прикладная математика-информатика)
            </div>
        </Section>
        <Section title={'Опыт'} grey withMargin>
            <div className="title">
                <div className="work-image" />
                <h3 className="work-title">
                    Netcracker
                </h3>
            </div>
            <h4 className="education-sub">
                2017 - по Настоящее время
            </h4>
            <div className="work">
                На работе мне необходимо выполнять самые разные задачи, от поддержки старых версий систем эмуляции
                окружения клиентов, до разработки и поддержки отдельных подсистем.
            </div>
        </Section>
        <Section title={'Контакты'} withMargin>
            <ul className="contacts">
                <li className="contact-item">Telegram - </li>
                <li className="contact-item">Skype - </li>
                <li className="contact-item">Linked IN - </li>
                <li className="contact-item">Mobile phone - </li>
            </ul>
        </Section>
        <Section title={'Рекомендации'} withMargin>
            <ul className="recommendation-list">
                <li className="recommendation">
                    <a href="https://www.linkedin.com/in/ivan-alekseev-a6412117a/" className="recommendation-item">Иван Алексеев</a><b className="company">Yandex</b>
                </li>
            </ul>
        </Section>
    </div>)
}