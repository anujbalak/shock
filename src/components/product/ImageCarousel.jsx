import { useState } from "react"
import styled from "styled-components"
import { Box, ChevronLeft, ChevronRight, CircleDashed, CircleDotDashed, Dot } from 'lucide-react'

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    grid-template-rows: 1fr 40px;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const ImageComponent = styled.img`
    background-position: center;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    grid-column: 2 / 3;
    /* transform: translate(-100%, 0); */
`
const ArrowIcon = styled.button`
    all: unset;
    cursor: pointer;
    transition: transform ease-in-out .2s;
    &:hover, &:focus {
        transform: scale(1.2);
    }
    flex: 5%;
`
const DotContainer = styled.div`
    grid-column: 1 / 4;
    grid-row: 2/ 3;
    display: flex;
    justify-content: center;
    gap: 10px;
`

const ImageCarousel = ({arr}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previous = () => {
        if (currentIndex === 0) return setCurrentIndex(arr.length - 1)
        return setCurrentIndex(currentIndex - 1);
    }
    const next = () => {
        if (currentIndex === arr.length - 1) return setCurrentIndex(0)
        return setCurrentIndex(currentIndex + 1);
    }

    const handleDotClick = (e) => {
        setCurrentIndex(e.target.dataset.index)
    }
    
    return (
        <ImageContainer>
            <ArrowIcon>
                <ChevronLeft onClick={previous} color='rgb(30, 30, 30)' strokeWidth="3px" size='2.5em'/>
            </ArrowIcon>
            <ImageComponent src={arr[currentIndex]} />
            <ArrowIcon>
                <ChevronRight 
                    onClick={next}
                    color='rgb(30, 30, 30)' 
                    strokeWidth="3px"
                    size='2.5em'
                />
            </ArrowIcon>
            <DotContainer>
                {arr.map((value, index) => {
                    return (
                    index == currentIndex ? 
                    <CircleDotDashed 
                        key={index} 
                        onClick={handleDotClick} 
                        data-index={Number(index)}
                        size='2em'
                        strokeWidth="2px"
                    />
                    : 
                    <CircleDashed 
                        key={index} 
                        onClick={handleDotClick} 
                        data-index={Number(index)}
                        size='2em'
                        strokeWidth="2px"
                    />
                    )
                })}
            </DotContainer>
        </ImageContainer>
    )
} 

export default ImageCarousel;