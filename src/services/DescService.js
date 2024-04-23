export const BASE_URL = process.env.API_URL;

export default class DescService {
    static async description() {
        try {
            const response = await fetch(`${BASE_URL}/company/specialoffer/`, {
                next: { revalidate: 60 },
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
