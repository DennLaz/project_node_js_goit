import { Link } from "react-router-dom";
import catPageNotFound from "../../assets/resultPage/catPageNotFound.gif"
import style from "./notFoundPage.module.scss";


const NotFoundPage = () => {
    return (
        <div className="container">
            <div className={style.wrapper}>
                <div className={style.title_text}>
                    <h2 className={style.title}>
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                    </h2>
                    <h2 className={style.title}>
                        <span>N</span>
                        <span>o</span>
                        <span>t&ensp;</span>
                        <span> f</span>
                        <span>o</span>
                        <span>u</span>
                        <span>n</span>
                        <span>d</span>
                    </h2>               
                </div>
                <div className={style.item}>
                    <img className={style.cat} src={catPageNotFound} alt="cat"/>
                    <Link to="/" className={style.link}>
                        <button  className={style.home}>
                            go home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;