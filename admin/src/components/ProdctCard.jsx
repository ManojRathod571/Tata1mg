import React, { useState } from 'react'
import style from "./ProductCard.module.css"
import { useDispatch } from 'react-redux'
import {FiEdit} from 'react-icons/fi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { deleteProduct } from '../store/Appreducer/action'
const ProdctCard = ({quantity,price2,price1,off,name,image,category,id}) => {
    const [openAddForm,setOpenAddform]=useState(false)
    const [product,setProduct]=useState({})
    const dispatch=useDispatch()
    const handelChange=(e)=>{
      const {name,value}=e.target;
      setProduct({
        ...product,
        [name]:value
      })
    }
    const handleDelete=(id)=>{
        dispatch(deleteProduct(id)).then((res)=>{
            if(res){
                alert("Product Removed")
            }
            else{
                alert("Something went wrong")
            }
        })
    }
  return (
    <div className={style.singlecard}>
        <div>
            <img style={{height:'14rem'}} src={image} alt={name} />
        </div>
        <div className={style.info_box}>
        <h4 className={style.title}>{name}</h4>
        <p className={style.category} >{category}</p>
        <div className={style.price_box}>
                <div className={style.offPrice_prcnt}>
                    <p className={style.ofprice}>Mrp{price2}</p>
                    <p className={style.ofprcnt}>{off}%off</p>
                </div>
                <p className={style.price}>{price1}</p>
        </div>
        <div>
            <p className={style.stock}>In Stock :{quantity}</p>
        </div>

        <div className={style.update_box}>
           <button onClick={()=>handleDelete(id)}>Delete</button>
           <button onClick={()=>setOpenAddform(!openAddForm)}>Update</button>
           <div className={openAddForm? style.addformopen:style.addform} >
        <form >
            <div>
                <label className={style.lable}>Picture</label>
                <input onChange={handelChange} name='image' className={style.input} placeholder='Add product' required/>
            </div>

            <div>
                <label className={style.lable}>Title</label>
                <input onChange={handelChange} name='name' className={style.input}  placeholder='Add product' required/>
            </div>

            <div>
                <label className={style.lable}>Off Price</label>
                <input onChange={handelChange} name='price1' className={style.input}  placeholder='Add product' required/>
            </div>

            <div>
                <label className={style.lable}>Off %</label>
                <input onChange={handelChange} name='off' className={style.input} placeholder='Add product' required/>
            </div>
            <div>
                <label className={style.lable}>Mrp</label>
                <input onChange={handelChange} name='price2' className={style.input} placeholder='Add product' required/>
            </div>

            <div>
                <label className={style.lable}>Stock</label>
                <input onChange={handelChange} name='quantity' className={style.input} placeholder='Add product' required/>
            </div>

            <input className={style.form_add_btn} type="button" value={"ADD"}/>
        </form>
        <button onClick={()=>setOpenAddform(!openAddForm)} className={style.close_btn}>Close</button>
      </div>
           
        </div>
        </div>
    </div>
  )
}

export default ProdctCard
