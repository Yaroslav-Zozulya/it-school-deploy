import Container from "@/components/common/Container/Container";
import Image from "next/image";
import s from "./howLearning.module.scss";
import Title from "@/components/common/Title/Title";

export default function HowLearning() {
  return (
    <section className={s.howLearning}>
      <Container>
        <div className={s.howLearningWrapper}>
          <Image
            src="/images/howLearning/img.png"
            width={343}
            height={257}
            alt="Learning process image"
            sizes="(max-width: 767px) 343px, (max-width: 1367px) 320px, (max-width: 1919px) 524px,  748px"
            className={s.image}
          />
          <div>
            <Title
              text="ЯК ВІДБУВАЄТЬСЯ НАВЧАННЯ"
              className="contact_title"
              tagName="h2"
            />
            <ul className={s.howLearning_list}>
              <li className={s.howLearning_item}>
                <div className={s.howLearning_title_container}>
                  <svg
                    className={`${s.icons} ${s.icons_star}`}
                    width={22}
                    height={22}
                  >
                    <use href="/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <h3 className={s.howLearning_item_title}>Лекції</h3>
                </div>
                <p className={s.howLearning_item_description}>
                  Онлайн, Офлайн або в Записі - кожен обере зручний для себе
                  формат
                </p>
              </li>
              <li className={s.howLearning_item}>
                <div className={s.howLearning_title_container}>
                  <svg className={s.icons} width={20} height={20}>
                    <use href="/icons/sprite.svg#icon-moon"></use>
                  </svg>
                  <h3 className={s.howLearning_item_title}>
                    Практичні завдання
                  </h3>
                </div>
                <p className={s.howLearning_item_description}>
                  Онлайн, Офлайн або в Записі - кожен обере зручний для себе
                  формат
                </p>
              </li>
              <li className={s.howLearning_item}>
                <div className={s.howLearning_title_container}>
                  <svg className={s.icons} width={20} height={20}>
                    <use href="/icons/sprite.svg#icon-rocket-white"></use>
                  </svg>
                  <h3 className={s.howLearning_item_title}>
                    Домашні завдання{" "}
                  </h3>
                </div>
                <p className={s.howLearning_item_description}>
                  Кожна тема має ДЗ, яке перевіряють наші ментори які завжди
                  готові прийти на допомогу та відповісти на будь які питання
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
