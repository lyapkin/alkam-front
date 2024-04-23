"use client";

import classNames from "classnames";
import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import { useState } from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import ButtonRed from "../ButtonRed/ButtonRed";
import s from "./ServicesForm.module.scss";

export default function ServicesForm({ sendData }) {
    const [errorTel, setErrorTel] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tel = e.target.number.value
            .split("")
            .filter((el) => parseInt(el));

        if (tel.length < 11) {
            setErrorTel(true);
            return;
        }

        const data = {
            number: `+${tel.join("")}`,
            name: e.target.name.value,
            comment: e.target.comment.value,
        };

        const res = await sendData(data);

        setErrorTel(false);
        setIsSend(true);
    };

    return (
        <section className={s.form}>
            <div className="container">
                <div className={s.form__wrap}>
                    {!isSend ? (
                        <form
                            action="#"
                            method="POST"
                            onSubmit={handleSubmit}
                            className={s.form__main}
                        >
                            <BlockTitle>
                                НЕОБХОДИМЫ УСЛУГИ ПО <br /> РЕЗКЕ ИЛИ
                                ТЕРМООБРАБОТКЕ <br /> МЕТАЛЛОПРОКАТА ?
                            </BlockTitle>
                            <p className={s.form__text}>
                                Звоните, мы выполним любые задачи <br /> в
                                кратчайшие сроки
                            </p>
                            <input
                                className={s.form__input}
                                placeholder="Введите Имя"
                                type="text"
                                name="name"
                                required
                            />
                            <InputMask
                                className={classNames(
                                    s.form__input,
                                    errorTel && s.input__error
                                )}
                                placeholder="Номер, телефона"
                                type="text"
                                name="number"
                                mask="+7\(999)999-99-99"
                                required
                            />
                            <textarea
                                className={classNames(
                                    s.form__input,
                                    s.form__input__area
                                )}
                                placeholder="Ваш комментарий"
                                type="text"
                                name="comment"
                                required
                            />
                            <ButtonRed style={{ width: "100%", maxWidth: 634 }}>
                                Резка металлопроката
                            </ButtonRed>
                        </form>
                    ) : (
                        <p className={s.done}>
                            <img src="/images/icons/done--form.svg" alt="" />
                            Ваша заявка успешно отправлена.
                            <br />В ближайшее время мы свяжемся с вами.
                        </p>
                    )}
                    <div className={s.form__image}>
                        <img src="/images/services-form/img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
