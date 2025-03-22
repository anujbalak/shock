import { useOutletContext } from "react-router-dom"
import { DefaultButton } from "./Product"
import PropTypes from "prop-types"

export default function PurchaseButton({handleRemove, id}) {
    const {setMessage} = useOutletContext();

    const handlePurchase = (e) => {
        setMessage('Thank you for your purchase!')
        setTimeout(() => {
            setMessage(null)
        }, 3000)

        if (Boolean(handleRemove) == true) {
            handleRemove(e)
        }
    }
    return (
        <>
            <DefaultButton onClick={handlePurchase} data-productid={id}>
                Purchase
            </DefaultButton>
        </>
    )
}

PurchaseButton.PropTypes = {
    handleRemove: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
    ]).isRequired,
}