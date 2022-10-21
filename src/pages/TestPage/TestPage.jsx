import { Link } from "react-router-dom"
import Questions from "../../modules/Questions/Questions"
import Button from "../../shared/components/Button"
// import Testing from "../../module/Testing"
import style from "./testPage.module.scss"

const TestPage = () => {
    return ( 
        <div className="container">
            <div className={style.upper_wrap}>
            <p>[ Testing theory_ ]</p>
            <Button text="Stop test" type="button" active="true" className={style.btn} />
            </div>
            <div className={style.wrap}>
                <p className={style.text}>Question <span className={style.active_text}>1</span>/12</p>
            <Questions />
            </div>
        </div>
)
}

export default TestPage