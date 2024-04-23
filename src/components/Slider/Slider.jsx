"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s from "./Slider.module.scss";
import { useState } from "react";
import classNames from "classnames";

export default function SliderComponent({
    items = [],
    show = 1,
    responsive,
    infinity,
    children,
    rows,
    onClick,
}) {
    const [activeSlide, setActiveSlide] = useState(0);

    let settings = {
        infinite: infinity || false,
        speed: 500,
        slidesToShow: show || 1,
        slidesToScroll: 1,
        rows: rows || 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: responsive,
        afterChange: (current) => setActiveSlide(current),
    };

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button
                className={classNames(
                    s.right,
                    (activeSlide === items.length - show &&
                        infinity !== true) ||
                        activeSlide === children?.length - 1
                        ? s.disabled
                        : null
                )}
                onClick={onClick}
            >
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
            <button
                className={classNames(
                    s.left,
                    activeSlide === 0 && infinity !== true ? s.disabled : null
                )}
                onClick={onClick}
            >
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

    return (
        <Slider {...settings}>
            {items?.map((item, i) => {
                return (
                    <div
                        className={s.slider__item}
                        style={{ height: 400 }}
                        key={item + i}
                        onClick={onClick}
                    >
                        <img src={item} alt="" />
                    </div>
                );
            })}
            {children}
        </Slider>
    );
}
