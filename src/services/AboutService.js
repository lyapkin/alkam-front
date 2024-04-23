export const BASE_URL = process.env.API_URL;

export default class AboutService {
    static async getInfo() {
        try {
            const response = await fetch(`${BASE_URL}/company/about/1/`, {
                next: { revalidate: 60 },
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
