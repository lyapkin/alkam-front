"use client";

import classNames from "classnames";
import { useState } from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import ButtonRed from "../ButtonRed/ButtonRed";
import ScrollTo from "../ScrollTo/ScrollTo";
import s from "./CoopItems.module.scss";

export default function CoopItems({ data }) {
    const [open, setOpen] = useState(1);

    console.log(open);

    return (
        <div className="container">
            <ScrollTo to={"coop"} />
            <div className={s.buttons}>
                <ButtonRed
                    className={classNames(
                        s.button,
                        open !== 1 ? s.button__active : ""
                    )}
                    onClick={() => setOpen(1)}
                >
                    Металлотрейдеррам
                </ButtonRed>
                <ButtonRed
                    className={classNames(
                        s.button,
                        open !== 2 ? s.button__active : ""
                    )}
                    onClick={() => setOpen(2)}
                >
                    Предприятиям
                </ButtonRed>
            </div>
            <div className={s.content}>
                {open === 1 && (
                    <div
                        className={classNames(s.text)}
                        dangerouslySetInnerHTML={{ __html: data.metaltraders }}
                    ></div>
                )}
                {open === 2 && (
                    <div
                        className={classNames(s.text)}
                        dangerouslySetInnerHTML={{ __html: data.enterprises }}
                    ></div>
                )}
            </div>
        </div>
    );
}
