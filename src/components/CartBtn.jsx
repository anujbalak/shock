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
const TotalItems = styled.span`
    position: absolute;
    text-decoration: none;
    color: #e7e4d4;
    background-color: tomato;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 700;
    padding: 2px 5px;
    transform: translate(-60%, -30%);
`

class CartButton extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <Link to="/cart" >
                <CartBtn >
                    <CartImg src={cartImage} alt=""/>
                </CartBtn>
                {this.props.cart.length > 0 &&
                    <TotalItems>
                        {this.props.cart.length}
                    </TotalItems>
                }
            </Link>
        )
    }
}

export default CartButton;