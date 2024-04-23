export const BASE_URL = process.env.API_URL;

export default class ProjectsService {
    static async allProjects() {
        try {
            const response = await fetch(`${BASE_URL}/company/projects/`, {
                next: { revalidate: 60 },
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getProject(id) {
        try {
            const response = await fetch(`${BASE_URL}/company/projects/${id}`, {
                next: { revalidate: 60 },
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
