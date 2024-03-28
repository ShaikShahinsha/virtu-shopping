import './checkout.styles.scss';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/carttoggle.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const CheckOut = () => {
    const {cartItems, addItemToCart,cartTotal} = useContext(CartToggleContext);
    return(
        <div className='checkout-container'>
            <div className='checkout-header'> 
            <div className='header-block'>
             <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Descripton</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
                
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            </div>
           
            {cartItems.map((cartItem)=>
                   //  const {id, name, quantity} = cartItem;
                //    return <div key={id}>
                //     <h2>{name}</h2>
                //     <span>{quantity}</span>
                //     <br/>
                //     <span onClick={() => addItemToCart(cartItem)}>+</span><br/><span>-</span>
                //    </div>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )}
                <span className='total'>Total: {cartTotal}</span>
        </div>
    );
}

export default CheckOut;