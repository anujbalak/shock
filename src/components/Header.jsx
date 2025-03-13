import { Component } from "react";
import Title from "./Title";
import Search from "./Search";
import styled from "styled-components";

const HeaderComponent = styled.header`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    align-items: center;
    width: 100%;
    justify-content: center;
`

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HeaderComponent>
                <Title />
                <Search />
            </HeaderComponent>
        )
    }
}

export default Header;