import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const useData = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState(null);
    const [cart, setCart] = useState([])
    const [message, setMessage] = useState(null);

    const categoryLink = "https://dummyjson.com/products/categories"
    const productsLink = "https://dummyjson.com/products?limit=190"

    useEffect(() => {
        const fetchData = async () => {
            const result = (
                await Promise.all([
                fetch(categoryLink),
                fetch(productsLink),
            ])
            ).map((response) => response.json());

            const [categoryResult, productsResult] = await Promise.all(result);

            setCategories(categoryResult)
            setProducts(productsResult.products)
        }
        fetchData();
    }, [])

    return {
        categories, 
        setCategories, 
        products, 
        setProducts, 
        cart, 
        setCart,
        message,
        setMessage,
    }
}

export default function Root() {
    const {categories, 
        setCategories, 
        products, 
        setProducts, 
        cart, 
        setCart,
        message,
        setMessage,
    } = useData();

    return (
        <>
            <Outlet context={{
                    categories, 
                    setCategories, 
                    products, 
                    setProducts, 
                    cart, 
                    setCart,
                    message,
                    setMessage
                }}/>
        </>
    )
}