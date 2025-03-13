import { Component, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 2 70%;
    
`

const SearchElement = styled.input`
    font-size: 1.2rem;
    padding: 0.2em;
    border: 1px solid rgb(var(--text-color));
    border-radius: 5px;
`

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.valueHandler = this.valueHandler.bind(this)
    }

    valueHandler(e) {
        this.setState((state) => ({
            ...state,
            value: e.target.value
        }))
    }

    render() {
        return (
            <Container>
                <SearchElement 
                    type="search" 
                    value={this.state.value} 
                    onChange={this.valueHandler}
                    placeholder="...search"
                />
            </Container>        
        )
    }
}

export default Search;