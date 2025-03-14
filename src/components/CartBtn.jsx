import { Component } from "react";
import styled from "styled-components";
import cartImage from "/icons/cart.svg"
import { Link } from "react-router-dom";

const CartBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    flex: 1 2 10%;
`
const CartImg = styled.img`
    width: 30px;
`

class CartButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to="cart">
                <CartBtn >
                    <CartImg src={cartImage} alt=""/>
                </CartBtn>
            </Link>
        )
    }
}

export default CartButton;