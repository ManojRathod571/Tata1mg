import { Button,useToast
  } from "@chakra-ui/react";

  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
import style from './Login.module.css'
import { Signin, Signin_failure } from "../store/Authreducer/action";
  
  export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [userData, setUserData] = useState({});
    const toast = useToast()
    const {isLoading,isAdmin}=useSelector((store)=>store.Authreducer)
    const {isopen}=useSelector((store)=>store.isOpen)
  
    const handleChange = (e) => {
      const { name, value} = e.target;
     
        setUserData({
          ...userData,
          [name]: value,
        });
      
    };
  
    const handleSignin = (e) => {
      e.preventDefault();
      console.log(userData);
      if(!isAdmin){
        dispatch(Signin(userData)).then((res)=>{
          console.log(res,'jsx')
            if(res){
              alert(`Signin Successfull`)
              
              navigate("/products")
            }
            
            else{
              alert(`Signin Failed
              Something went wrong! Incorrect email or password`)
              console.log('hello');
              dispatch(Signin_failure())
            }
          })
      }
      else{
        alert("Already Signin")
      }
      
    }
    return (
      <>
         <div className='universal' style={isopen?{width:"85%"}:{width:"96%"}}>
         <div className={style.singupform_cont}>
                <div className={style.h1_cont}>
                  <h1 className={style.h1}>Sign in</h1>
                </div>
      <form className={style.form} onSubmit={handleSignin}>
        <input
          className={style.input}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Email adderss"
        />
        <div className={style.pass}>
          <input
            className={style.input}
            onChange={handleChange}
            type={showPassword?'text':'password'}
            name='password'
            placeholder="Password"
          />
        {showPassword ? <ViewIcon onClick={()=>setShowPassword(!showPassword)} className={style.seen}/> : <ViewOffIcon onClick={()=>setShowPassword(!showPassword)} className={style.seen}/>}
        </div>
        <Button   loadingText="Submitting" isLoading={isLoading}  type="submit" className={style.login}>SIGN IN</Button>
      </form>
    </div>
            
         </div>
        </>
    );
  }
  