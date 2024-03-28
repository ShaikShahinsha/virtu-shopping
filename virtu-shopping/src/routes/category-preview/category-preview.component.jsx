//import SHOP_DATA from '../../shop-data.json';
import { Fragment, useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import CategoryPreview from "../../components/categories-preview/cateogry-preview.component";
const CategoriesPreview = () => {
    const {categoryMap} = useContext(ProductsContext);
    return(
        <Fragment>
            {
                Object.keys(categoryMap).map((title) => {
                    const products = categoryMap[title];

                    return <CategoryPreview key={title} title={title} products={products}/>
                })
            }
        </Fragment>
       
    )
}

export default CategoriesPreview;