"use client";

import { Element } from "react-scroll";
import BlockTitle from "../BlockTitle/BlockTitle";
import s from "./ContactsSection.module.scss";

export default function ContactsSection() {
    return (
        <section className={s.contacts}>
            <Element name="contacts" />
            <div className={s.wrap}>
                <div className={s.contacts__inner}>
                    <BlockTitle style={{ marginBottom: 34 }}>
                        Контакты
                    </BlockTitle>
                    <div className={s.location}>
                        <div className={s.location__flag}>
                            <img src="/images/contacts/flag.svg" alt="" />
                        </div>
                        <p className={s.text}>
                            Свердловская область, <br /> Каменск-Уральский, ул.
                            Заводская, 9/8 <br /> 56.376044, 61.961292
                        </p>
                    </div>
                    <div className={s.line}></div>
                    <div className={s.contacts__items}>
                        <div className={s.contacts__item}>
                            <p className={s.contacts__left}>Приемная:</p>
                            <a
                                href="tel:+73439399409"
                                className={s.contacts__right}
                            >
                                +7 (3439) 399-409
                            </a>
                        </div>
                        <div className={s.contacts__item}>
                            <p className={s.contacts__left}>Отдел продаж:</p>
                            <a
                                href="tel:+73439399440"
                                className={s.contacts__right}
                            >
                                +7 (3439) 399-440
                            </a>
                        </div>
                        <div className={s.contacts__item}>
                            <p className={s.contacts__left}>
                                Цветные металлы:{" "}
                            </p>
                            <a
                                href="tel:+73439399404"
                                className={s.contacts__right}
                            >
                                +7 (3439) 399-404
                            </a>
                        </div>
                        <div className={s.contacts__item}>
                            <p className={s.contacts__left}>Бухгалтерия:</p>
                            <a
                                href="tel:+73439399448"
                                className={s.contacts__right}
                            >
                                +7 (3439) 399-448
                            </a>
                        </div>
                        <div className={s.contacts__item}>
                            <a
                                href="mailto:plantalkam@mail.ru"
                                className={s.contacts__left}
                            >
                                plantalkam@mail.ru
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.map}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=61.961360%2C56.375972&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MjYwMDM1NzA5EnzQoNC-0YHRgdC40Y8sINCh0LLQtdGA0LTQu9C-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0JrQsNC80LXQvdGB0Lot0KPRgNCw0LvRjNGB0LrQuNC5LCDQl9Cw0LLQvtC00YHQutCw0Y8g0YPQu9C40YbQsCwgOS84IgoNbth3QhX_gGFC&tab=services&z=17.06"
                        frameBorder="none"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
