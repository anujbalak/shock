import { FooterGroup, FooterGroupContainer, FooterGroupHeading } from "../../Footer"
import Address from "./Address"
import Email from "./Email"
import Mobile from "./Mobile"

const Contact = () => {
    return (
        <FooterGroupContainer>
            <FooterGroupHeading>Contact</FooterGroupHeading>
            <FooterGroup>
                <Mobile />
                <Email />
                <Address />
            </FooterGroup>
        </FooterGroupContainer>
    )
}

export default Contact;