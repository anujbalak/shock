import { useOutletContext } from "react-router-dom";
import Product, { DefaultButton } from "./Product"
import PropTypes from "prop-types"


export default function AddToCartButton({setCart, product, notificationRef}) {
    const {cart, setMessage} = useOutletContext();

    const handleAddButton = () => {
        setTimeout(() => {
            if (notificationRef.current !== null) {
                notificationRef.current.show();
            }
            setMessage(null)
        }, 3000)

        if (cart.some(p => p.id == product.id)) {
            setMessage('This product is already on cart');
            return  
        } 
        setCart(cart => [
            ...cart,
            product,
        ])
        setMessage('Thank for your purchase, keep shopping!')
        if (notificationRef.current !== null) {
            notificationRef.current.show();
        }
        return
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