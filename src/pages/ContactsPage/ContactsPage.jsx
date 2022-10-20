import styles from "./contactsPage.module.scss";
import Contact from "./Contact";
import fields from "./fields";

const ContactsPage = () => {
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

export default ContactsPage;
