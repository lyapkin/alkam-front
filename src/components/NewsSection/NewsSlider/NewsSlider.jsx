"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s from "./NewsSlider.module.scss";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";

export default function NewsSlider({ articles, currentCategory }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [arr, setArr] = useState(articles);

    useEffect(() => {
        setActiveSlide(0);
        setArr(articles);
        sliderRef.slickGoTo(0);
    }, [articles]);

    const stepProgress = 100 / (arr.length - 4);

    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: arr.length <= 4 ? arr.length : 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            { breakpoint: 1000, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
        afterChange: (current) => setActiveSlide(current),
    };

    let widthProgress =
        arr.length <= 4
            ? { width: "100%" }
            : { width: stepProgress * activeSlide + "%" };

    let activeButton =
        arr.length <= 4
            ? s.disabled
            : activeSlide === arr.length - 4
            ? s.disabled
            : null;

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        <>
            <Slider
                {...settings}
                ref={(slider) => {
                    sliderRef = slider;
                }}
            >
                {arr.length > 0 &&
                    arr &&
                    arr.map((article) => {
                        return (
                            <div className={s.slider__item} key={article.id}>
                                <div className={s.slider__image}>
                                    <img
                                        src={`${
                                            process.env.BASE_URL +
                                            article.image_url
                                        }`}
                                        alt=""
                                    />
                                </div>
                                <div className={s.slider__content}>
                                    <h5 className={s.slider__title}>
                                        {article.title}
                                    </h5>
                                    <p className={s.slider__text}>
                                        {article.content_concise}
                                    </p>
                                    <Link
                                        className={s.slider__button}
                                        href={"/news/" + article.slug}
                                    >
                                        <p>Читать подробнее</p>
                                        <div className={s.slider__button_arrow}>
                                            <img
                                                src="/images/news/arrow.png"
                                                alt=""
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
            </Slider>
            {arr.length !== 0 ? (
                <div className={s.bottom}>
                    <div className={s.bottom__wrap}>
                        <div className={s.progress}>
                            <div
                                style={widthProgress}
                                className={s.progress__value}
                            ></div>
                        </div>
                        <div className={s.progress__buttons}>
                            <button
                                className={classNames(
                                    s.left,
                                    activeSlide === 0 ? s.disabled : null
                                )}
                                onClick={previous}
                            >
                                <img
                                    style={{ transform: "rotate(180deg)" }}
                                    src="/images/icons/arrow.svg"
                                    alt=""
                                />
                            </button>
                            <button
                                className={classNames(s.right, activeButton)}
                                onClick={next}
                            >
                                <img src="/images/icons/arrow.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <Link href={"/news"}>
                        <button className={s.button}>Все новости</button>
                    </Link>
                </div>
            ) : (
                <h1>Здесь пока что ничего нет</h1>
            )}
        </>
    );
}
