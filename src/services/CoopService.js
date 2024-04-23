export const BASE_URL = process.env.API_URL;

export default class CoopService {
    static async cooperation() {
        try {
            const response = await fetch(`${BASE_URL}/company/cooperation/1/`, {
                next: { revalidate: 60 },
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
