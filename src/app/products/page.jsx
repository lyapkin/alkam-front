import BlockTitle from "@/components/BlockTitle/BlockTitle";
import ButtonRed from "@/components/ButtonRed/ButtonRed";
import ContactsSection from "@/components/ContactsSection/ContactsSection";
import Footer from "@/components/Footer/Footer";
import FormSection from "@/components/FormSection/FormSection";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Products from "@/components/Products/Products";
import Supplies from "@/components/Supplies/Supplies";
import ArticleService from "@/services/ArticleService";
import FormService from "@/services/FormService";
import ProductService from "@/services/ProductService";
import s from "./page.module.scss";

export default async function ProductsPage({ searchParams }) {
    const filtersList = await ProductService.getFilters();

    const products = await ProductService.productsQueries(searchParams);

    async function filtredProducts(params, page) {
        "use server";

        return await ProductService.productsQueries(params, page);
    }

    const sendData = async (params) => {
        "use server";
        const data = await FormService.commercial(params);

        return data;
    };

    const sendDataCall = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    return (
        <>
            <Intro
                title={{
                    text: `ПРОДУКЦИЯ`,
                    style: { marginTop: 100, maxWidth: 400 },
                }}
                video="/videos/main.mp4"
                sendData={sendDataCall}
                paths={["Продукция"]}
                text={
                    "В настоящее время основное направление деятельности предприятия - это развитие и совершенствование технологических процессов изготовления полуфабрикатов из AL и его сплавов"
                }
                buttonText="Перейти к списку продукции"
                scrollTo="products"
                isText={true}
            ></Intro>
            <div style={{marginTop: 150}} className="container">
                <Products
                    filtredProducts={filtredProducts}
                    productsList={products}
                    filtersList={filtersList}
                    searchParams={searchParams}
                />
            </div>
            {/* <section className={s.supplies}>
                <div className="container">
                    <div className={s.supplies__wrap}>
                        <BlockTitle>
                            ОПТОВЫЕ ПОСТАВКИ <br /> МЕТАЛЛОПРОКАТА
                        </BlockTitle>
                        <p className={s.supplies__text}>
                            Компания АЛКАМ плюс, кроме продукции собственного
                            изготовления, предлагает сотрудничество в области
                            поставок алюминиевых (медных/бронзовых/латунных)
                            полуфабрикатов производства крупнейших российских
                            металлургических предприятий.
                            <br />
                            <br />
                            Наши преимущества:
                            <br />
                            <br />
                            - ЧЕСТНАЯ ЦЕНА
                            <br />
                            - ПРИЕМЛЕМЫЕ УСЛОВИЯ ОПЛАТЫ
                            <br />
                            - ПОСТАВКИ ИЗ НАЛИЧИЯ
                            <br />- БЫСТРОЕ ИЗГОТОВЛЕНИЕ ПОД ЗАКАЗ на
                            заводах-партнерах
                        </p>
                    </div>
                </div>
            </section> */}
            <Supplies />
            <FormSection sendData={sendData} />
        </>
    );
}
