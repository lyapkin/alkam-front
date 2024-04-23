import classNames from "classnames";
import BlockTitle from "../BlockTitle/BlockTitle";
import SliderComponent from "../Slider/Slider";
import s from "./ToolsBlock.module.scss";

export default function ToolsBlock() {
    return (
        <section className={s.tools}>
            <div className="container">
                <BlockTitle
                    style={{
                        paddingTop: 110,
                        paddingBottom: 56,
                    }}
                >
                    НА ПРОИЗВОДСТВЕННОЙ ПЛОЩАДКЕ ООО «АЛКАМ ПЛЮС» <br />
                    РАЗМЕЩАЕТСЯ СЛЕДУЮЩЕЕ ОБОРУДОВАНИЕ:
                </BlockTitle>
                <div className={s.content}>
                    <div className={s.content__wrap}>
                        <h5 className={s.subtitle}>
                            Линия термообработки и окончательной отделки <br />
                            листа, в которую входит следущее оборудование
                        </h5>
                        <ul className={s.content__list}>
                            <li className={s.list__item}>
                                01 - Браш машина – (1ед)
                            </li>
                            <li className={s.list__item}>
                                02 - Оборудование для резки плит и прутков – (2
                                ед)
                            </li>
                            <li className={s.list__item}>
                                03 - Печь для нагрева металлопроката – (3 ед)
                            </li>
                            <li className={s.list__item}>
                                04 - Закалочная камера - (3 ед)
                            </li>
                            <li className={s.list__item}>
                                05 - РПМ (Ролико - правильная машина) – (4 ед)
                            </li>
                            <li className={s.list__item}>
                                06 - Гильотинные ножницы - (2ед)
                            </li>
                            <li className={s.list__item}>
                                07 - Линия резки рулонов - (3 ед)
                            </li>
                        </ul>
                    </div>
                    <div className={s.tools__slider}>
                        <SliderComponent
                            items={[
                                "/images/tools-block/slide.png",
                                "/images/tools-block/slide.png",
                                "/images/tools-block/slide.png",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
