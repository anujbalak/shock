import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "./ShoppingBtn";

const Container = styled.div`
    min-width: fit-content;

    &.category:first-of-type {
        margin-left: 1.5em;
    }
    &.category:last-of-type {
        margin-right: 1.5em;
    }
`
const Btn = styled(Button)`
    font-size: 1.3rem;
`

const ShopBtn = styled(Button)`
    font-size: 1.2rem;
    padding: 0.2em 0.5em;
    flex-grow: auto;

    &&:focus {
        transform: scale(1.1);
        background-color: rgb(42, 49, 150);
    }
`

class Category extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.page === 'home') {
            return (
                <Link to="shopping">
                    <Container>
                        <Btn>
                            {this.props.name}
                        </Btn>
                    </Container>
                </Link>
            )
        } 
        return (
            <Container className="category">
                <ShopBtn data-url={this.props.url} onClick={this.props.clickHandler}>
                    {this.props.name}
                </ShopBtn>
            </Container>
        );
    };
};

Category.PropTypes = {
    name: PropTypes.string,
    page: PropTypes.string
}

Category.defaultProps = {
    name: 'Category',
    page: 'shop'
}

export default Category;