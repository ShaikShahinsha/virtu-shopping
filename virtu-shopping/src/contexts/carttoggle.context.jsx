import { createContext, useEffect, useState } from "react";

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
    addItemToCart : () =>{},
    cartCount : 0
});

export const CartToggleProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
      //  
        console.log("cart count");
        const newCartCount = cartItems.reduce((total,cartItems) => total + cartItems.quantity,0);
        setCartCount(newCartCount);
    },[cartItems])
    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};
    return (
        <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>
    )
}