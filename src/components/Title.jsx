import { Component } from "react";
import styled from 'styled-components'
const Container = styled.div`
    flex: auto 2 20%;
`
const TitleText = styled.h1`
    font-size: 2rem;
    cursor: pointer;
    margin: 0;
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