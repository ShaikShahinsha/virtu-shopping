import { createContext, useState } from "react";

const addCartItem = (cartItems,productToAdd)=>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem){
      return cartItems.map((cartItem) => 
           cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
    }
    //return new array if empty
    return ([...cartItems, {...productToAdd, quantity:1}]);
}
export const CartToggleContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => null,
    cartItems : [],
    addItemToCart : () =>{}
});

export const CartToggleProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};
    return (
        <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>
    )
}