import { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Category from "../components/Category";
import Product from "../components/product/Product";

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


function Shopping() {
    const data  = useLocation();
    const categories = data.state.categories;
    const products = data.state.products.products;
    console.log(products)
    return (
        <ShoppingContainer>
            <Header />
            <Categories className="categories">
                {categories.map(catgory => {
                    return <Category key={catgory.slug} name={catgory.name} />
                })}
            </Categories>
            <Products>
                {
                    products.map(product => {
                        return <Product product={product} key={product.id}/>
                    })
                }
            </Products>    
            <Footer />
        </ShoppingContainer>
    )
}

export default Shopping;