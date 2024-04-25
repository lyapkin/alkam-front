import BlockTitle from "@/components/BlockTitle/BlockTitle";
import Desc from "@/components/Desc/Desc";
import Intro from "@/components/Intro/Intro";
import ScrollTo from "@/components/ScrollTo/ScrollTo";
import SecureBlock from "@/components/SecureBlock/SecureBlock";
import SliderComponent from "@/components/Slider/Slider";
import Companies from "@/components/Сompanies/Сompanies";
import FormService from "@/services/FormService";
import s from "./page.module.scss";
import AboutService from "@/services/AboutService";

export default async function About() {
    const sendDataCall = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    const slider1 = await AboutService.getSlider1()
    const slider2 = await AboutService.getSlider2()
    console.log(slider1)

    return (
        <>
            <Intro
                title={{
                    text: "«АЛКАМ ПЛЮС»  — НАДЕЖНЫЙ ПОСТАВЩИК МЕТАЛЛУРГИЧЕСКОЙ ПРОДУКЦИИ С 2002 ГОДА",
                    style: { maxWidth: 1130, marginTop: 77 },
                }}
                video="/videos/about.mp4"
                sendData={sendDataCall}
                paths={["О компании"]}
                buttonText="Подробнее о компании"
                scrollTo="about"
                scrollBottom="about"
            >
                {/* <p className={s.about__text}>
                    "АЛКАМ плюс" успешно осуществляет свою деятельность на рынке
                    изготовления полуфабрикатов из цветных и черных металлов с
                    2002 года.
                </p> */}
            </Intro>
            <ScrollTo to={"about"} />
            <section className={s.about__info}>
                {/* <div
                        className={s.content}
                        dangerouslySetInnerHTML={{
                            __html:
                                aboutInfo.text || "<p>Пока что ничего нет</p>",
                        }}
                    ></div> */}
                <div className={s.content}>
                    <div className="container">
                        <p className={s.content__text}>
                            Наше предприятие является производителем
                            полуфабрикатов из алюминиевых сплавов с огромным
                            опытом, высококвалифицированными специалистами,
                            сертифицировано в соответствии c системой менеджмента
                            качества.
                        </p>
                        <h5 className={s.content__title}>
                            На площади 5000 м.кв размещены следующие цехи и
                            участки:
                        </h5>
                        <div className={s.content__items}>
                            <div className={s.content__item}>
                                <div className={s.content__left}>
                                    <img src="/images/about/w1.png" alt="" />
                                </div>
                                <p>
                                    Цех термообработки и окончательной отделки
                                    листов и плит;
                                </p>
                            </div>
                            <div className={s.content__item}>
                                <div className={s.content__left}>
                                    <img src="/images/about/w2.png" alt="" />
                                </div>
                                <p>
                                    Участок линий поперечной резки лент (Линия
                                    1, Линия 2);
                                </p>
                            </div>
                            <div className={s.content__item}>
                                <div className={s.content__left}>
                                    <img src="/images/about/w3.png" alt="" />
                                </div>
                                <p>
                                    Участок механической обработки
                                    полуфабрикатов;
                                </p>
                            </div>
                            <div className={s.content__item}>
                                <div className={s.content__left}>
                                    <img src="/images/about/w4.png" alt="" />
                                </div>
                                <p>Участок упаковки продукции;</p>
                            </div>
                            <div className={s.content__item}>
                                <div className={s.content__left}>
                                    <img src="/images/about/w5.png" alt="" />
                                </div>
                                <p>Лаборатория;</p>
                            </div>
                            <div className={s.content__item}>
                                <div className={s.content__left}>
                                    <img src="/images/about/w6.png" alt="" />
                                </div>
                                <p>
                                    Закрытые склады. Два склада готовой
                                    продукции, один склад полуфабрикатов;
                                </p>
                            </div>
                            <div className={s.content__item}>
                                <div className={s.content__left}>
                                    <img src="/images/about/w7.png" alt="" />
                                </div>
                                <p>Административные помещения;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                {/* <BlockTitle
                    style={{
                        marginTop: 85,
                        maxWidth: 1110,
                        color: "#000",
                    }}
                    className={s.about_title}
                >
                    НА ПРОИЗВОДСТВЕННОЙ ПЛОЩАДКЕ ООО «АЛКАМ ПЛЮС» РАЗМЕЩАЕТСЯ
                    СЛЕДУЮЩЕЕ ОБОРУДОВАНИЕ:
                </BlockTitle> */}
                <div className={s.slider}>
                    <SliderComponent
                        items={[
                            ...slider1.map(slide => slide.img)
                        ]}
                        show={3}
                        responsive={[
                            {
                                breakpoint: 900,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    initialSlide: 2,
                                },
                            },
                            {
                                breakpoint: 680,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                },
                            },
                        ]}
                    ></SliderComponent>
                </div>
                <div className={s.about__items}>
                    <div className={s.about__item}>
                        <img
                            className={s.about__img}
                            src="/images/about/img1.png"
                            alt=""
                        />
                        <h5 className={s.about__item_title}>
                            Компания аккредитована <br /> на тендерных площадках
                        </h5>
                        <p className={s.about__item_text}>
                            Мы исполняем контракты в соответствии с федеральными
                            законами №44-ФЗ №223-ФЗ №275-ФЗ
                        </p>
                    </div>
                    <div className={s.about__item}>
                        <img
                            src="/images/about/img2.png"
                            className={`${s.about__img} ${s.about__img2}`}
                            alt=""
                        />
                        <h5 className={s.about__item_title}>
                            Партнеры по РФ более <br /> 200 предприятий
                        </h5>
                        <p className={s.about__item_text}>
                            Мы имеем партнерские отношения с более 200
                            предприятиями на територии РФ и СНГ
                        </p>
                    </div>
                    <div className={s.about__item}>
                        <img
                            src="/images/about/img3.png"
                            className={`${s.about__img} ${s.about__img2}`}
                            alt=""
                        />
                        <h5 className={s.about__item_title}>Работаем с ГОЗ</h5>
                        <p className={s.about__item_text}>
                            Компания имеет многолетний опыт поставок в рамках
                            гособоронзаказов
                        </p>
                    </div>
                </div>
            </div>
            <Desc pics={slider2.map(slide => slide.img)} />
            <Companies style={{ marginTop: 40 }} />
            <SecureBlock />
            {/* <ToolsBlock /> */}
            {/* <section className={s.projects}>
                <div className="container">
                    <BlockTitle style={{ marginBottom: 47 }}>
                        НАШИ ПРОЕКТЫ ПО ПОСТАВКЕ АЛЮМИНИЕВОЙ ПРОДУКЦИИ
                    </BlockTitle>
                    {projects.map(({ preview_image, preview, id }) => {
                        return (
                            <div className={s.project} key={preview_image + id}>
                                <div className={s.project__img}>
                                    <img src={preview_image} alt="" />
                                </div>
                                <div className={s.project__content}>
                                    <p className={s.project__content_text}>
                                        {preview}
                                    </p>
                                    <Link href={`about/${id}`}>
                                        <ButtonRed>Читать подробнее</ButtonRed>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section> */}
        </>
    );
}
