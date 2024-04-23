import classNames from "classnames";
import s from "./page.module.scss";
import ButtonRed from "@/components/ButtonRed/ButtonRed";
import ButtonWhite from "@/components/ButtonWhite/ButtonWhite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ToolsBlock from "@/components/ToolsBlock/ToolsBlock";
import SecureBlock from "@/components/SecureBlock/SecureBlock";
import NewsSection from "@/components/NewsSection/NewsSection";
import FormSection from "@/components/FormSection/FormSection";
import Intro from "@/components/Intro/Intro";
import PointsTabs from "@/components/PointsTabs/PointsTabs";
import ArticleService from "@/services/ArticleService";
import Cases from "@/components/Cases/Cases";
import FormService from "@/services/FormService";
import Companies from "@/components/Сompanies/Сompanies";

export default async function Home() {
    const articles = await ArticleService.allArticles();

    const sendData = async (params) => {
        "use server";
        const data = await FormService.commercial(params);

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
                    text: `ПРОИЗВОДСТВО АЛЮМИНИЕВЫХ ПОЛУФАБРИКАТОВ`,
                    style: { marginTop: 51, maxWidth: 400 },
                }}
                video="/videos/main.mp4"
                articles={articles}
                sendData={sendDataCall}
                paths={["Главная"]}
                buttonText="Получить ком. пред"
                scrollTo="form"
                scrollBottom="cases"
            >
                {/* <div className={s.intro__text}>
                    <div
                        className={classNames(
                            s.intro__text_circle,
                            s.intro__text_circle1
                        )}
                    ></div>
                    <div
                        className={classNames(
                            s.intro__text_circle,
                            s.intro__text_circle2
                        )}
                    ></div>
                    <div
                        className={classNames(
                            s.intro__text_circle,
                            s.intro__text_circle3
                        )}
                    ></div>
                    <p>В любых объёмахс доставкой повсей России и СНГ</p>
                </div> */}
            </Intro>
            <Cases />
            {/* <PointsTabs /> */}
            {/* <Companies /> */}
            {/* <ToolsBlock /> */}
            {/* <SecureBlock /> */}
            {/* <NewsSection data={articles} /> */}
            <FormSection sendData={sendData} />
        </>
    );
}
