import { Component } from "react";
import styled from 'styled-components'
const Container = styled.div`
    
`
const TitleText = styled.h1`
    font-size: 2rem;
    cursor: pointer;
`

class Title extends Component {

    reloadPage() {
        location.reload();
    }
    render() {
        return (
            <Container>
                <TitleText onClick={this.reloadPage}>
                    Shock
                </TitleText>
            </Container>
        )
    }
}

export default Title;