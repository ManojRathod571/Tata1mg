import React from 'react'
import style from "./UserCard.module.css";
import {RiDeleteBin5Line} from "react-icons/ri"
import { deleteUser } from '../store/Appreducer/action';
import { useDispatch } from 'react-redux';
const UserCard = ({users}) => {
    const dispatch=useDispatch()
    console.log(users,"card");
  return (
    <div>
        <div>
        <h1 style={{textAlign:"center"}}>User Details</h1>
         <h3>Total user : {users.length}</h3>
        </div>
     

     <table className={style.customers}>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Remove</th>
            </tr>
           {users?.map((el)=><tr>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.gender}</td>
                <td onClick={()=>dispatch(deleteUser(el._id))} style={{cursor:"pointer"}}><RiDeleteBin5Line color='red' size={20}/></td>
            </tr>) }
           
            </table>
    </div>
  )
}

export default UserCard
