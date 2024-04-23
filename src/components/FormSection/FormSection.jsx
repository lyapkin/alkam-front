"use client";

import classNames from "classnames";
import React, { useState } from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import ButtonRed from "../ButtonRed/ButtonRed";
import s from "./FormSection.module.scss";
import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import { Element } from "react-scroll";

export default function FormSection({ sendData }) {
    const [isSend, setIsSend] = useState(false);
    const [errorTel, setErrorTel] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        const tel = e.target.tel.value.split("").filter((el) => parseInt(el));

        if (tel.length < 11) {
            setErrorTel(true);
            return;
        }

        const data = {
            product_details: e.target.mark.value,
            activity_type: e.target.type.value,
            number: `+${tel.join("")}`,
            name: e.target.name.value,
            company_name: e.target.org.value,
            comment: e.target.comment.value,
        };

        const res = await sendData(data);

        setIsSend(true);
        setErrorTel(false);
    };
    return (
        <section className={s.form__section}>
            <Element name="form" />
            <div className="container">
                <div className={s.form__inner}>
                    <div className={s.form__content}>
                        <BlockTitle style={{ marginBottom: 31, color: "#000" }}>
                            ВАМ НУЖЕН НАДЁЖНЫЙ ПОСТАВЩИК <br /> АЛЛЮМИНИЕВОГО
                            ПРОКАТА ?
                        </BlockTitle>
                        <p className={s.form__text}>
                            Заполните форму и получите персональное <br />{" "}
                            коммерческое предложение
                        </p>
                        {!isSend ? (
                            <form
                                action="#"
                                method="POST"
                                className={s.form}
                                onSubmit={submitHandler}
                            >
                                <input
                                    className={s.input}
                                    placeholder="Марка, размер"
                                    type="text"
                                    name="mark"
                                    required
                                />
                                <input
                                    className={s.input}
                                    placeholder="Вид деятельности"
                                    type="text"
                                    name="type"
                                    required
                                />
                                <InputMask
                                    className={classNames(
                                        s.input,
                                        errorTel && s.input__error
                                    )}
                                    placeholder="Номер, телефона"
                                    type="text"
                                    name="tel"
                                    mask="+7\(999)999-99-99"
                                    required
                                />
                                <input
                                    className={s.input}
                                    placeholder="Контактное лицо"
                                    type="text"
                                    name="name"
                                    required
                                />
                                <input
                                    className={classNames(
                                        s.input,
                                        s.input__long
                                    )}
                                    placeholder="Наименование предприятия или И.П"
                                    type="text"
                                    name="org"
                                    required
                                />
                                <textarea
                                    className={classNames(
                                        s.input,
                                        s.input__long,
                                        s.input__height
                                    )}
                                    placeholder="Комментарий к заказу"
                                    type="text"
                                    name="comment"
                                    required
                                />
                                <ButtonRed
                                    style={{ height: 100, maxWidth: "none" }}
                                    isSubmit={true}
                                >
                                    Получить ком. пред
                                </ButtonRed>
                            </form>
                        ) : (
                            <p className={s.done}>
                                <img
                                    src="/images/icons/done--form.svg"
                                    alt=""
                                />
                                Ваша заявка успешно отправлена.
                                <br />В ближайшее время мы свяжемся с вами.
                            </p>
                        )}
                    </div>
                    <div className={s.form__image}>
                        <img src="/images/form/img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
