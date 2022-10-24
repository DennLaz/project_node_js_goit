import { useSelector, useDispatch } from "react-redux";
import { useMediaPredicate } from "react-media-hook";

import { userName } from '../../../redux/auth/authSelectors';
import { userLogout } from "../../../redux/auth/authOperations";

import useAuth from "../../../shared/hooks/useAuth";

import style from "./user-info.module.scss";

function UserInfo() {
    const isMobile = useMediaPredicate("(max-width: 767px)");
    const isLogin = useAuth();

    const name = useSelector(userName);

    const newName = isLogin ? name.toUpperCase().charAt(0) : '';

    return (
        <>
            { isLogin && (<div className={style.wrapper} >
                <p className={style.new_name} >{newName}</p><span className={style.name}>{name}</span>
                
               
            </div>)}
            {isLogin && <div className={style.line}></div>}
            {isMobile && !isLogin && <div className={style.mobile_line}></div>}
        </>
    )
}

export default UserInfo;