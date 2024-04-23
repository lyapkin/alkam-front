import s from "./page.module.scss";
import ArticleService from "@/services/ArticleService";
import Header from "@/components/Header/Header";
import FormService from "@/services/FormService";
import ButtonRed from "@/components/ButtonRed/ButtonRed";
import Link from "next/link";

export default async function NewsArticle({ params }) {
    const data = await ArticleService.getArticle(params.slug);

    const sendDataCall = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    return (
        <>
            <Header theme={2} sendData={sendDataCall} />
            <section className={s.wrap}>
                <div className="container">
                    {data.detail ? (
                        <h1 className={s.detail}>{data.detail}</h1>
                    ) : (
                        <>
                            <h1>{data.title}</h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: data.content,
                                }}
                                className={s.content}
                            ></div>
                        </>
                    )}
                    <Link href={"/news#anchor"}>
                        <ButtonRed style={{ marginTop: 60 }}>
                            Вернуться к списку новостей
                        </ButtonRed>
                    </Link>
                </div>
            </section>
        </>
    );
}
