import React from 'react'
import { moneyFormat } from '../helper'

function Header({money,total}) {
  return (
    <>
   
        {
            total > 0 && money-total !==0 && (
                <div className='header'>
                You have <span>$ {moneyFormat(money-total)}</span> left to spend !
                </div>
            )}
            {total ===0 && (
                <div className='header'>
                You have <span>$ {moneyFormat(money)}</span> to sepend!
                </div>
            )}
            {money-total === 0 && (
                <div className='header'>
                Money has finished!
                </div>
            )
        }

        <style jsx>{`
        .header{
        position: sticky;
        top: 0;
        background: linear-gradient(to bottom,green,grey);
        heigt: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 24px;
        letter-spacing: 1px;
        
        }
        .header span{
        margin:10px;
        font-weight:bold;
        }
        `}</style>
           
    
    </>
  )
}

export default Header