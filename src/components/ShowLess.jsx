import { ArrowBigUp, ChevronUpCircle } from "lucide-react"
import { LoadContainer, LoadText } from "./ShowMore"

export default function ShowLess({setProductLoadNumber}) {
    const handleClick = () => {
        setProductLoadNumber(num => num - 10)
    }
    return (
        <>
            <LoadContainer>
                <LoadText onClick={handleClick}>
                    <ChevronUpCircle color="currentColor"/>Show Less
                </LoadText>    
            </LoadContainer>        
        </>
    )
}