export const BASE_URL = process.env.API_URL;

export default class ProductService {
    static async getFilters() {
        try {
            const response = await fetch(`${BASE_URL}/products/filters_list`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async products() {
        try {
            const response = await fetch(`${BASE_URL}/products`, {
                next: { revalidate: 60 },
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async productsQueries(params, page = 1) {
        const response = await fetch(
            `${BASE_URL}/products/?materials=${
                params.materials || "all"
            }&alloy=${params.alloys || "all"}&category=${
                params.categories || "all"
            }&page=${typeof page === "undefined" ? 1 : page}`,
            {
                method: "GET",
                revalidate: 60,
            }
        );
        const data = await response.json();
        return data;
    }
}
