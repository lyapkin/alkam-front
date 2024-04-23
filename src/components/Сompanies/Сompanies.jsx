import BlockTitle from "../BlockTitle/BlockTitle";
import s from "./Companies.module.scss";

export default function Companies({style}) {
    return (
        <section className={s.companies} style={...style}>
            <div className="container">
                <BlockTitle style={{ color: "#000", maxWidth: 900 }}>
                    ОСУЩЕСТВЛЯЕМ ПОСТАВКИ МЕТАЛЛОПРОКАТА КРУПНЕЙШИМ
                    ГОСУДАРСТВЕННЫМ КОМПАНИЯМ
                </BlockTitle>
                <div className={s.items}>
                    <div className={s.item}>
                        <img src="/images/companies/c1.png" alt="" />
                    </div>
                    <div className={s.item}>
                        <img src="/images/companies/c2.png" alt="" />
                    </div>
                    <div className={s.item}>
                        <img src="/images/companies/c3.png" alt="" />
                    </div>
                    <div className={s.item}>
                        <img src="/images/companies/c4.png" alt="" />
                    </div>
                    <div className={s.item}>
                        <img src="/images/companies/c5.png" alt="" />
                    </div>
                    <div className={s.item}>
                        <img src="/images/companies/c6.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
