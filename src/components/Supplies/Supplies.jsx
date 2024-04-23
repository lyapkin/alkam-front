"use client";

import { Element } from "react-scroll";
import s from "../../app/services/page.module.scss";
import BlockTitle from "../BlockTitle/BlockTitle";

export default function Supplies() {
    return (
        <>
            {/* <Element name="text" /> */}

            <section className={s.supplies}>
                <div className="container">
                    <div className={s.supplies__wrap}>
                        <div>
                            <BlockTitle>
                                ОПТОВЫЕ ПОСТАВКИ <br /> МЕТАЛЛОПРОКАТА
                            </BlockTitle>
                        </div>
                        <div>
                            <p className={s.supplies__text}>
                                Компания АЛКАМ плюс, кроме продукции
                                собственного изготовления, предлагает
                                сотрудничество в области поставок алюминиевых
                                (медных/бронзовых/латунных) полуфабрикатов
                                производства крупнейших российских
                                металлургических предприятий.
                            </p>
                            <h4 className={s.supplies__title}>
                                НАШИ ПРЕИМУЩЕСТВА
                            </h4>
                            <div className={s.supplies__items}>
                                <div className={s.supplies__item}>
                                    <p className={s.supplies__item_text}>
                                        ЧЕСТНАЯ <br /> ЦЕНА
                                    </p>
                                    <img
                                        className={s.supplies__item_img}
                                        src={"/images/services/i1.png"}
                                        alt=""
                                    />
                                </div>
                                <div className={s.supplies__item}>
                                    <p className={s.supplies__item_text}>
                                        ПРИЕМЛИМЫЕ УСЛОВИЯ ОПЛАТЫ
                                    </p>
                                    <img
                                        className={s.supplies__item_img}
                                        src={"/images/services/i2.png"}
                                        alt=""
                                    />
                                </div>
                                <div className={s.supplies__item}>
                                    <p className={s.supplies__item_text}>
                                        ПОСТАВКИ ИЗ НАЛИЧИЯ
                                    </p>
                                    <img
                                        className={s.supplies__item_img}
                                        src={"/images/services/i3.png"}
                                        alt=""
                                    />
                                </div>
                                <div className={s.supplies__item}>
                                    <p className={s.supplies__item_text}>
                                        ИЗГОТОВЛЕНИЕ ПОД ЗАКАЗ на заводах
                                        партнерах
                                    </p>
                                    <img
                                        className={s.supplies__item_img}
                                        src={"/images/services/i4.png"}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
