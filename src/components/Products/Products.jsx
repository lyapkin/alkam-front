"use client";

import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import BlockTitle from "../BlockTitle/BlockTitle";
import ButtonRed from "../ButtonRed/ButtonRed";
import s from "./Products.module.scss";

export default function Products({
    filtersList,
    productsList,
    filtredProducts,
    searchParams,
}) {
    const [products, setProducts] = useState(productsList);
    const [query, setQuery] = useState(searchParams);
    let [page, setPage] = useState(searchParams.page || 1);

    const filtredProductsHandler = async (pageP = page) => {
        const res = await filtredProducts(query, pageP);

        setProducts(res);
    };

    useEffect(() => {
        filtredProductsHandler();
    }, [page]);

    const selectChangeHandler = (e, type) => {
        setQuery({ ...query, [type]: e.target.value });
    };

    const queryHref = `/products?alloys=${query?.alloys || "all"}&categories=${
        query?.categories || "all"
    }&materials=${query?.materials || "all"}&page=${1}`;

    const count = Math.floor(products?.count / 10);

    return (
        <>
            <Element name="products" />
            <div className={s.products}>
                <div className={s.products__scroll}>
                    <ul className={s.products__info}>
                        <li>Материал</li>
                        <li>Тип продукции</li>
                        <li>Марка сплава</li>
                    </ul>

                    <div className={s.products__search}>
                        <div className={s.search__item}>
                            <select
                                onChange={(e) =>
                                    selectChangeHandler(e, "materials")
                                }
                                value={query.materials}
                            >
                                <option value="all">Все</option>
                                {filtersList.materials.map((category) => {
                                    return (
                                        <option
                                            value={category.slug}
                                            key={category.name}
                                        >
                                            {category.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className={s.search__item}>
                            <select
                                onChange={(e) =>
                                    selectChangeHandler(e, "categories")
                                }
                                value={query.categories}
                            >
                                <option value="">Все</option>
                                {filtersList.categories.map((category) => {
                                    return (
                                        <option
                                            value={category.slug}
                                            key={category.name}
                                        >
                                            {category.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className={s.search__item}>
                            <select
                                onChange={(e) =>
                                    selectChangeHandler(e, "alloys")
                                }
                                value={query.alloys}
                            >
                                <option value="">Все</option>
                                {filtersList.alloys.map((category) => {
                                    return (
                                        <option
                                            value={category.slug}
                                            key={category.name}
                                        >
                                            {category.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div
                            className={classNames(
                                s.search__item,
                                s.search__item__arrow
                            )}
                        >
                            <Link href={queryHref}>
                                <ButtonRed
                                    style={{ height: 88, maxWidth: "none" }}
                                    onClick={() => {
                                        setPage(1);
                                        filtredProductsHandler(1);
                                        scroller.scrollTo("products", {
                                            duration: 1500,
                                            delay: 100,
                                            smooth: true,
                                            offset: 50, // Scrolls to element + 50 pixels down the page
                                            // ... other options
                                        });
                                    }}
                                >
                                    Поиск
                                </ButtonRed>
                            </Link>
                        </div>
                    </div>

                    <ul className={s.products__top}>
                        <li className={s.products__top_item}>Вид продукции</li>
                        <li className={s.products__top_item}>
                            Состояния поставки
                        </li>
                        <li className={s.products__top_item}>Сплав</li>
                        <li className={s.products__top_item}>Стандарт</li>
                        <li className={s.products__top_item}>Толщина, мм</li>
                        <li className={s.products__top_item}>Ширина, мм</li>
                        <li className={s.products__top_item}>Длина, мм</li>
                    </ul>
                    <div className={s.products__wrap}>
                        {!products.detail ? (
                            products?.results.length !== 0 ? (
                                products?.results?.map((product) => {
                                    return (
                                        <ul
                                            className={s.products__list}
                                            key={product.id}
                                        >
                                            <li
                                                className={
                                                    s.products__list_item
                                                }
                                            >
                                                {product.product_category}
                                            </li>
                                            <li
                                                className={
                                                    s.products__list_item
                                                }
                                            >
                                                {product.supply_condition}
                                            </li>
                                            <li
                                                className={
                                                    s.products__list_item
                                                }
                                            >
                                                {product.alloy_type}
                                            </li>
                                            <li
                                                className={
                                                    s.products__list_item
                                                }
                                            >
                                                {product.standard}
                                            </li>
                                            <li
                                                className={
                                                    s.products__list_item
                                                }
                                            >
                                                {product.thickness}
                                            </li>
                                            <li
                                                className={
                                                    s.products__list_item
                                                }
                                            >
                                                {product.width}
                                            </li>
                                            <li
                                                className={
                                                    s.products__list_item
                                                }
                                            >
                                                {product.length}
                                            </li>
                                        </ul>
                                    );
                                })
                            ) : (
                                <BlockTitle style={{ margin: "50px 0" }}>
                                    Продуктов, соответствующих вашим критериям
                                    поиска не найдено
                                </BlockTitle>
                            )
                        ) : (
                            <BlockTitle style={{ margin: "50px 0" }}>
                                Такой страницы нет
                            </BlockTitle>
                        )}
                    </div>
                </div>
                <div className={s.pagination}>
                    <div className={s.pagination__wrap}>
                        <Link
                            href={`/products?alloys=${
                                query?.alloys || "all"
                            }&categories=${
                                query?.categories || "all"
                            }&materials=${query?.materials || "all"}&page=${
                                +page - 1
                            }`}
                        >
                            <ButtonRed
                                style={{
                                    width: 100,
                                    height: 50,
                                }}
                                onClick={() => setPage(--page)}
                                disabled={page <= 1}
                            >
                                Назад
                            </ButtonRed>
                        </Link>
                        <Link
                            href={`/products?alloys=${
                                query?.alloys || "all"
                            }&categories=${
                                query?.categories || "all"
                            }&materials=${query?.materials || "all"}&page=${
                                +page + 1
                            }`}
                        >
                            <ButtonRed
                                style={{
                                    width: 100,
                                    height: 50,
                                    marginLeft: "20px",
                                }}
                                disabled={count < page}
                                onClick={() => setPage(++page)}
                            >
                                Вперед
                            </ButtonRed>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
