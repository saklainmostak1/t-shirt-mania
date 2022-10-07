import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {
    let messege;
    if(cart.length === 0){
        messege = <p>Please Buy At least one items</p>
    }
    else if(cart.length === 1){
        messege = <div>
            <h3>Amar Ekta nao</h3>
            <p>Tmr Jnno Akta Nao</p>
        </div>
    }
    else{
        messege = <p>Thanks For Buy</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : 'purple'}>Order Summary</h3>
            <h4 className={`bold ${cart.length === 2 ? 'blue' :  'yellow' }`}>Order Quantity: {cart.length} </h4>
           {
              cart.map(tshirt => <p
              key={tshirt._id}
               >
                {tshirt.name}
               <button onClick={() => handleRemoveItem(tshirt)}>X</button>
              </p>)
            }
           {
            messege
           }
           {
                cart.length === 3 ? <p>3 jon k gift diba</p> : <p>Kino kino</p>
           }
           <p>And Operator</p>
           {cart.length === 2 && <h2>Double items</h2>}
           <p>Or operator</p>
           {cart.length === 4 || <p>4 ta item na</p> }
        </div>
    );
};

export default Cart;