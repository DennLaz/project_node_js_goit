import styles from "./results.module.scss";
import img from "../../assets/resultPage/catBad.gif";
import img1 from "../../assets/resultPage/catMaybe.gif";
import img2 from "../../assets/resultPage/catWithBall.gif";
import img3 from "../../assets/resultPage/catGood.gif";
import img4 from "../../assets/resultPage/catLoading.gif";

const setDisplayImages = (percent) => {
  if (percent < 30 || percent === 30) {
    return (
      <>
        <div className={styles.picture}>
          <img
            className={styles.img}
            loading="lazy"
            src={img}
            alt="shocked cat"
          />
        </div>
        <p className={styles.text_result}>Very bad!</p>
        <p className={styles.text_advice}>You need to learn materials.</p>
      </>
    );
  } else if (percent === 31 || (percent > 31 && percent < 60)) {
    return (
      <>
        <div className={styles.picture}>
          <img
            className={styles.img}
            loading="lazy"
            src={img1}
            alt="cat thinks"
          />
        </div>
        <p className={styles.text_result}>Bad!</p>
        <p className={styles.text_advice}>You need to learn some materials.</p>
      </>
    );
  } else if (percent === 60 || (percent > 60 && percent < 90)) {
    return (
      <>
        <div className={styles.picture}>
          <img
            className={styles.img}
            loading="lazy"
            src={img2}
            alt="cat with ball"
          />
        </div>
        <p className={styles.text_result}>Not bad!</p>
        <p className={styles.text_advice}>
          But you still need to learn some materials.
        </p>
      </>
    );
  } else if (percent === 90 || (percent > 90 && percent < 100)) {
    return (
      <>
        <div className={styles.picture}>
          <img
            className={styles.img}
            loading="lazy"
            src={img3}
            alt="cat with a gift"
          />
        </div>
        <p className={styles.text_result}>Very well!</p>
        <p className={styles.text_advice}>
          Do you want to take the test again?
        </p>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.picture}>
          <img
            className={styles.img}
            loading="lazy"
            src={img4}
            alt="cat with a gift"
          />
        </div>
        <p className={styles.text_result}>Something went wrong!</p>
      </>
    );
  }
};

export default setDisplayImages;
