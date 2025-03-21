import styled from "styled-components"
import PropTypes, { func } from "prop-types"
import { Button } from "../ShoppingBtn"
import binImg from "/icons/close_bin.svg"
import { useOutletContext } from "react-router-dom"
import PriceComponent from "./Price"
import PurchaseButton from "./PurchaseBtn"
import AddToCartButton from "./AddToCart"
const ProjectContainer = styled.div`
    background-color: #fbe1c3;
    display: ${page => page === 'shop' ? 'flex' : 'grid'};
    gap: 0.5em;
    border-radius: 1em;
    padding: 0 1em 1em 1em;
    grid-template-rows: auto;
    width: min-content;
`
const Thumbnail = styled.img`
    cursor: pointer;
`
const Title = styled.h2`
    font-size: 1.5rem;
    cursor: pointer;
`

const Rating = styled.span`
    
`

export const DefaultButton = styled(Button)`
    font-size: 1.2rem;
    cursor: pointer;
    width: 100%;
`
const RemoveButton = styled.button`
    width: 2em;
    cursor: pointer;
`

const Product = ({product, page, handleClick, notificationRef}) => {

    const {cart, setCart} = useOutletContext()

    const handleRemove = (e) => {
        setCart(cart.filter(product => product.id != e.target.dataset.productid));
    }

    
    return(
        <ProjectContainer page={page}>
            <Thumbnail src={product.thumbnail} onClick={handleClick} data-productid={product.id}/>
            <Title onClick={handleClick} data-productid={product.id}>{product.title}</Title>
            <Rating>★ {product.rating}</Rating>
            <PriceComponent price={product.price} discountPercentage={product.discountPercentage}/>
            {page === 'cart' ?
                <>
                    <RemoveButton as='img' src={binImg} onClick={handleRemove} data-productid={product.id}/>
                    <PurchaseButton id={product.id} handleRemove={handleRemove} />
                </>
                : 
                <>
                    <AddToCartButton 
                        setCart={setCart} 
                        product={product} 
                        notificationRef={notificationRef}
                    />
                    
                </>
            }
        </ProjectContainer>    
    )
}


Product.PropTypes = {
    product: PropTypes.object.isRequired,
    page: PropTypes.string,
}

Product.defaultProps = {
    page: 'shop',
}

export default Product;