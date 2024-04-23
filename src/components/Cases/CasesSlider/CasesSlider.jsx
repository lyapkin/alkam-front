import SliderComponent from "@/components/Slider/Slider";
import classNames from "classnames";
import s from "../Cases.module.scss";

const CasesSlider = ({ infinity }) => {
    return (
        <SliderComponent infinity={infinity}>
            <div className={classNames(s.cases__item)}>
                <div className={s.cases__item_number}>
                    <span>01</span>
                </div>
                <div className={s.cases__item_line}></div>
                <h4 className={s.cases__item_title}>
                    22 года на рынке металлопроката
                </h4>
                <p className={s.cases__item_text}>
                    "АЛКАМ плюс" успешно осуществляет свою деятельность на рынке
                    изготовления полуфабрикатов из цветных и черных металлов с
                    2002 года.{" "}
                </p>
            </div>
            <div className={s.cases__item}>
                <div className={s.cases__item_number}>
                    <span>02</span>
                </div>
                <div className={s.cases__item_line}></div>
                <h4 className={s.cases__item_title}>
                    Общая площадь производства 12000 кв.м
                </h4>
                <p className={s.cases__item_text}>
                    "АЛКАМ плюс" успешно осуществляет свою деятельность на рынке
                    изготовления полуфабрикатов из цветных и черных металлов с
                    2002 года.{" "}
                </p>
            </div>
            <div className={s.cases__item}>
                <div className={s.cases__item_number}>
                    <span>03</span>
                </div>
                <div className={s.cases__item_line}></div>
                <h4 className={s.cases__item_title}>
                    Более 2000 тонн металлопродукции в год
                </h4>
                <p className={s.cases__item_text}>
                    "АЛКАМ плюс" успешно осуществляет свою деятельность на рынке
                    изготовления полуфабрикатов из цветных и черных металлов с
                    2002 года.{" "}
                </p>
            </div>
            <div className={s.cases__item}>
                <div className={s.cases__item_number}>
                    <span>04</span>
                </div>
                <div className={s.cases__item_line}></div>
                <h4 className={s.cases__item_title}>
                    Более 2000 тонн металлопродукции в год
                </h4>
                <p className={s.cases__item_text}>
                    "АЛКАМ плюс" успешно осуществляет свою деятельность на рынке
                    изготовления полуфабрикатов из цветных и черных металлов с
                    2002 года.{" "}
                </p>
            </div>
        </SliderComponent>
    );
};

export default CasesSlider;
