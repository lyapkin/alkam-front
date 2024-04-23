import BlockTitle from "@/components/BlockTitle/BlockTitle";
import ButtonRed from "@/components/ButtonRed/ButtonRed";
import FormSection from "@/components/FormSection/FormSection";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Location from "@/components/Location/Loctaion";
import ScrollTo from "@/components/ScrollTo/ScrollTo";
import ServicesForm from "@/components/ServicesForm/ServicesForm";
import ArticleService from "@/services/ArticleService";
import DescService from "@/services/DescService";
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

    const descData = await DescService.description();

    return (
        <>
            <Intro
                title={{
                    text: `Спецпредложения`,
                    style: { marginTop: 100, maxWidth: 400 },
                }}
                sendData={sendDataCall}
                paths={["Спецпредложения"]}
                server={true}
                buttonText="Подробнее"
                scrollTo="spec"
                isText={true}
                image="/images/spec.png"
                data={descData.description}
            ></Intro>
            <div className="container">
                <ScrollTo to="spec" />
                {/* <div className={s.wrap}>
                    <img
                        className={s.img__back}
                        src="/images/delivery/car.png"
                        alt=""
                    />
                    <BlockTitle className={s.title}>
                        Обеспечиваем доставку <br /> авто и ж/д способом
                    </BlockTitle>
                    <Link href={"delivery"}>
                        <ButtonRed
                            style={{
                                maxWidth: 290,
                            }}
                        >
                            Доставка
                        </ButtonRed>
                    </Link>
                    <Link href={"pay"}>
                        <ButtonRed
                            style={{
                                maxWidth: 290,
                                background: "#E8F1F5",
                                color: "#000",
                            }}
                        >
                            Оплата
                        </ButtonRed>
                    </Link>
                    <p className={s.text}>
                        Доставим товар в любую точку России и страну снг.
                        Отработанная годами логистика позволяет оптимизировать
                        расходы.
                    </p>
                    <img
                        className={s.map}
                        src="/images/delivery/map.png"
                        alt=""
                    />
                    <div className={s.items}>
                        <div className={s.item}>
                            <div className={s.item__number}>01</div>
                            <h4 className={s.item__title}>
                                Доставляем ж/д <br /> транспортом
                            </h4>
                            <img
                                className={s.item__img}
                                src="/images/delivery/i1.png"
                                alt=""
                            />
                            <div className={s.item__line}></div>
                            <p className={s.item__text}>
                                Сайт рыбатекст поможет дизайнеру, верстальщику,
                                вебмастеру сгенерировать несколько абзацев более
                                менее осмысленного текста рыбы на русском языке,
                                а начинающему оратору отточить навык публичных
                                выступлений в домашних условиях. При создании
                                генератора мы использовали
                            </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.item__number}>02</div>
                            <h4 className={s.item__title}>
                                Автотранспортом <br />
                                <br />
                            </h4>
                            <img
                                className={s.item__img}
                                src="/images/delivery/i2.png"
                                alt=""
                            />
                            <div className={s.item__line}></div>
                            <p className={s.item__text}>
                                Сайт рыбатекст поможет дизайнеру, верстальщику,
                                вебмастеру сгенерировать несколько абзацев более
                                менее осмысленного текста рыбы на русском языке,
                                а начинающему оратору отточить навык публичных
                                выступлений в домашних условиях. При создании
                                генератора мы использовали
                            </p>
                        </div>
                    </div> */}
                <div className={s.wrap}>
                    {descData.offers.map((item) => {
                        return (
                            <div
                                dangerouslySetInnerHTML={{ __html: item.text }}
                                key={item.id}
                                className={s.content}
                            ></div>
                        );
                    })}
                </div>
                <FormSection sendData={sendData} />
            </div>
        </>
    );
}
