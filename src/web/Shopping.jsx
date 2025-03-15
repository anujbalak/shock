import { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";

const ShoppingContainer = styled.div`
    
`


class Shopping extends Component {
    

    render() {
        return (
            <ShoppingContainer>
                <Header />
                Shopping page
            </ShoppingContainer>
        )
    }
}

export default Shopping;