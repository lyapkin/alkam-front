"use client";

import classNames from "classnames";
import Link from "next/link";
import s from "./Footer.module.scss";
export const BASE_URL = process.env.BASE_URL;
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";

export default function Footer({ top }) {
    const pathname = usePathname();
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.footer__inner}>
                    {top ? (
                        <div className={s.footer__top}>
                            <div className={s.footer__items}>
                                <ul className={s.footer__item}>
                                    <li className={s.item__title}>
                                        Каталог товаров
                                    </li>
                                    <li className={s.item__link}>
                                        Аллюминиевые листы
                                    </li>
                                    <li className={s.item__link}>
                                        Листы рифленые
                                    </li>
                                    <li className={s.item__link}>
                                        Аллюминиевая плита
                                    </li>
                                    <li className={s.item__link}>
                                        Аллюминиевые прутки
                                    </li>
                                    <li className={s.item__link}>
                                        Профиль пресс
                                    </li>
                                </ul>
                                <ul className={s.footer__item}>
                                    <li className={s.item__title}>
                                        Наши услуги
                                    </li>
                                    <li className={s.item__link}>
                                        Резка металлопроката
                                    </li>
                                    <li className={s.item__link}>
                                        Термообработка металлопроката
                                    </li>
                                    <li className={s.item__link}>
                                        Браширование поверхности
                                    </li>
                                    <li className={s.item__link}>
                                        Резка металлопроката
                                    </li>
                                    <li className={s.item__link}>
                                        Резка металлопроката
                                    </li>
                                </ul>
                                <ul className={s.footer__item}>
                                    <li className={s.item__title}>
                                        О компании
                                    </li>
                                    <li className={s.item__link}>
                                        Возможности производства
                                    </li>
                                    <li className={s.item__link}>
                                        История компании
                                    </li>
                                    <li className={s.item__link}>
                                        Производство
                                    </li>
                                    <li className={s.item__link}>
                                        Сертификаты
                                    </li>
                                    <li className={s.item__link}>
                                        Резка металлопроката
                                    </li>
                                </ul>
                                <div
                                    className={classNames(
                                        s.footer__item,
                                        s.footer__contacts
                                    )}
                                >
                                    <p className={s.footer__contacts_title}>
                                        Почта
                                    </p>
                                    <a
                                        href="mailto:Plantalkam@mail.ru"
                                        className={s.footer__contacts_email}
                                    >
                                        Plantalkam@mail.ru
                                    </a>
                                    <p className={s.footer__contacts_text}>
                                        Пишите письма, задавайте вопросы <br />{" "}
                                        рады будем ответить вам
                                    </p>
                                    <p
                                        className={classNames(
                                            s.footer__contacts_text,
                                            s.footer__contacts_subtext
                                        )}
                                    >
                                        Для коммерческих предложеиний
                                    </p>
                                    <p
                                        className={classNames(
                                            s.footer__contacts_text,
                                            s.footer__contacts_link
                                        )}
                                    >
                                        <a href="mailto:Alkam-busines.@mail.ru">
                                            Alkam-busines.@mail.ru
                                        </a>
                                    </p>
                                    <a href="mailto:Alkam-busines.@mail.ru">
                                        <button
                                            className={s.footer__contacts_btn}
                                        >
                                            Написать руководителю
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <nav className={s.nav}>
                            <ul className={classNames(s.nav__list, s.nav__list_footer)}>
                                <Link
                                    href="/about"
                                    className={classNames(
                                        s.nav__item,
                                        s.nav__item__arrow
                                    )}
                                >
                                    О компании
                                </Link>
                                <Link
                                    href="/products"
                                    className={classNames(
                                        s.nav__item,
                                        s.nav__item__arrow
                                    )}
                                >
                                    Продукция
                                </Link>
                                <Link
                                    href="/services"
                                    className={classNames(
                                        s.nav__item,
                                        s.nav__item__arrow
                                    )}
                                >
                                    Услуги
                                </Link>
                                <Link
                                    href="/coop"
                                    className={classNames(
                                        s.nav__item,
                                        s.nav__item__arrow
                                    )}
                                >
                                    Сотрудничество
                                </Link>
                                <Link
                                    href="/delivery"
                                    className={classNames(
                                        s.nav__item,
                                        s.nav__item__arrow
                                    )}
                                >
                                    Доставка и оплата
                                </Link>
                                {pathname === "/news" ? (
                                    <ScrollLink
                                        activeClass="active"
                                        to="news"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={1000}
                                        className={s.nav__item}
                                    >
                                        Новости
                                    </ScrollLink>
                                ) : (
                                    <Link
                                        href="/news"
                                        className={classNames(
                                            s.nav__item,
                                            s.nav__item__arrow
                                        )}
                                    >
                                        Новости
                                    </Link>
                                )}
                                <ScrollLink
                                    activeClass="active"
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                    className={classNames(
                                        s.nav__item,
                                        s.nav__item__arrow
                                    )}
                                >
                                    Контакты
                                </ScrollLink>
                            </ul>
                        </nav>
                    )}
                    <div className={s.footer__bottom}>
                        <div className={s.footer__bottom_left}>
                            <Link href="/">
                                <img src="/images/logo-footer.png" alt="" />
                            </Link>
                            <p className={s.footer__bottom_text}>
                                Производство алюминиевых <br /> полуфабрикатов
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.footer__policy}>
                <div className="container">
                    <div className={s.footer__policy_inner}>
                        <p>
                            Все права защищены © 2021. при копировании
                            обязательна ссылка на сайт{" "}
                            <a href={BASE_URL}>alkam-plus.ru</a>
                        </p>
                        <div className={s.footer__policy_links}>
                            <a href="#">Политика конфиденциальности</a>
                            <a href="#">Пользовательское соглашение</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
