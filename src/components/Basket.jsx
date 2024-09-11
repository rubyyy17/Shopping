import React from 'react'
import BasketItem from './BasketItem'

function Basket({resetBasket, basket,products,total}) {
  return (
    <>
    <div className='basket-container container'>
        <h3>Shopping Details</h3>
        <ul>
        {basket.map(item=>(
            <BasketItem item={item} product={products.find(p=>p.id === item.id)}/>
        ))}
        </ul>

        
        <div className='total'>
            Toplam: ${total}
        </div>
        <button className='basket-reset-btn' onClick={resetBasket}>Clean Basket</button>
    </div>
    <style jsx>
        {`.basket-container{
            padding:20px;
            background:#fff;
            border:1px solid  #ddd:
            }
            .basket-container h3{
            font-size:20px;
            margin-bottom:15px;

            }

            .basket-container .total {
            border-top: 1px solid #ddd;
            padding-top: 10px;
            margin-top: 10px;
            font-weight: bold;
            font-size: 18px;
            text-align: right;
            color: green;
    

            }

            .basket-reset-btn{
            background:red;
            height:40px;
            padding:0 20px;
            font-size:16px;
            font-weight:500;
            cursor:pointer;
            }

        `}
    </style>
    </>
  )
}

export default Basket