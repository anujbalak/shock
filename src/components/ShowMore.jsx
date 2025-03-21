import { ChevronDownCircle } from "lucide-react"
import styled from "styled-components"

export const LoadContainer = styled.div`
    max-width: fit-content;
`
export const LoadText = styled.button`
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 50%;
    color: rgb(30, 30, 30);
    transition: opacity ease-in-out 0.3s, transform ease-in-out 0.3s;
    &:hover, &:focus {
        transform: scale(1.1);
        opacity: 100%;
    }
`

export default function ShowMore({setProductLoadNumber}) {
    const handleClick = () => {
        setProductLoadNumber(num => num + 10)
    }
    return (
        <>
            <LoadContainer>
                <LoadText onClick={handleClick}>
                    <ChevronDownCircle/> Show more
                </LoadText>    
            </LoadContainer>        
        </>
    )
}