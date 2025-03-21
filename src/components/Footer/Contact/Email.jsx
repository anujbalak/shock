import { Mail } from "lucide-react";
import { FooterElement, FooterElementContainer } from "../../Footer"

const Email = () => {
    return (
        <FooterElementContainer>
            <FooterElement>
                <Mail />shock@contact.fake.mail.com
            </FooterElement>
        </FooterElementContainer>
    )
}

export default Email;