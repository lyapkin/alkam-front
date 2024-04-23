import { useState } from "react";
import s from "./PopUp.module.scss";

export default function PopUp({ children, close }) {
    const [open, setOpen] = useState(true);

    return (
        <>
            {open && (
                <div className={s.popup} onClick={close}>
                    {children}
                </div>
            )}
        </>
    );
}
