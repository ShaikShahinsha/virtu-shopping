import { createContext, useState } from "react";

export const CartToggleContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => null
});

export const CartToggleProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};
    return (
        <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>
    )
}