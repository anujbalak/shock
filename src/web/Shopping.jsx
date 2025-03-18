import { Component, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Category from "../components/Category";
import Product from "../components/product/Product";
import { HashLoader, ClimbingBoxLoader } from "react-spinners";

const ShoppingContainer = styled.div`
`
const Categories = styled.div`
    margin: 0 1em;
    display: flex;
    overflow: auto;
    gap: 1em;
    align-items: center;
    width: 100%;
    padding: 1em 0;
`
const Products = styled.section`
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    gap: 3em;
    justify-content: center;
    margin: 2em 5%;
    max-width: 2000px;
`

const LoadingText = styled.span`
    font-size: 1.2rem;
`
const LoadingStyle = {
    color: "rgb(84, 91, 199)",
    margin: "1em 2em",
}

const allProducts = {
    name: 'All',
    slug: 'all',
    url: "https://dummyjson.com/products"
}
function Shopping() {
    const data  = useLocation();
    data.state.setCart(cart=> [
        ...cart,
        'apple'
    ])
    const [productsApi, setProductsApi] = useState('https://dummyjson.com/products');
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        if(data.state != null) {
            if(Boolean(data.state.categories) === true) {
                setCategories(data.state.categories)
            }
        } else {
            fetch("https://dummyjson.com/products/categories")
            .then(response => response.json())
            .then(response => setCategories(response))
            .catch(error => console.error(error))
        }
    }, [])
    
    useEffect(() => {
        if (categories != null) {
            setCategories(categories => ([
                allProducts,
                ...categories,
            ]))
        }
    }, [])

    useEffect(() => {
        if (data.state != null) {
            if (Boolean(data.state.products) === true) {
                setProducts(data.state.products.products)
            }
        } else {
            fetch(productsApi)
            .then(response => response.json())
            .then(response => setProducts(response.products))
            .catch(error => console.log(error))
        }
    }, [])

    useEffect(() => {
        fetch(productsApi)
        .then(response => response.json())
        .then(response => setProducts(response.products))
        .catch(error => console.log(error))
    }, [productsApi])

    const handleCategoryClick = (e) => {
        setProductsApi(e.target.dataset.url)
    }

    return (
        <ShoppingContainer>
            <Header cart={data.state.cart}/>
            {Boolean(categories) === true ?
                <Categories className="categories">
                    
                    {categories.map(catgory => {
                        return <Category 
                            key={catgory.slug} 
                            name={catgory.name}
                            url={catgory.url}
                            clickHandler={handleCategoryClick}
                        />
                    })}
                </Categories>
                : <>
                    <LoadingText>Categories are loading...</LoadingText>
                    <HashLoader loading={Boolean(!categories)}/>
                  </>
            }
            {Boolean(products) === true ?
                <Products>
                    {
                        products.map(product => (
                            <Product 
                                product={product} 
                                key={product.id}
                                setCart = {data.state.setCart}
                            />
                        ))
                    }
                </Products>    
                : <>
                    <LoadingText>Products are loading...</LoadingText>
                    <ClimbingBoxLoader loading={Boolean(!products)}/>
                  </>
            }
            <Footer />
        </ShoppingContainer>
    )
}

export default Shopping;