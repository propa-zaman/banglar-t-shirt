import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Order summery {cart.length}</h2>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name} 
                    <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;


/*******
 * Conditional rendering
 * 1. use if or if else to set a variable that will contain an element/components
 * 2. ternary: condition ? 'for true': 'for false'
 * 3. logical &&: if the condition is true then the next thing will be displayed
 * 4. logical || : if the condition is false then the next thing will be displayed
 * 
 * *******
 * 
 * Conditional Css Class
 * 1.use ternary
 * 2. ternary inside template string 
 * 
 */