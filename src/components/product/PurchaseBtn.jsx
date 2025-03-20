import { DefaultButton } from "./Product"
import PropTypes from "prop-types"

export default function PurchaseButton({handleRemove, id}) {
    const handlePurchase = (e) => {
        handleRemove(e)
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