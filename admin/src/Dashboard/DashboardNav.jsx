import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import style from "./DashNav.module.css";
import logo from "../assets/logo.png"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {logout} from "../store/Authreducer/action"

const DashboardNav = ({ onOpen }) => {
  const {admin} = useSelector((store) => store.Authreducer);
  console.log(admin);
  const {isAdmin}=useSelector((store)=>store.Authreducer)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LOGOUT = () => {
   dispatch(logout())
    
    navigate("/login");
  };

  return (
    <nav  className={style.nav}>
      <div className={style.contanier_btn_logo}>
        <GiHamburgerMenu
          onClick={() => onOpen()}
          size={30}
          cursor={"pointer"}
        />
        <div className={style.logo_cont}>
          <img
            src={logo}
            alt="911.com"
          />
        </div>
      </div>
     
      <div className={style.contanier_info}>
        <div>{admin.email}</div>
        <div className={style.vertical_dotted_line}></div>
        <AiOutlineQuestionCircle size={21} />
        <div className={style.vertical_dotted_line}></div>
        <IoNotificationsOutline size={21} />
        <div className={style.vertical_dotted_line}></div>
       {!isAdmin?<NavLink to={'/login'}>Login</NavLink>:<><div className={style.user} onClick={LOGOUT}>
          LogOut
        </div></>}
      </div>
    </nav>
  );
};

export default DashboardNav;
