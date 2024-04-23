import BlockTitle from "@/components/BlockTitle/BlockTitle";
import ButtonRed from "@/components/ButtonRed/ButtonRed";
import FormSection from "@/components/FormSection/FormSection";
import Header from "@/components/Header/Header";
import ServicesForm from "@/components/ServicesForm/ServicesForm";
import ArticleService from "@/services/ArticleService";
import FormService from "@/services/FormService";
import Link from "next/link";
import s from "./page.module.scss";

export default async function Delivery() {
    const sendDataCall = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    const sendData = async (params) => {
        "use server";
        const data = await FormService.commercial(params);

        return data;
    };

    return (
        <>
            <Header theme={2} sendData={sendDataCall} />
            <div className="container">
                <div className={s.wrap}>
                    <img
                        className={s.img__back}
                        src="/images/delivery/1.png"
                        alt=""
                    />
                    <BlockTitle className={s.title}>
                        Принимаем любые <br />
                        способы оплаты
                    </BlockTitle>
                    <Link href={"delivery"}>
                        <ButtonRed
                            style={{
                                maxWidth: 290,
                                background: "#E8F1F5",
                                color: "#000",
                            }}
                        >
                            Доставка
                        </ButtonRed>
                    </Link>
                    <Link href={"pay"}>
                        <ButtonRed
                            style={{
                                maxWidth: 290,
                            }}
                        >
                            Оплата
                        </ButtonRed>
                    </Link>
                    <p className={s.subtitle}>
                        Оплатить товар можно любым удобным для вас способом:
                    </p>
                    <ul className={s.list}>
                        <li className={s.list__item}>
                            Наличный и безналичный расчет
                        </li>
                        <li className={s.list__item}>Рассрочка</li>
                        <li className={s.list__item}>Расчет на месте</li>
                        <li className={s.list__item}>товарный аккредетив</li>
                        <li className={s.list__item}>
                            Работаем по 223-ФЗ и 44-ФЗ
                        </li>
                        <li className={s.list__item}>
                            Открываем спецсчета в банках
                        </li>
                        <li className={s.list__item}>
                            Отгружаем под банковские гарантии
                        </li>
                        <li className={s.list__item}>Отсрочки платежа</li>
                    </ul>

                    <BlockTitle className={s.content__title}>
                        Принимаем любые способы оплаты
                    </BlockTitle>
                    <p className={s.content__text}>
                        Рыбатекст используется дизайнерами, проектировщиками и
                        фронтендерами, когда нужно быстро заполнить макеты или
                        прототипы содержимым. Это тестовый контент, который не
                        должен нести никакого смысла, лишь показать наличие
                        самого текста или продемонстрировать типографику в деле.{" "}
                        <br />
                        <br /> В своём стремлении повысить качество жизни, они
                        забывают, что убеждённость некоторых оппонентов
                        представляет собой интересный эксперимент проверки
                        прогресса профессионального сообщества. Картельные
                        сговоры не допускают ситуации, при которой действия
                        представителей оппозиции могут быть описаны максимально
                        подробно! Банальные, но неопровержимые выводы, а также
                        многие известные личности лишь добавляют фракционных
                        разногласий и ограничены исключительно образом мышления.
                        Равным образом, курс на социально-ориентированный
                        национальный проект не даёт нам иного выбора, кроме
                        определения поставленных обществом задач.
                    </p>
                </div>
            </div>
            <FormSection sendData={sendData} />
        </>
    );
}
