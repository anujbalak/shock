import { FooterElement, FooterGroup, FooterGroupContainer, FooterGroupHeading } from "../../Footer"
import { Link } from "react-router-dom";
const About = () => {
    return (
        <FooterGroupContainer>
            <FooterGroupHeading>
                About us
            </FooterGroupHeading>
            <FooterGroup>
                <Link to="about">
                    <FooterElement>
                        About
                    </FooterElement>
                </Link>
                <FooterElement as="a" href="https://github.com/anujbalak/shock/">
                    Github
                </FooterElement>
            </FooterGroup>
        </FooterGroupContainer>
    )
}

export default About;