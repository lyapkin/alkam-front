import classNames from "classnames";
import s from "./BlockTitle.module.scss";

export default function BlockTitle({ children, style, className }) {
    return (
        <h2 className={classNames(s.title, className,)} style={...style}>
            {children}
        </h2>
    );
}
