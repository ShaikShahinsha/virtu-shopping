import Button from '../button/button.component';
import {CartDropDownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles'
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/carttoggle.context';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
    const {cartItems} = useContext(CartToggleContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }
    return(
        <CartDropDownContainer>
            <CartItems>
                {
                
               cartItems.length ? (cartItems.map((cartItem)=>{
                   return (<CartItem key={cartItem.id} cartItem={cartItem}/>);
                })):(<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItems>
             <Button onClick={goToCheckOutHandler}>GO TO CHEKOUT</Button>
        </CartDropDownContainer>
    );
}

export default CartDropDown;