import s from "./styles.module.scss";

export default function SocialList({ socialList, socialLink, socialIcon }) {
  return (
    <ul className={s[socialList]}>
      <li>
        <a
          href="https://www.instagram.com/invites/contact/?i=hgn4uekr2du3&utm_content=sxitg3i"
          target="_blank"
          className={s[socialLink]}
          aria-label="посилання на instagram"
        >
          <svg className={s[socialIcon]}>
            <use href="/icons/sprite.svg#icon-instagram" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://t.me/spaceit_school_ua"
          target="_blank"
          className={s[socialLink]}
          aria-label="посилання на telegram"
        >
          <svg className={s[socialIcon]}>
            <use href="/icons/sprite.svg#icon-telegram" />
          </svg>
        </a>
      </li>
      {/* <li>
        <a
          href="#"
          target="_blank"
          className={s[socialLink]}
          aria-label="посилання на youtube"
        >
          <svg className={s[socialIcon]}>
            <use href="/icons/sprite.svg#icon-youtube" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          target="_blank"
          className={s[socialLink]}
          aria-label="посилання на facebook"
        >
          <svg className={s[socialIcon]}>
            <use href="/icons/sprite.svg#icon-facebook" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          target="_blank"
          className={s[socialLink]}
          aria-label="посилання на linkedin"
        >
          <svg className={s[socialIcon]}>
            <use href="/icons/sprite.svg#icon-linkedin" />
          </svg>
        </a>
      </li> */}
    </ul>
  );
}
