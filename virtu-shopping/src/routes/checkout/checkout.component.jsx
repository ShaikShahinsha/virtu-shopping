import './checkout.styles.scss';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/carttoggle.context';
const CheckOut = () => {
    const {cartItems, addItemToCart} = useContext(CartToggleContext);
    return(
        <div>
            <h1>Checkout</h1>
            {cartItems.map((cartItem)=>{
                    const {id, name, quantity} = cartItem;
                   return <div key={id}>
                    <h2>{name}</h2>
                    <span>{quantity}</span>
                    <br/>
                    <span onClick={() => addItemToCart(cartItem)}>+</span><br/><span>-</span>
                   </div>
                })}
        </div>
    );
}

export default CheckOut;