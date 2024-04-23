"use client";

import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import CallPopup from "../CallPopup/CallPopup";
import NewsSection from "../NewsSection/NewsSection";
import s from "./Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import MobileItem from "./MobileItem/MobileItem";
import NavItem from "./HeaderTab/NavItem";

export default function Header({ theme = 1, sendData }) {
    const [openPopup, setOpenPopup] = useState(false);
    const pathname = usePathname();

    const [active, setActive] = useState(0);

    const [open, openMenu] = useState(false);

    console.log(pathname);

    const nav = [
        { title: "О компании", href: "/about", id: 0 },
        { title: "Продукция", href: "/products", id: 1 },
        { title: "Услуги", href: "/services", id: 2 },
        { title: "Сотрудничество", href: "/coop", id: 3 },
        { title: "Спецпредложения", href: "/delivery", id: 4 },
        { title: "Новости", href: "/news", id: 5 },
    ];

    return (
        <div className="container">
            {openPopup && (
                <CallPopup
                    sendData={sendData}
                    onClick={() => setOpenPopup(false)}
                />
            )}
            <div className={classNames(s.mobile, !open ? s.mobile__hide : "")}>
                <ul className={s.mobile__list}>
                    <MobileItem
                        href={"products"}
                        title="Продукция"
                    ></MobileItem>
                    <MobileItem href={"services"} title="Услуги"></MobileItem>
                    <MobileItem href={"about"} title="О компании"></MobileItem>
                    <MobileItem href={"coop"} title="Сотрудничество">
                    </MobileItem>
                    <MobileItem
                        href={"delivery"}
                        title="Оплата и доставка"
                    ></MobileItem>
                    <MobileItem href={"news"} title="Новости"></MobileItem>
                    <MobileItem
                        href={""}
                        isScroll={true}
                        title="Контакты"
                        to="contacts"
                        close={() => openMenu(false)}
                    ></MobileItem>
                </ul>
            </div>
            <header
                className={classNames(s.header, theme === 2 && s.header__theme)}
            >
                <div className="container header__container">
                    <div className={s.header__top}>
                        <div className={s.logo}>
                            <div
                                className={classNames(
                                    s.logo__menu_mobile,
                                    theme === 2 ? s.logo__menu_mobile_back : ""
                                )}
                                onClick={() => openMenu(!open)}
                            >
                                <img src="/images/mobile-menu.png" alt="" />
                            </div>
                            <Link className={s.logo__link} href="/">
                                <img
                                    className={s.logo__img}
                                    src="/images/logo.png"
                                    alt=""
                                />
                                <img
                                    className={classNames(s.logo__mobile)}
                                    src="/images/logo-mobile.png"
                                    alt=""
                                />
                            </Link>
                            <p className={s.logo__text}>
                                Производство алюминиевых <br /> полуфабрикатов
                            </p>
                            <div
                                className={s.logo__call_mobile}
                                onClick={() => setOpenPopup(true)}
                            >
                                <img src="/images/mobile-call.svg" alt="" />
                            </div>
                        </div>
                        <p className={s.location}>
                            Свердловская область <br /> г. Каменск - Уральский
                        </p>
                        <div className={s.tel}>
                            <a href="tel:+73439399440">+7(3439) 399-440</a>
                            <p onClick={() => setOpenPopup(!openPopup)}>
                                Заказать звонок
                            </p>
                        </div>
                    </div>
                    <nav className={s.nav}>
                        <ul className={s.nav__list}>
                            {nav.map((item, index) => {
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={classNames(
                                            s.nav__item,
                                            s.nav__item__arrow,
                                            pathname === item.href
                                                ? s.nav__item_active
                                                : ""
                                        )}
                                        onClick={() => setActive(item.id)}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}

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
                </div>
            </header>
        </div>
    );
}
