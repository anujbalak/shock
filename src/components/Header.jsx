import { Component } from "react";
import Title from "./Title";
import Search from "./Search";
import styled from "styled-components";
import CartButton from "../components/CartBtn"

const HeaderContainer = styled.div`
    background-color: rgb(253, 211, 171, 60%);
    backdrop-filter: blur(10px);
`

const HeaderComponent = styled.header`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    align-items: center;
    max-width: 100%;
    justify-content: center;
    height: 4em;
    margin: 0 1em;
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
                    <CartButton />
                </HeaderComponent>
            </HeaderContainer>
        )
    }
}

export default Header;