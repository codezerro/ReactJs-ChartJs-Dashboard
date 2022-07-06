import React, { useState } from 'react'
import {monthsOptions} from './../data/data' 

const Button = ({popMonth,labels,mSelected,id}) => {
  const [sl,setSl] = useState("Volvo");

  const popMonthHere =(v) =>{
    popMonth(v,id);
  }

  return (
    <div className='flex mb-3'>
      <label htmlFor="" className='text-white mr-3'>{labels}</label>
      <select name="" defaultValue={mSelected}  onChange={(e)=>popMonthHere(e.target.value)} className='w-40 flex justify-center items-center text-start pl-10 '>
        {
          monthsOptions.map((it,i)=>(
            
            <option value={i} key={i} >{it.label}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Button