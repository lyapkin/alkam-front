import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import s from "./MobileItem.module.scss";

export default function MobileItem({
    href,
    title,
    children,
    isScroll,
    to,
    close,
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {!isScroll ? (
                <li className={s.item}>
                    <div onClick={() => setOpen(!open)}>
                        <div>
                            <Link
                                className={classNames(
                                    s.item__link,
                                    open ? s.item__red : ""
                                )}
                                href={href}
                            >
                                {title}
                            </Link>
                        </div>
                        <div
                            className={classNames(
                                s.circle,
                                open ? s.circle__active : ""
                            )}
                        >
                            {!open ? (
                                <img src="/images/icons/down-red.png" alt="" />
                            ) : (
                                <img src="/images/icons/up.png" alt="" />
                            )}
                        </div>
                    </div>
                    <div
                        className={classNames(
                            s.line,
                            !open ? s.line__hide : ""
                        )}
                    ></div>
                    <ul
                        className={classNames(s.list, open ? s.list__open : "")}
                    >
                        {children}
                    </ul>
                    <div
                        className={classNames(
                            s.line,
                            s.line__red,
                            !open ? s.line__hide : ""
                        )}
                    ></div>
                </li>
            ) : (
                <li className={s.item__scroll}>
                    <div>
                        <div
                            className={
                                (s.nav__item,
                                s.item__link,
                                open ? s.item__red : "")
                            }
                        >
                            <ScrollLink
                                onClick={close}
                                activeClass="active"
                                to={to}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                {title}
                            </ScrollLink>
                        </div>
                        <div
                            className={classNames(
                                s.circle,
                                open ? s.circle__active : ""
                            )}
                        >
                            {!open ? (
                                <img src="/images/icons/down-red.png" alt="" />
                            ) : (
                                <img src="/images/icons/up.png" alt="" />
                            )}
                        </div>
                    </div>
                    <ul
                        className={classNames(s.list, open ? s.list__open : "")}
                    >
                        {children}
                    </ul>
                </li>
            )}
        </>
    );
}
