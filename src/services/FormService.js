export const BASE_URL = process.env.API_URL;

export default class FormService {
    static async commercial(reqData) {
        try {
            const response = await fetch(`${BASE_URL}/requests/commercials/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqData),
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async call(reqData) {
        try {
            const response = await fetch(`${BASE_URL}/requests/calls/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqData),
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
