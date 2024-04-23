import classNames from "classnames";
import Link from "next/link";
import s from "./Location.module.scss";
export default function Location({ paths, theme }) {
    return (
        <div className={classNames(s.location, theme ? s.location__black : "")}>
            <div className={classNames(s.item)}>
                <Link href="/">
                    <img src="/images/icons/home.svg" alt="" />
                </Link>
            </div>
            {paths.map((path, i) => {
                return (
                    <div className={s.wrap} key={path + i}>
                        <p
                            className={classNames(
                                s.item,
                                s.item__grey,
                                i === 0 ? s.item__white : ""
                            )}
                        >
                            /
                        </p>
                        <p
                            className={classNames(
                                s.item,
                                s.item__grey,
                                i === 0 ? s.item__white : ""
                            )}
                        >
                            {path}
                        </p>
                        {i === path.length && (
                            <p className={classNames(s.item, s.item__grey)}>
                                /
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
