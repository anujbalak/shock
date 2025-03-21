import { Link } from "react-router-dom"
import { FooterElement, FooterGroup, FooterGroupContainer, FooterGroupHeading } from "../../Footer"
import { Home, Store, ShoppingCart } from "lucide-react";

const Navbar = ({$about}) => {
    return (
        <FooterGroupContainer $about={$about}>
            <FooterGroupHeading $about>
                Jump to
            </FooterGroupHeading>
            <FooterGroup $about>
                <Link to="/">
                    <FooterElement $about>
                        <Home /> Home
                    </FooterElement>
                </Link>
                <Link to="/shopping">
                    <FooterElement $about>
                        <Store />Shop
                    </FooterElement>
                </Link>
                <Link to="/cart">
                    <FooterElement $about>
                        <ShoppingCart />Cart
                    </FooterElement>
                </Link>
            </FooterGroup>
        </FooterGroupContainer>
    )
}

export default Navbar;