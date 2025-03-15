import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 0.4em 1em;
    color: snow;
    background-color: rgba(84, 94, 243, 100%);
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 700;
    transition: background-color ease-in-out 0.3s;
    backdrop-filter: blur(10px);

    &&:hover, &&:focus {
        background-color: rgba(84, 94, 243, 70%);

    }
`

class ShoppingBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Link to="shopping">
                <Button data-testid={this.props.tesid}>
                    Shop ➞
                </Button>
            </Link>
        )
    }
}

ShoppingBtn.PropTypes = {
    testid: PropTypes.string,
}

ShoppingBtn.defaultProps = {
    testid: 'shoppingBtn'
}
export default ShoppingBtn;