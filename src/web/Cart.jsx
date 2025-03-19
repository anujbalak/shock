import { Component, useState } from "react"
import styled from "styled-components"
import { HeaderContainer } from "../components/Header"
import Title from "../components/Title"
import { useOutletContext } from "react-router-dom"
import Product from "../components/product/Product"


const CartPage = styled.div`
    min-height: 100vh;
`

const Header = styled(HeaderContainer)`
    display: flex;
    justify-content: center;
`
const CartCounter = styled.h2`
    
`
const CartItems = styled.div`
    
`

function Cart()  {

    const {cart, setCart} = useOutletContext();

    return(
        <CartPage>
            <Header>
                <Title />
            </Header>            
            <div>
                <CartCounter>
                    Total Items {cart.length}
                </CartCounter>
                <CartItems>
                    {cart.map(product => {
                        return <Product key={product.id} product={product} page="cart"/>
                    })

                    }
                </CartItems>
            </div>            
        </CartPage>
    )
}

export default Cart;