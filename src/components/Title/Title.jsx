import s from "./Title.module.scss";

export default function Title({ children, style }) {
    return (
        <h1 className={s.title} style={...style}>
            {children}
        </h1>
    );
}
