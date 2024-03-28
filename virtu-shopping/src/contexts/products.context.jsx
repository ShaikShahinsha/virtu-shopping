import { createContext, useEffect, useState } from "react";

import SHOP_DATA from '../shop-data.js';
import { fetchCategoriesFromDb } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    categoryMap: {}
});

export const ProductsProvider = ({children}) => {
    
    const [categoryMap, setCategoryMap] = useState({});
    const value = {categoryMap};

    // useEffect(()=> {
    //     addCollectionAndDocuments('categories',SHOP_DATA)

    // },[])

    useEffect(()=> {
        const getCategoriesMap = async()=>{
            const categoryMap = await fetchCategoriesFromDb();
            console.log(categoryMap);
            setCategoryMap(categoryMap);
        }
        getCategoriesMap();
        
    },[]);
    
    return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>);
}