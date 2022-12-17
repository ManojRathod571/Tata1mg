import React, { useState } from 'react'
import style from "./ProductCard.module.css"
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../store/Appreducer/action'
const ProdctCard = () => {
    const [openAddForm,setOpenAddform]=useState(false)
    const dispatch=useDispatch()
  return (
    <div className={style.singlecard}>
        <div>
            <img src="https://cdn01.pharmeasy.in/dam/products_otc/V26945/mee-mee-premium-breathable-baby-diapers-large-18-pcs-2-1643881394.jpg" alt="" />
        </div>
        <div className={style.info_box}>
        <h4 className={style.title}>Mee Mee Premium Breathable Baby Diapers (large 18 Pcs)</h4>
        <div className={style.price_box}>
                <div className={style.offPrice_prcnt}>
                    <p className={style.ofprice}>Mpr 385</p>
                    <p className={style.ofprcnt}>4%</p>
                </div>
                <p className={style.price}>₹ 4911</p>
        </div>
        <div>
            <p className={style.stock}>In Stock :8</p>
        </div>

        <div className={style.update_box}>
           <button onClick={()=>dispatch(deleteProduct('id'))}>delete</button>
           <button onClick={()=>setOpenAddform(!openAddForm)}>updare</button>
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
        </div>
    </div>
  )
}

export default ProdctCard
