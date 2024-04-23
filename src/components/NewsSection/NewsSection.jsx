'use client';

import classNames from "classnames";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import BlockTitle from "../BlockTitle/BlockTitle";
import NewsItem from "./NewsItem/NewsItem";
import s from "./NewsSection.module.scss";
import { scroller } from "react-scroll";
import NewsSlider from "./NewsSlider/NewsSlider";
import { usePathname } from "next/navigation";

export default function NewsSection({ style, data: {categories, articles}, sliderOn=true, isHeader=false  }) {

    const [selectCategory, setSelectCategory] = useState(0);

    const [showAll, setShowAll] = useState(false);

    const [filterArticles, setFilterArticles] = useState(articles);

    const filterArticlesHandler = (id) => {
        setSelectCategory(id);
        if(id === 0) {
            setFilterArticles(articles);
            return;
        }

        const filter = articles.filter((elem) => {
            if(elem.categories.includes(id)) {
                return elem
            }
        })

        setFilterArticles(filter)
        setShowAll(false)
    }
    
 

    return (
        <section className={classNames(s.news, isHeader && s.news__background, isHeader && s.news__padding)} style={...style}>
            <Element name="news" />
            <div className="container">
                <div className={s.news__inner} id="anchor">
                    <BlockTitle>Новости и статьи</BlockTitle>
                    <div className={s.tabs}>
                        <div className={s.news__tabs}>
                        <div className=
                            {classNames(
                                s.tab__item,
                                selectCategory === 0 && s.tab__item__active
                            )} 
                            onClick={() => {
                                filterArticlesHandler(0)
                            }}>
                            Все
                        </div>
                            {categories && categories.map((category) => {
                                return (<div
                                className={classNames(
                                    s.tab__item,
                                    selectCategory === category.id && s.tab__item__active
                                )}
                                key={category.id}
                                onClick={() => {
                                    filterArticlesHandler(category.id)
                                }}
                            >
                                {category.name}
                            </div>)
                            }
                                
                            )}
                        </div>
                        </div>
                </div>
                    {sliderOn && <div className={s.news}>
                        <NewsSlider articles={filterArticles} currentCategory={selectCategory} />
                    </div>
                    }
                    
                    {!sliderOn && !showAll && <div className={classNames(s.news, s.news__wrap)}>
                        {filterArticles.length !== 0 ? filterArticles.map((article, index) => {
                            return <NewsItem style={index >= 8 ? {display: 'none'} : {}} article={article} key={article.slug} />
                        }) : (<h1>Здесь пока что ничего нет</h1>)}
                    </div>}

                    {!sliderOn && showAll && <div className={classNames(s.news, s.news__wrap)}>
                        {filterArticles.map((article, index) => {
                            return <NewsItem article={article} key={article.slug} />
                        })}
                    </div>}
                        
                    {!sliderOn && filterArticles.length > 8 && <button onClick={() => setShowAll(!showAll)} className={s.button}>Все новости</button>}
            </div>
            
            
        </section>
    );
}
