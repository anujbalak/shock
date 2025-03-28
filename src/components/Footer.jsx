import { Component } from "react";
import styled from "styled-components";
import Contact from "./Footer/Contact/Contact";
import Navbar from "./Footer/Navbar/Navbar";
import About from "./Footer/About/About";

const FooterContainer = styled.div`
    padding: 2em;
    background-color: #434a62;
    color: #e4e3e0;
    display: flex;
    justify-content: center;

`
const FooterComponent = styled.footer`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5em;
    row-gap: 2em;
`

export const FooterGroupContainer = styled.div`
    
`
export const FooterGroupHeading = styled.h3`
    font-size: 1.3rem;
    color: currentColor;
`
export const FooterGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: 300px;
    &&>a {
        color: currentColor;
        text-decoration: none;
    }
    &&>a:hover, &&>a:focus {
     text-decoration: underline;
     color: currentColor;
    }
`

export const FooterElementContainer = styled.div`
    
`
export const FooterElement = styled.span`
    display: flex;
    gap: 5px;
    align-items: center;
    color: currentColor;
    opacity: 70%;
    font-weight: ${props => props.$about ? 600 : 500};
    &&:focus, &&:hover {
        opacity: 100%;
    }
`

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <FooterContainer>
                <FooterComponent>
                    <Contact />
                    <Navbar />
                    <About />
                </FooterComponent>
            </FooterContainer>
        )
    }
}

export default Footer;