"use client";
import classNames from "classnames";
import { useState } from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import SliderComponent from "../Slider/Slider";
import s from "./PointsTabs.module.scss";

export default function PointsTabs() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        // <section className={s.points}>
        //     <div className="container">
        //         <BlockTitle
        //             style={{
        //                 marginTop: 84,
        //                 marginBottom: 62,
        //             }}
        //         >
        //             ПОЛИТИКА ПРОИЗВОДСТВА НАПРАВЛЕНА <br /> НА КАЧЕСТВО
        //             ПРОДУКЦИИ
        //         </BlockTitle>
        //         <div className={s.points__items}>
        //             <div className={s.points__item}>
        //                 <div className={s.points__item_top}>
        //                     <div
        //                         className={classNames(
        //                             s.points__item_circle,
        //                             activeTab >= 1 &&
        //                                 s.points__item_circle__active
        //                         )}
        //                         onClick={() => setActiveTab(1)}
        //                     ></div>
        //                     <div
        //                         className={classNames(
        //                             s.points__item_line,
        //                             activeTab >= 1 &&
        //                                 s.points__item_line__active
        //                         )}
        //                     ></div>
        //                 </div>
        //                 <h5
        //                     className={classNames(
        //                         s.points__item_title,
        //                         s.points__item_title__active
        //                     )}
        //                 >
        //                     УПАКОВКА ПРОДУКЦИИ
        //                 </h5>
        //                 <p className={s.points__item_text}>Подача заявки</p>
        //             </div>
        //             <div className={s.points__item}>
        //                 <div className={s.points__item_top}>
        //                     <div
        //                         className={classNames(
        //                             s.points__item_circle,
        //                             activeTab >= 2 &&
        //                                 s.points__item_circle__active
        //                         )}
        //                         onClick={() => setActiveTab(2)}
        //                     ></div>
        //                     <div
        //                         className={classNames(
        //                             s.points__item_line,
        //                             activeTab >= 2 &&
        //                                 s.points__item_line__active
        //                         )}
        //                     ></div>
        //                 </div>
        //                 <h5 className={classNames(s.points__item_title)}>
        //                     ПРОВЕРКА ОТДЕЛОМ ОТК
        //                 </h5>
        //                 <p className={s.points__item_text}>
        //                     Разработать проектной документации
        //                 </p>
        //             </div>
        //             <div className={s.points__item}>
        //                 <div className={s.points__item_top}>
        //                     <div
        //                         className={classNames(
        //                             s.points__item_circle,
        //                             activeTab >= 3 &&
        //                                 s.points__item_circle__active
        //                         )}
        //                         onClick={() => setActiveTab(3)}
        //                     ></div>
        //                     <div
        //                         className={classNames(
        //                             s.points__item_line,
        //                             activeTab >= 3 &&
        //                                 s.points__item_line__active
        //                         )}
        //                     ></div>
        //                 </div>
        //                 <h5 className={classNames(s.points__item_title)}>
        //                     ПРОВЕРКА В ЛАБОРАТОРИИ
        //                 </h5>
        //                 <p className={s.points__item_text}>
        //                     Монтаж внутреннего газопрвода
        //                 </p>
        //             </div>
        //             <div className={s.points__item}>
        //                 <div className={s.points__item_top}>
        //                     <div
        //                         className={classNames(
        //                             s.points__item_circle,
        //                             activeTab >= 4 &&
        //                                 s.points__item_circle__active
        //                         )}
        //                         onClick={() => setActiveTab(4)}
        //                     ></div>
        //                     <div
        //                         className={classNames(
        //                             s.points__item_line,
        //                             activeTab >= 4 &&
        //                                 s.points__item_line__active
        //                         )}
        //                     ></div>
        //                 </div>
        //                 <h5 className={classNames(s.points__item_title)}>
        //                     ХРАНЕНИЕ ПРОДУКЦИИ
        //                 </h5>
        //                 <p className={s.points__item_text}>
        //                     Подписание договора на поставку газа
        //                 </p>
        //             </div>
        //         </div>
        //         {activeTab === 1 && (
        //             <div className={s.points__bottom}>
        //                 <div className={s.points__content}>
        //                     <h4 className={s.points__content_title}>
        //                         Обеспечиваем надёжную упаковку продукции
        //                     </h4>
        //                     <p className={s.points__content_text}>
        //                         Наша упаковка обеспечивает полную сохранность
        //                         продукции при транспортировке и хранении. Мы
        //                         соблюдаем требования ГОСТ на упаковку 9.519-93.
        //                     </p>
        //                 </div>
        //                 <div className={s.points__slider}>
        //                     <SliderComponent>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl1.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl1.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl1.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                     </SliderComponent>
        //                 </div>
        //             </div>
        //         )}
        //         {activeTab === 2 && (
        //             <div className={s.points__bottom}>
        //                 <div className={s.points__content}>
        //                     <h4 className={s.points__content_title}>
        //                         Вся производимая продукция проходит проверку в
        //                         отделе контроля качества
        //                     </h4>
        //                     <p className={s.points__content_text}>
        //                         Производится визуальный осмотр поверхности,
        //                         плоскостности и т.д. Осуществляется проверка на
        //                         соответствие требованиям ГОСТ. Также мы проводим
        //                         механические испытания продукции.
        //                     </p>
        //                 </div>
        //                 <div className={s.points__slider}>
        //                     <SliderComponent>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl2.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl2.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl2.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                     </SliderComponent>
        //                 </div>
        //             </div>
        //         )}
        //         {activeTab === 3 && (
        //             <div className={s.points__bottom}>
        //                 <div className={s.points__content}>
        //                     <h4 className={s.points__content_title}>
        //                         Производим контроль качества в собственной
        //                         лаборатории
        //                     </h4>
        //                     <p className={s.points__content_text}>
        //                         Производим механические испытания образцов
        //                         материалов на испытательной машине, осуществляем
        //                         проверку твердости.
        //                     </p>
        //                 </div>
        //                 <div className={s.points__slider}>
        //                     <SliderComponent>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl3.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl3.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl3.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                     </SliderComponent>
        //                 </div>
        //             </div>
        //         )}
        //         {activeTab === 4 && (
        //             <div className={s.points__bottom}>
        //                 <div className={s.points__content}>
        //                     <h4 className={s.points__content_title}>
        //                         Храним продукцию в закрытых складах на
        //                         собственном производстве
        //                     </h4>
        //                     <p className={s.points__content_text}>
        //                         Исключаем попадание влаги и образования коррозии
        //                     </p>
        //                 </div>
        //                 <div className={s.points__slider}>
        //                     <SliderComponent>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl4.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl4.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className={s.slider__item}>
        //                             <img
        //                                 src={"/images/points/sl4.png"}
        //                                 alt=""
        //                             />
        //                         </div>
        //                     </SliderComponent>
        //                 </div>
        //             </div>
        //         )}
        //     </div>
        // </section>
        <></>
    );
}
