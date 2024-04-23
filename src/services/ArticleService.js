export const BASE_URL = process.env.API_URL;

export default class ArticleService {
    static async allArticles() {
        try {
            const response = await fetch(`${BASE_URL}/articles`, {
                next: { revalidate: 60 },
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getArticle(slug) {
        try {
            const response = await fetch(`${BASE_URL}/articles/${slug}`, {
                next: { revalidate: 60 },
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
