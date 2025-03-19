import styled from "styled-components"
import PropTypes from "prop-types"
import { Button } from "../ShoppingBtn"
import binImg from "/icons/close_bin.svg"
import { useOutletContext } from "react-router-dom"
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

const DefaultButton = styled(Button)`
    font-size: 1.2rem;
    cursor: pointer;
`
const RemoveButton = styled.button`
    width: 2em;
    cursor: pointer;
`

const Product = ({product, page}) => {
    
    const handleAddButton = () => {
        setCart(cart => [
            ...cart,
            product,
        ])
    }

    const {cart, setCart} = useOutletContext()

    const handleRemove = (e) => {
        setCart(cart.filter(product => product.id != e.target.dataset.productid));
    }
    
    const price = (product.price * 18).toFixed();
    const discountPercentage = product.discountPercentage;
    const discountedPrice = Math.floor((price * (100 - discountPercentage)) / 100)
    return(
        <ProjectContainer page={page}>
            <Thumbnail src={product.thumbnail} />
            <Title>{product.title}</Title>
            <Rating>★ {product.rating}</Rating>
            <PriceContainer>
                <DiscountedPrice><span className="rupee">₹</span>{discountedPrice}</DiscountedPrice>
                <Price>₹{price}</Price>
                <DiscountPercentage>{discountPercentage}%</DiscountPercentage>
            </PriceContainer>
            {page === 'cart' ?
                <>
                    <RemoveButton as='img' src={binImg} onClick={handleRemove} data-productid={product.id}/>
                    <DefaultButton>
                        Purchase
                    </DefaultButton>
                </>
                : 
                <>
                    <DefaultButton onClick={handleAddButton}>
                        Add to Cart
                    </DefaultButton>
                    
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