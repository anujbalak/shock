import styled, {keyframes} from "styled-components"
import { Button } from "./ShoppingBtn"
import { CloseButton } from "./product/ProductPage"
import PropTypes from "prop-types"
import { SquareX  } from "lucide-react"
import { useOutletContext } from "react-router-dom"

const swipe = keyframes`
    0% {
        transform: translate(0, -4em);
    }
    100% {
        transform: translate(0, 1em);
    }
`
const FlyoutDialog = styled.dialog`
    position: fixed;
    z-index: 3;
    background-color: #fbe1c3;
    border: 1px solid rgb(30, 30, 30);
    padding: 5px 10px;
    display: flex;
    border-radius: 10px;
    max-width: 300px;
    flex-wrap: wrap;
    transform: translate(0, 1em);
    animation: ${swipe} 0.3s ease-in-out;
`
const Message = styled.p`
    font-size: 1.2rem;
    color: rgb(30, 30, 30);
    max-width: 90%;
`

const CartButton = styled(Button)`
    font-size: 1.4rem;
`

const Flyout = ({ref, handleBtnClick}) => {
    const {message, setMessage} = useOutletContext();
    let showButton = true;
    if (message === 'Thank you for your purchase!') {
        showButton = false;
    }
    const handleClose = () => {
        setMessage(null);
        ref.current.close()
    }
    
    return (
        <FlyoutDialog ref={ref} >
            <CloseButton onClick={handleClose}>
                <SquareX color='tomato' className="cancel" size='36px'/>
            </CloseButton>
            <Message>
                {message}
            </Message>
            {showButton &&
                <CartButton onClick={handleBtnClick}>
                    Go to cart
                </CartButton>
            }
        </FlyoutDialog>
    )
}

Flyout.PropTypes = {
    ref: PropTypes.any.isRequired,
    handleBtnClick: PropTypes.func,
    handleClose: PropTypes.func.isRequired,
    showButton: PropTypes.bool,
}

export default Flyout;
