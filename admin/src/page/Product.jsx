import React from 'react'
import ProdctCard from '../components/ProdctCard'
import style from './Product.module.css'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../store/Appreducer/action'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
const Product = () => {
    const dispatch=useDispatch()
    const [openAddForm,setOpenAddform]=useState(false)
    const {isopen}=useSelector((store)=>(store.isOpen))
    const{data}=useSelector((store)=>store.Appreducer)
    useEffect(()=>{
         dispatch(getProduct())
    },[dispatch])
    //<button className={style.add_product_btn}>Add Product</button>
  return (
    <div  style={isopen?{width:"85%",float:"right",border:'1px solid red'}:{width:"96%",float:"right"}}>
       <div className={style.add_product_cont} style={{display:"block",marginTop:"1rem"}}><button onClick={()=>setOpenAddform(!openAddForm)} className={style.add_product_btn}>Add Product</button>

       <div className={openAddForm? style.addformopen:style.addform} >
        <form >
            <div>
                <label className={style.lable}>Picture</label>
                <input className={style.input} placeholder='Add product'/>
            </div>

            <div>
                <label className={style.lable}>Title</label>
                <input className={style.input}  placeholder='Add product'/>
            </div>

            <div>
                <label className={style.lable}>Off Price</label>
                <input className={style.input}  placeholder='Add product'/>
            </div>

            <div>
                <label className={style.lable}>Off %</label>
                <input className={style.input} placeholder='Add product'/>
            </div>
            <div>
                <label className={style.lable}>Mrp</label>
                <input className={style.input} placeholder='Add product'/>
            </div>

            <div>
                <label className={style.lable}>Stock</label>
                <input className={style.input} placeholder='Add product'/>
            </div>

            <input className={style.form_add_btn} type="button" value={"ADD"}/>
        </form>
        <button onClick={()=>setOpenAddform(!openAddForm)} className={style.close_btn}>Close</button>
     </div>
       </div> 
     <div className={style.universal} style={isopen?{width:"100%"}:{width:"96%"}}>
        {data?.map((el)=> <ProdctCard/>)}
     </div>
    </div>
  )
}



export default Product
