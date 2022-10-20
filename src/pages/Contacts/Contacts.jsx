import styles from "./contacts.module.scss";
import Contact from "./Contact";
import fields from "./fields";

const Contacts = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Our team</h2>
        <p className={styles.p}></p>
        <ul className={styles.content}>
          {fields.map((el, i) => {
            return <Contact key={i} {...el} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
