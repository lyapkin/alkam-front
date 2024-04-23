import classNames from "classnames";
import Link from "next/link";
import s from "../../../components/Header/Header.module.scss";

export default function NavItem({ item, active, setActive }) {
    return (
        <Link
            href={item.href}
            className={classNames(
                s.nav__item,
                s.nav__item__arrow,
                item.id === active ? s.nav__item_active : ""
            )}
            onClick={() => setActive(item.id)}
        >
            {item.title}
        </Link>
    );
}
