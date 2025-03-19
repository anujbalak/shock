import { Component } from "react";
import Title from "./Title";
import Search from "./Search";
import styled from "styled-components";
import CartButton from "../components/CartBtn"

export const HeaderContainer = styled.div`
    background-color: rgb(253, 211, 171, 60%);
    backdrop-filter: blur(10px);
    height: max-content;
`

const HeaderComponent = styled.header`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    align-items: center;
    max-width: 100%;
    justify-content: center;
    margin: 0 1em;
    height: 4em;
`

class Header extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <HeaderContainer>
                <HeaderComponent>
                    <Title />
                    <Search />
                    <CartButton cart={this.props.cart}/>
                </HeaderComponent>
            </HeaderContainer>
        )
    }
}

export default Header;