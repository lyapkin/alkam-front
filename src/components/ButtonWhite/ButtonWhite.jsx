import s from "./ButtonWhite.module.scss";

export default function ButtonWhite({ children, style, onClick, className }) {
    return (
        <button style={{ ...style }} className={s.button} onClick={onClick}>
            {children}
        </button>
    );
}
