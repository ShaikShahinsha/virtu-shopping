import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/carttoggle.context';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartToggleContext);

    const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className='cart-icon-container' onClick={toggleCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;