import { Fragment, useContext, useEffect, useState } from 'react';
import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-cards/product-card.component';
const Category = () => {
    const {category} = useParams(); 
    const {categoryMap} = useContext(ProductsContext);
   // const products = categoryMap[category];

    const [products, setProducts] = useState(categoryMap[category]);

    useEffect(()=> {
        setProducts(categoryMap[category]);
    },[category,categoryMap])
    return(
        <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {
                products && products.map((product)=>{
                        return <ProductCard key={product.key} product={product}/>
                })
                
             }
        </div>
        </Fragment>
    )
}

export default Category;