import './product-card.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/carttoggle.context';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartToggleContext);
    const addProductToCart = () => addItemToCart(product);

    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>ADD</Button>
        </div>
    );
}

export default ProductCard;