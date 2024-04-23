import s from "./page.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Intro from "@/components/Intro/Intro";
import ToolsBlock from "@/components/ToolsBlock/ToolsBlock";
import BlockTitle from "@/components/BlockTitle/BlockTitle";
import ServicesForm from "@/components/ServicesForm/ServicesForm";
import ArticleService from "@/services/ArticleService";
import FormService from "@/services/FormService";
import Supplies from "@/components/Supplies/Supplies";
import ScrollTo from "@/components/ScrollTo/ScrollTo";

export default async function Services() {
    const sendData = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    const sendDataCall = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    return (
        <>
            <Intro
                title={{
                    text: `ОКАЗЫВАЕМ КОМПЛЕКС УСЛУГ ПО РЕЗКЕ МЕТАЛЛОПРОКАТА`,
                    style: { marginTop: 82, maxWidth: 984 },
                    content:
                        "Наша компания предлагает полный комплекс услуг по резке цветного металлопроката в размер: Правка и резка алюминиевых листов всех сплавов, в том числе на карточки; Резка плит в размер по чертежам, резка прутков; Резка рулонного алюминия и его сплавов на листы в том числе в нестандартный раскрой по ширине и длине.",
                }}
                isService={true}
                sendData={sendDataCall}
                paths={["Услуги"]}
                buttonText="Получить ком. пред"
                scrollTo="form"
                scrollBottom="text"
            ></Intro>
            {/* <ToolsBlock /> */}
            <ScrollTo to={"text"} />
            <section className={s.services__info}>
                <div className="container">
                    <div className={s.info__item}>
                        <BlockTitle style={{ color: "#000" }}>
                            УСЛУГИ ПО РЕЗКЕ <br /> МЕТАЛЛОПРОКАТА
                        </BlockTitle>
                        <p className={s.info__item_text}>
                            Наша компания предлагает полный комплекс услуг по
                            резке цветного металлопроката в размер: Правка и
                            резка алюминиевых листов всех сплавов, в том числе
                            на карточки; Резка плит в размер по чертежам, резка
                            прутков; Резка рулонного алюминия и его сплавов на
                            листы в том числе в нестандартный раскрой по ширине
                            и длине.
                        </p>
                    </div>
                    <div className={s.info__item}>
                        <BlockTitle style={{ color: "#000" }}>
                            УСЛУГИ ПО <br /> ТЕРМООБРАБОТКЕ <br />
                            МЕТАЛЛОПРОКАТА
                        </BlockTitle>
                        <p className={s.info__item_text}>
                            Мы предлагаем полный комплекс услуг по термической
                            обработке алюминиевых полуфабрикатов. Наши
                            специалисты готовы выполнить работы любой сложности
                            «под ключ» в рамках серийного изготовления или
                            индивидуального заказа. В нашем распоряжении
                            достаточно мощная техническая база, которая
                            позволяет выполнять любой из видов металлообработки,
                            чтобы изготовить изделие высокого качества в полном
                            соответствии с требованиями технического задания.{" "}
                            <br /> <br />
                            Наши сотрудники – высококлассные специалисты с
                            высшим техническим металлургическим образованием и
                            большим опытом работы на крупных металлургических
                            производствах. Мы знаем, что делаем.
                        </p>
                    </div>
                    <div className={s.info__item}>
                        <BlockTitle style={{ color: "#000" }}>
                            КОМПЛЕКСНАЯ ПОСТАВКА <br /> МЕТАЛЛОПРОКАТА
                        </BlockTitle>
                        <p className={s.info__item_text}>
                            Мы являемся партнерами ведущих заводов России по
                            выпуску алюминиевого,медного и титанового проката. {" "}
                            <br />
                            <br />
                            Занимаем одну из лидирующих позиций в поставках
                            металлопроката. Наши преимущества: более 400 тонн
                            ассортимента, прозрачные цены, надежность и
                            репутация. 
                        </p>
                    </div>
                </div>
            </section>
            <Supplies />
            <ServicesForm sendData={sendData} />
        </>
    );
}
