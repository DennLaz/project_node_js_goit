import { useSelector } from "react-redux";
import { useNavigate} from 'react-router-dom';

import { useMediaPredicate } from "react-media-hook";
import {getUserId} from "../../../redux/auth/authSelectors"

import { userName } from '../../../redux/auth/authSelectors';

import useAuth from "../../../shared/hooks/useAuth";

import style from "./user-info.module.scss";

function UserInfo() {
    const isMobile = useMediaPredicate("(max-width: 767px)");
    const isLogin = useAuth();

  
    const id = useSelector(getUserId)
    const navigate = useNavigate()

    const onClick = () => {
    
    navigate(`/user-results/${id}`)
    
    }

    const name = useSelector(userName);

    const newName = isLogin ? name.toUpperCase().charAt(0) : '';

    return (
        <>
            {
            isLogin && (
                    <div className={style.wrapper} >
                            <button onClick={onClick} className={style.new_name} >{newName}</button>
                        <span className={style.name}>{name}</span>
                    </div>
                )
            }
            {isLogin && <div className={style.line}></div>}
            {isMobile && !isLogin && <div className={style.mobile_line}></div>}
        </>
    )
}

export default UserInfo;