import { Link } from "react-router-dom"
import { FooterElement, FooterGroup, FooterGroupContainer, FooterGroupHeading } from "../../Footer"

const Navbar = ({$about}) => {
    return (
        <FooterGroupContainer $about={$about}>
            <FooterGroupHeading $about>
                Jump to
            </FooterGroupHeading>
            <FooterGroup $about>
                <Link to="/">
                    <FooterElement $about>
                        Home
                    </FooterElement>
                </Link>
                <Link to="/shopping">
                    <FooterElement $about>
                        Shop
                    </FooterElement>
                </Link>
                <Link to="/cart">
                    <FooterElement $about>
                        Cart
                    </FooterElement>
                </Link>
            </FooterGroup>
        </FooterGroupContainer>
    )
}

export default Navbar;