import styled from "styled-components"

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

export default function PriceComponent({price, discountPercentage}) {
    const p = (price * 18).toFixed();
    const discountedPrice = Math.floor((p * (100 - discountPercentage)) / 100)
    return (
        <PriceContainer>
            <DiscountedPrice><span className="rupee">₹</span>{discountedPrice}</DiscountedPrice>
            <Price>₹{p}</Price>
            <DiscountPercentage>{discountPercentage}%</DiscountPercentage>
        </PriceContainer>
    )
}