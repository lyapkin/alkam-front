"use client";

import BlockTitle from "../BlockTitle/BlockTitle";
import s from "./SecureBlock.module.scss";
import SliderComponent from "../Slider/Slider";
import { useRef, useState } from "react";
import SecureSlider from "../SecureSlider/SecureSlider";
import PopUp from "../PopUp/PopUp";

export default function SecureBlock() {
    const [open, setOpen] = useState(false);

    return (
        <section className={s.secure}>
            <div className="container">
                <div className={s.secure__top}>
                    <BlockTitle style={{ maxWidth: 872 }}>
                        «АЛКАМ ПЛЮС» — НАДЕЖНЫЙ ПОСТАВЩИК АЛЮМИНИЕВОГО ПРОКАТА С
                        2002 ГОДА
                    </BlockTitle>
                    <div className={s.ser}>
                        <img
                            src="/images/secure/s3.png"
                            onClick={() => setOpen(true)}
                            alt=""
                        />
                    </div>
                    {open && (
                        <PopUp close={() => setOpen(false)}>
                            <img src="/images/secure/f1.png" alt="" />
                        </PopUp>
                    )}
                    <p className={s.secure__top_info}>
                        «АЛКАМ ПЛЮС» ИМЕЕТ СОБСТВЕННЫЙ ЗАРЕГИСТРИРОВАННЫЙ
                        ТОВАРНЫЙ ЗНАК
                    </p>
                </div>
                <p className={s.secure__text}>
                    Cоответствует государственным <br /> стандартам ГОСТ, ТУ и
                    ОСТ
                </p>
                <div className={s.secure__slider}>
                    <SecureSlider />
                </div>
            </div>
        </section>
    );
}
