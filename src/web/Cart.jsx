import { Component } from "react"
import styled from "styled-components"

const CartPage = styled.div`
    min-height: 100vh;
`

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <CartPage>
                empty page
            </CartPage>
        )
    }
}

export default Cart;