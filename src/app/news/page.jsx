import Intro from "@/components/Intro/Intro";
import NewsSection from "@/components/NewsSection/NewsSection";
import ArticleService from "@/services/ArticleService";
import FormService from "@/services/FormService";
import s from "./page.module.scss";

export default async function News() {
    const data = await ArticleService.allArticles();

    const sendDataCall = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    return (
        <>
            <Intro
                title={{
                    text: "НОВОСТИ И СТАТЬИ",
                    style: { marginTop: 93, marginBottom: 195 },
                }}
                video="/videos/about.mp4"
                sendData={sendDataCall}
                paths={["Новости"]}
                buttonText={"Новости и статьи"}
                scrollTo="news"
                scrollBottom="news"
            >
                <p className={s.text}>
                    Здесь Вы можете ознакомиться с нашими последними новостями.
                </p>
            </Intro>
            <NewsSection data={data} sliderOn={false} />
        </>
    );
}
