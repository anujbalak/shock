import { Component, useRef, useState } from "react"
import styled from "styled-components"
import { HeaderContainer } from "../components/Header"
import Title from "../components/Title"
import { useNavigate, useOutletContext } from "react-router-dom"
import Product from "../components/product/Product"
import { Button } from "../components/ShoppingBtn"
import Footer from "../components/Footer"
import ProductPage from "../components/product/ProductPage"
import Flyout from "../components/Flyout"

const CartPage = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto;
`

const Header = styled(HeaderContainer)`
    display: flex;
    justify-content: center;
    height: 3em;
`
const CartCounter = styled.h2`
    
`
const CartItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 10vw;
    gap: 3em;
    justify-content: center;
    column-gap: 5em;
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
const TotalCost = styled.span`
    font-size: 1.5rem;
    display: flex;
    gap: 10px;
    align-items: center;
`

function Cart()  {
    let navigate = useNavigate();

    const productRef = useRef(null);
    const notificationRef = useRef(null);
    const [showThankYou, setShowThankYou] = useState(false);
    const {cart, setCart, message, setMessage} = useOutletContext();
    const [clickedProduct, setClickedProduct] = useState(null)
    
    let totalCost = 0;
    for(let i = 0; i < cart.length; i++) {
        totalCost += Math.floor((cart[i].price * 18).toFixed() * (100 - cart[i].discountPercentage) / 100);
    }
    const buyAllHandler = () => {
        setCart([])
        setShowThankYou(true)
        setTimeout(() => {
            setShowThankYou(false)
            navigate('/shopping')
        }, 3000)
    }

    const showProductDetails = (e) => {
        const product = cart.find(product => product.id == e.target.dataset.productid)
        setClickedProduct(product)
        if (productRef.current !== null) {
            productRef.current.showModal();
            productRef.current.focus();
        }
    }

    const removeClickedProduct = () => {
        productRef.current.close();
        setClickedProduct(null);
    }

    return(
        <CartPage>
            {message != null &&
                <Flyout 
                    ref={notificationRef} 
                />
            }
            {clickedProduct != null &&
                <ProductPage product={clickedProduct} ref={productRef} handleClose={removeClickedProduct}/>
            }
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
                <div 
                    style={{
                        placeSelf: 'center', 
                        display:'grid', 
                        placeItems:"center", 
                        gridTemplateRows: "auto", 
                        width:"100%",
                        gap: "2em",
                        maxWidth: "2000px"
                    }}>
                    <>
                    <CartCounter>
                        Total Items {cart.length}
                    </CartCounter>
                    <CartItems>
                        {cart.map(
                            product => {
                                return <Product 
                                    key={product.id} 
                                    product={product} 
                                    page="cart"
                                    handleClick={showProductDetails}
                                />
                            })
                        }
                    </CartItems>
                    <TotalCost>
                        Total Cost:  
                        <span style={{color: 'tomato', fontSize: '2rem', fontWeight: "600"}}>{totalCost}</span>
                    </TotalCost>
                    <BuyAll onClick={buyAllHandler}>
                        Checkout
                    </BuyAll>
                    </>
                </div>     
                :
                <EmptyCartText>Add Something!</EmptyCartText>
            }
            <Footer />
        </CartPage>
    )
}



export default Cart;