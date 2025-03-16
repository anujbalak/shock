import { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Category from "../components/Category";

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
`


function Shopping() {
    const data  = useLocation();
    const categories = data.state;
    
    return (
        <ShoppingContainer>
            <Header />
            <Categories className="categories">
                {categories.map(catgory => {
                    return <Category name={catgory.name}/>
                })}
            </Categories>
            <Products>

            </Products>    
            <Footer />
        </ShoppingContainer>
    )
}

export default Shopping;