import React from 'react'
import { useSelector } from 'react-redux'


export default function Summrey() {
    const list = useSelector(state=>state.Transection)


    const total = ()=> {
        let data = {
            exp : 0 ,
            pro : 0 
        }
    
  list.forEach(el=>{
      if(el.select == "credit"){
         data.pro += parseInt(el.amount)
      }else if(el.select == 'debit'){
          data.exp += parseInt(el.amount)
      }
  })
  return data

 }

let usedata =   total();


  return (
    <div>
      <div>
          <div>Credit :-{usedata.pro}</div>
          <div>Debit :-{usedata.exp}</div>
          <div>Exp : -{usedata.pro - usedata.exp}</div>
      </div>
    </div>
  )
}
