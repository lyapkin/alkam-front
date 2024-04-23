import Header from "@/components/Header/Header";
import Location from "@/components/Location/Loctaion";
import ArticleService from "@/services/ArticleService";
import FormService from "@/services/FormService";
import ProjectsService from "@/services/ProjectsService";
import s from "./page.module.scss";

export default async function ProjectArticle({ params: { id } }) {
    const { content } = await ProjectsService.getProject(id);

    const sendDataCall = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    return (
        <div>
            <Header theme={2} sendData={sendDataCall} />
            <div className="container">
                <div
                    style={{ color: "#000", padding: "60px 0" }}
                    className={s.content}
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </div>
        </div>
    );
}
