import { Component, useState } from "react"
import styled from "styled-components"
import { HeaderContainer } from "../components/Header"
import Title from "../components/Title"
import { useNavigate, useOutletContext } from "react-router-dom"
import Product from "../components/product/Product"
import { Button } from "../components/ShoppingBtn"


const CartPage = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto;
`

const Header = styled(HeaderContainer)`
    display: flex;
    justify-content: center;
`
const CartCounter = styled.h2`
    
`
const CartItems = styled.div`
    
`
const BuyAll = styled(Button)`
    
`
const DialogBox = styled.dialog`
    place-self: center;
    display: grid;
    width: 80%;
    height: 80%;
    justify-content: center;
    border-radius: 10px;
    background-color: #fad0aa;
    flex-wrap: wrap;
    color: rgb(30, 30, 30);
    border: none;
    `
const ThankYouText = styled.h2`
    font-size: 2rem;
    place-self: center;
    
`
const EmptyCartText = styled.h2`
    align-self: baseline;
    justify-self: center;
`

function Cart()  {
    let navigate = useNavigate();

    const [showThankYou, setShowThankYou] = useState(false);
    const {cart, setCart} = useOutletContext();
    
    const buyAllHandler = () => {
        setCart([])
        setShowThankYou(true)
        setTimeout(() => {
            setShowThankYou(false)
            navigate('/shopping')
        }, 3000)
    }

    return(
        <CartPage>
            {showThankYou &&
                <DialogBox open>
                    <ThankYouText>
                        Thank you for purchase! <br/>
                        (But you will never gonna get it.)
                    </ThankYouText>
                </DialogBox>
            }
            <Header>
                <Title />
            </Header>            
            {cart.length > 0 ?
                <div style={{placeSelf: 'center'}}>
                    <>
                    <CartCounter>
                        Total Items {cart.length}
                    </CartCounter>
                    <CartItems>
                        {cart.map(product => {
                            return <Product key={product.id} product={product} page="cart"/>
                        })

                        }
                    </CartItems>
                    <BuyAll onClick={buyAllHandler}>
                        Purchase All
                    </BuyAll>
                    </>
                </div>     
                :
                <EmptyCartText>Add Something!</EmptyCartText>
            }
        </CartPage>
    )
}



export default Cart;