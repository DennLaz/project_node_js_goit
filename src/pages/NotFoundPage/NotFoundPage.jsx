import { Link } from "react-router-dom";
import catPageNotFound from "../../assets/resultPage/catPageNotFound.gif"
import style from "./notFoundPage.module.scss";


const NotFoundPage = () => {
    return (
        <div className="container">
            <div className={style.wrapper}>
                <div className={style.title_text}>
                    <h2 className={style.title}>
                        <span className={style.text}>4</span>
                        <span className={style.text}>0</span>
                        <span className={style.text}>4</span>
                    </h2>
                    <h2 className={style.title}>
                        <span className={style.text}>N</span>
                        <span className={style.text}>o</span>
                        <span className={style.text}>t&ensp;</span>
                        <span className={style.text}> f</span>
                        <span className={style.text}>o</span>
                        <span className={style.text}>u</span>
                        <span className={style.text}>n</span>
                        <span className={style.text}>d</span>
                    </h2>               
                </div>
                <div className={style.item}>
                    <img className={style.cat} src={catPageNotFound} alt="cat"/>
                    <Link to="/" className={style.link}>
                        <button  className={style.btmHome}>
                            go home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;