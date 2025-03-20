import { Star } from "lucide-react"
import styled from "styled-components"

const ReviewComponent = styled.div`
   border: 2px solid currentColor;
   padding: 1em;
   display: flex;
   flex-wrap: wrap;
   border-radius: 1em;
   gap: 1em;
   align-items: center;
`
const Name = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 600;
`
const Rating = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
`
const Comment = styled.p`
    margin: 0;
    text-align: left;
    font-size: 1.2rem;
    flex: 100%;
`

export default function Review({review}) {
    return (
        <ReviewComponent>
            <Name>{review.reviewerName}</Name>
            <Rating><Star color="rgb(30, 30, 30)" fill="black"/> {review.rating}</Rating>
            <Comment>{review.comment}</Comment>
        </ReviewComponent>
    )
}