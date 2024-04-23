"use client";

import classNames from "classnames";
import BlockTitle from "../BlockTitle/BlockTitle";
import s from "./Cases.module.scss";
import { motion } from "framer-motion";
import CasesSlider from "./CasesSlider/CasesSlider";
import { Element } from "react-scroll";

export default function Cases() {
    return (
        <section className={s.cases}>
            <Element name="cases" />
            <div className="container">
                <div className="wrapper">
                    {/* <BlockTitle
                        style={{
                            maxWidth: 1063,
                            paddingTop: 100,
                            marginBottom: 100,
                        }}
                    >
                        ООО "АЛКАМ ПЛЮС" - ЭТО СОВРЕМЕННОЕ ПРЕДПРИЯТИЕ ПО
                        ПРОИЗВОДСТВУ АЛЮМИНИЕВЫХ ПОЛУФАБРИКАТОВ
                    </BlockTitle> */}
                    <div className={s.cases__items}>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            viewport={{ once: true }}
                            className={classNames(s.cases__item)}
                        >
                            <h4 className={s.cases__item_title}>
                                С 2002 ГОДА НА РЫНКЕ МЕТАЛЛОПРОКАТА
                            </h4>
                            <img
                                className={s.cases__img}
                                src="/images/i1.png"
                                alt=""
                            />

                            {/* <p className={s.cases__item_text}>
                                "АЛКАМ плюс" успешно осуществляет свою
                                деятельность на рынке изготовления
                                полуфабрикатов из цветных и черных металлов с
                                2002 года.{" "}
                            </p> */}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            viewport={{ once: true }}
                            className={s.cases__item}
                        >
                            <h4 className={s.cases__item_title}>
                                Общая площадь производства 5000 кв.м
                            </h4>
                            <img
                                className={s.cases__img}
                                src="/images/i2.png"
                                alt=""
                            />
                            {/* <p className={s.cases__item_text}>
                                "АЛКАМ плюс" успешно осуществляет свою
                                деятельность на рынке изготовления
                                полуфабрикатов из цветных и черных металлов с
                                2002 года.{" "}
                            </p> */}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 1 }}
                            viewport={{ once: true }}
                            className={s.cases__item}
                        >
                            <h4 className={s.cases__item_title}>
                                Более 2000 тонн металлопродукции в год
                            </h4>
                            <img
                                className={s.cases__img}
                                src="/images/i3.png"
                                alt=""
                            />
                            {/* <p className={s.cases__item_text}>
                                "АЛКАМ плюс" успешно осуществляет свою
                                деятельность на рынке изготовления
                                полуфабрикатов из цветных и черных металлов с
                                2002 года.{" "}
                            </p> */}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 1 }}
                            viewport={{ once: true }}
                            className={s.cases__item}
                        >
                            <h4 className={s.cases__item_title}>
                                Более 200 постоянных заказчиков в России и
                                странах СНГ
                            </h4>
                            <img
                                className={s.cases__img}
                                src="/images/i4.png"
                                alt=""
                            />
                            {/* <p className={s.cases__item_text}>
                                "АЛКАМ плюс" успешно осуществляет свою
                                деятельность на рынке изготовления
                                полуфабрикатов из цветных и черных металлов с
                                2002 года.{" "}
                            </p> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
