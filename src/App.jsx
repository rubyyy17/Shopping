import {useEffect, useState } from 'react'
import Header from './components/Header'
import products from './products.json'
import Product from './components/Product'
import Basket from './components/Basket'
import './App.css'

function App() {
  
const[money,setmoney]= useState(1000000)
const[basket,setBasket]= useState([])
const[total,setTotal]=useState(0)

const resetBasket =()=>{
  setBasket([])
}


useEffect( ()=>{
     setTotal(basket.reduce((acc,item)=>{
      return acc + (item.amount * (products.find(product=>product.id === item.id).price))
    },0))
      
},[basket])
  return (
    <>
     <Header total={total} money={money}/>
     <div className="container products">
     {products.map(product =>(
      <Product key={product.id} money={money} total={total} basket={basket} setBasket={setBasket} set product={product}/>
     ))}
     </div>

      {
        total>0 &&(
          <Basket resetBasket={resetBasket} total={total} products={products} basket={basket}/> 
        )
      }
     
     
    </>
  )
}

export default App
