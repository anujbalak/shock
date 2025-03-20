import Product, { DefaultButton } from "./Product"
import PropTypes from "prop-types"

export default function AddToCartButton({setCart, product}) {
    const handleAddButton = () => {
        setCart(cart => [
            ...cart,
            product,
        ])
    }

    return (
        <DefaultButton onClick={handleAddButton}>
            Add to Cart
        </DefaultButton>
    )
}

AddToCartButton.PropTypes = {
    setCart: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
}