import { Link } from "react-router-dom"
import { FooterElement, FooterGroup, FooterGroupContainer, FooterGroupHeading } from "../../Footer"

const Navbar = () => {
    return (
        <FooterGroupContainer>
            <FooterGroupHeading>
                Jump to
            </FooterGroupHeading>
            <FooterGroup>
                <Link to="/">
                    <FooterElement>
                        Home
                    </FooterElement>
                </Link>
                <Link to="shopping">
                    <FooterElement>
                        Shop
                    </FooterElement>
                </Link>
                <Link to="cart">
                    <FooterElement>
                        Cart
                    </FooterElement>
                </Link>
            </FooterGroup>
        </FooterGroupContainer>
    )
}

export default Navbar;