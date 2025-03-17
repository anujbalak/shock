import styled from "styled-components"
import PropTypes from "prop-types"
import { Button } from "../ShoppingBtn"

const ProjectContainer = styled.div`
    background-color: #fbe1c3;
    display: grid;
    gap: 0.5em;
    border-radius: 1em;
    padding: 0 1em 1em 1em;
    grid-template-rows: auto;
    width: min-content;
`
const Thumbnail = styled.img`
    
`
const Title = styled.h2`
    font-size: 1.5rem;
`

const Rating = styled.span`
    
`

const PriceContainer = styled.div`
    display: flex;
    gap: 0.4em;
    align-items: center;    
`
const Price = styled.span`
    text-decoration: line-through;
`
const DiscountPercentage = styled.span`
    color: #00a000;
`
const DiscountedPrice = styled.span`
    display: flex;
    font-size: 2rem;
    font-weight: 700;
`

const AddToCartBtn = styled(Button)`
    font-size: 1.2rem;
`

const Product = ({product}) => {
    
    const price = (product.price * 18).toFixed();
    const discountPercentage = product.discountPercentage;
    const discountedPrice = Math.floor((price * (100 - discountPercentage)) / 100)
    return(
        <ProjectContainer>
            <Thumbnail src={product.thumbnail} />
            <Title>{product.title}</Title>
            <Rating>★ {product.rating}</Rating>
            <PriceContainer>
                <DiscountedPrice><span className="rupee">₹</span>{discountedPrice}</DiscountedPrice>
                <Price>₹{price}</Price>
                <DiscountPercentage>{discountPercentage}%</DiscountPercentage>
            </PriceContainer>
            <AddToCartBtn>
                Add to Cart
            </AddToCartBtn>
        </ProjectContainer>    
    )
}

Product.PropTypes = {
    product: PropTypes.object
}

export default Product;