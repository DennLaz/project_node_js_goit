import styles from "./contact.module.scss";
import sprite from "../../../assets/svg/sprite.svg";

const Contact = ({ url, name, post, about, GitHub, LinkedIn }) => {
  return (
    <li className={styles.wrapper}>
      <img className={styles.img} src={url} alt={name} />
      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.text}>{post}</p>
        <p className={styles.about}>{about}</p>
        <div className={styles.containerLink}>
          <a className={styles.link} href={GitHub}>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-github`}></use>
            </svg>
          </a>
          <a className={styles.link} href={LinkedIn}>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-linkedin`}></use>
            </svg>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Contact;
