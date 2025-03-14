import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "./ShoppingBtn";

const Container = styled.div`

`
const Btn = styled(Button)`
    font-size: 1.3rem;
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
            <Container>
                <Btn>
                    {this.props.name}
                </Btn>
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