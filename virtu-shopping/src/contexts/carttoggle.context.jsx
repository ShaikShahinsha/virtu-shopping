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

const removeCartItem = (cartItems,productToRemove)=>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    // if(existingCartItem){
    // //   return cartItems.map((cartItem) => 
    // //        cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    // //     );
    //     return cartItems.filter((cartItem) => {
    //         cartItem.id === productToRemove.id ? cartItem.id !== productToRemove.id : cartItem
    //     })
   // }

    if(existingCartItem.quantity ===1 ){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
    }
    //return new array if empty
      return cartItems.map((cartItem) => 
           cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        );
}


const clearCartItem = (cartItems,productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if(existingCartItem) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
    }
}
export const CartToggleContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => null,
    cartItems : [],
    addItemToCart : () =>{},
    cartCount : 0,
    removeItemFromCart: () =>{},
    clearItemFromCart: () => {},
    cartTotal: 0,
});

export const CartToggleProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
      //  
        console.log("cart count");
        const newCartCount = cartItems.reduce((total,cartItems) => total + cartItems.quantity,0);
        setCartCount(newCartCount);
    },[cartItems])

    useEffect(() => {
        //  
          console.log("cart count");
          const newCartTotal = cartItems.reduce((total,cartItems) => total + cartItems.quantity * cartItems.price, 0);
          setCartTotal(newCartTotal);
      },[cartItems])


    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemFromCart = (productToRemove) =>{
        setCartItems(removeCartItem(cartItems,productToRemove));
    }


    const clearItemFromCart = (cartItemToRemove) => {
        setCartItems(clearCartItem(cartItems,cartItemToRemove));
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal};
    return (
        <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>
    )
}