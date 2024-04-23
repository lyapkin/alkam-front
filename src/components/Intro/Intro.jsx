"use client";

import { useEffect, useState } from "react";
import ButtonRed from "../ButtonRed/ButtonRed";
import ButtonWhite from "../ButtonWhite/ButtonWhite";
import Header from "../Header/Header";
import Title from "../Title/Title";
import s from "./Intro.module.scss";
import servicesStyle from '../../app/services/page.module.scss'
import Location from "../Location/Loctaion";
import { usePathname } from "next/navigation";
import { Element, Link as ScrollLink } from "react-scroll";

export default function Intro({data, server, image, title, articles, isService, text, isText, children, sendData, paths, buttonText, scrollTo, video, scrollBottom }) {

    let intros = [
        {
            id: 1,
            title: title?.text,
            text: "Наша компания предлагает полный комплекс услуг по резке цветного металлопроката в размер: Правка и резка алюминиевых листов всех сплавов, в том числе на карточки; Резка плит в размер по чертежам, резка прутков; Резка рулонного алюминия и его сплавов на листы в том числе в нестандартный раскрой по ширине и длине.",
            style: title?.style,
            path: 'Резка металлопроката',
            video: video
        },
        {
            id: 2,
            title: "ОКАЗЫВАЕМ КОМПЛЕКС УСЛУГ ПО ТЕРМООБРАБОТКЕ МЕТАЛЛОПРОКАТА",
            text: "Мы предлагаем полный комплекс услуг по термической обработке алюминиевых полуфабрикатов. Наши специалисты готовы выполнить работы любой сложности «под ключ» в рамках серийного изготовления или индивидуального заказа",
            style: {marginTop: 34, maxWidth: 930},
            path: 'Термообработка',
            video: '/videos/services3.mp4'
        },
        {
            id: 3,
            title: "КОМПЛЕКСНАЯ ПОСТАВКА МЕТАЛОПРОКАТА ",
            text: "Мы являемся партнерами ведущих заводов России по выпуску алюминиевого,медного и титанового проката. ",
            style: {marginTop: 34, maxWidth: 930},
            path: 'Термообработка',
            video: '/videos/services4.mp4'
        },
    ]

    const [currentIntro, setCurrentIntro] = useState(intros[0]);

    return (
        <section style={{minHeight: '100vh', backgroundImage: `url(${image})`}} className={s.intro}>
            {!image &&
                <video style={{height: '100vh'}} src={currentIntro.video || "/videos/services2.mp4"} className={"video"} autoPlay
                        muted
                        loop preload="auto">
                <source />
                    Your browser does not support the video tag.
                </video>}
                {!isText && 
                <ScrollLink
                            activeClass="active"
                            to={scrollBottom}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <button className={s.intro__bottom}>
                                <img src="/images/icons/arrow-bottom.png" alt="" />
                        </button>
                        </ScrollLink>
}
                
            <div className="wrapper">
                <Header data={articles} sendData={sendData} />
                <div className="container">
                    <Location paths={isService ? [...paths,  currentIntro.path] : paths} />
                    <Title style={...currentIntro.style}>{currentIntro.title}</Title>  
                    {children}
                    {isText && <p style={{marginTop: 110}} className={servicesStyle.services__text}>
                        {!data ? text : <span dangerouslySetInnerHTML={{ __html: data.description }}></span>}
                    </p>}
                    {!isService && <div className={s.button}>
                        <ScrollLink
                            activeClass="active"
                            to={scrollTo}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <ButtonRed>
                                {buttonText}
                            </ButtonRed>
                        </ScrollLink>
                    </div>}
                    {isService && <p className={ servicesStyle.services__text}>
                        {currentIntro.text}
                    </p>}
                    
                    {isService && (
                        <div className={s.services__buttons}>
                            {currentIntro.id === 1 ? (
                                <ButtonRed
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[0])
                                    }
                                >
                                    Резка металлопроката
                                </ButtonRed>
                            ) : (
                                <ButtonWhite
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[0])
                                    }
                                >
                                    Резка металлопроката
                                </ButtonWhite>
                            )}
                            {currentIntro.id === 2 ? (
                                <ButtonRed
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[1])
                                    }
                                >
                                    Тремоообработка и правка
                                </ButtonRed>
                            ) : (
                                <ButtonWhite
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[1])
                                    }
                                >
                                    Тремоообработка и правка
                                </ButtonWhite>
                            )}
                            {currentIntro.id === 3 ? (
                                <ButtonRed
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[2])
                                    }
                                >
                                    Комплексная поставка металлопроката
                                </ButtonRed>
                            ) : (
                                <ButtonWhite
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[2])
                                    }
                                >
                                    Комплексная поставка металлопроката
                                </ButtonWhite>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Element name="about" />
        </section>
    );
}
