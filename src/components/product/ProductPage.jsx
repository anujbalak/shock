import styled from "styled-components";
import ImageCarousel from "./ImageCarousel";
import PropTypes from "prop-types";
import { Star,SquareX } from "lucide-react";
import PriceComponent from "./Price";
import PurchaseButton from "./PurchaseBtn";
import AddToCartButton from "./AddToCart";
import { useOutletContext } from "react-router-dom";
import Review from "./Review";

const ProductPageContainer = styled.dialog`
    width: 90%;
    place-self: center;
    background-color: #f0d4bb;
    border: none;
    border-radius: 1em;
    display: flex;
    flex-wrap: wrap;
    z-index: 1;
    color: #111111;
    gap: 1em;
    justify-content: space-evenly;
`
export const CloseButton = styled.button`
    all: unset;
    position: absolute;
    cursor: pointer;
    & .cancel:hover, & .cancel:focus {
        fill: tomato;
        stroke: black;
    }
    right: 2%;
`
const Side = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    max-width: 1000px;
    justify-content: center;
    align-items: center;
`
const Title = styled.h2`
    align-self: self-start;
    all: unset;
    font-weight: 600;
    font-size: 1.5rem;
`
const Description = styled.p`
    all: unset;
    font-size: 1.2rem;
    max-width: 100%;
    margin-bottom: 1em;
`
const Reviews = styled.div`
    display: grid;
    grid-template-rows: auto;
    gap: 1em;
    max-height: fit-content;
`
const Rating = styled.span`
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 5px;
`

export default function ProductPage({product, ref, handleClose}) {
    const {setCart} = useOutletContext()


    return (
        <ProductPageContainer ref={ref}>
            <Side>
                <ImageCarousel arr={product.images}/>
                <Title>
                    {product.title}
                </Title>
                <Description>
                    {product.description}
                </Description>
            </Side>
            <Side>
                <PriceComponent price={product.price} discountPercentage={product.discountPercentage} />
                <PurchaseButton id={product.id} />
                <AddToCartButton product={product} setCart={setCart}/>
                <Reviews>
                    <Rating>
                        Rating: <Star fill="black"/> {product.rating}
                    </Rating>
                    {product.reviews.map(review => <Review review={review} key={review.reviewerName}/>)}
                </Reviews>
            </Side>
            <CloseButton onClick={handleClose}><SquareX color='tomato' className="cancel" size='36px'/></CloseButton>
        </ProductPageContainer>
    )
}

ProductPage.PropTypes = {
    product: PropTypes.object.isRequired,
}

ProductPage.defaultProps = {
    product: {},
}