import classNames from "classnames";
import s from "./ButtonRed.module.scss";

export default function ButtonRed({
    children,
    style,
    onClick,
    isSubmit = false,
    disabled = false,
    className,
}) {
    return (
        <button
            type={isSubmit ? "submit" : ""}
            style={{ ...style }}
            className={classNames(s.button, className)}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
