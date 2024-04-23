"use client";

import classNames from "classnames";
import { useState } from "react";
import Slider from "react-slick";
import PopUp from "../PopUp/PopUp";
import s from "../Slider/Slider.module.scss";
import style from "./SecureSlider.module.scss";

export default function SecureSlider() {
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button className={classNames(s.right)} onClick={onClick}>
                <img
                    style={{
                        height: "16px !important",
                    }}
                    src="./images/icons/arrow.svg"
                    alt=""
                />
            </button>
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button className={classNames(s.left)} onClick={onClick}>
                <img
                    style={{
                        transform: "rotate(180deg)",
                        height: "16px !important",
                    }}
                    src="./images/icons/arrow.svg"
                    alt=""
                />
            </button>
        );
    }

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [img, setImg] = useState("");

    const handle = (e) => {
        setImg(e.target.getAttribute("src"));
    };

    return (
        <>
            <Slider {...settings}>
                <div className={classNames(s.slider__item, style.item)}>
                    <img
                        onClick={handle}
                        src={"/images/secure/s1.png"}
                        alt=""
                    />
                </div>
                <div className={classNames(s.slider__item, style.item)}>
                    <img
                        src={"/images/secure/s2.png"}
                        onClick={handle}
                        alt=""
                    />
                </div>
                <div className={classNames(s.slider__item, style.item)}>
                    <img
                        src={"/images/secure/s1.png"}
                        onClick={handle}
                        alt=""
                    />
                </div>
                <div className={classNames(s.slider__item, style.item)}>
                    <img
                        src={"/images/secure/s4.png"}
                        onClick={handle}
                        alt=""
                    />
                </div>
                <div className={classNames(s.slider__item, style.item)}>
                    <img
                        src={"/images/secure/s1.png"}
                        onClick={handle}
                        alt=""
                    />
                </div>
                <div className={classNames(s.slider__item, style.item)}>
                    <img
                        src={"/images/secure/s2.png"}
                        onClick={handle}
                        alt=""
                    />
                </div>
            </Slider>
            {img && (
                <PopUp close={() => setImg("")}>
                    <img src={img} alt="" />
                </PopUp>
            )}
        </>
    );
}
