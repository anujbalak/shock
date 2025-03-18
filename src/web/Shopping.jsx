import { Component, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Category from "../components/Category";
import Product from "../components/product/Product";
import { HashLoader, ClimbingBoxLoader } from "react-spinners";
import { useOutletContext } from "react-router-dom";


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
    margin-top: 1em;
    margin-left: 1em;
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
    const {
        cart, 
        setCart, 
        products, 
        categories, 
        setProducts,
        setCategories,
    } = useOutletContext(); 
    
    const [productsApi, setProductsApi] = useState('https://dummyjson.com/products');

    useEffect(() => {
        if (Boolean(categories) == false){
            fetch("https://dummyjson.com/products/categories")
            .then(response => response.json())
            .then(response => setCategories(response))
            .catch(error => console.error(error));

            setCategories(categories => ([
                allProducts,
                ...categories,
            ]));
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
            <Header cart={cart}/>
            {categories.length > 0 ?
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
                    <HashLoader  cssOverride={LoadingStyle}/>
                  </>
            }
            {Boolean(products) === true ?
                <Products>
                    {
                        products.map(product => (
                            <Product 
                                product={product} 
                                key={product.id}
                                setCart={setCart}
                            />
                        ))
                    }
                </Products>    
                : <>
                    <LoadingText>Products are loading...</LoadingText>
                    <ClimbingBoxLoader loading={Boolean(!products)} cssOverride={LoadingStyle}/>
                  </>
            }
            <Footer />
        </ShoppingContainer>
    )
}

export default Shopping;