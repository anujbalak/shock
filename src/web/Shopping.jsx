import { Component, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Category from "../components/Category";
import Product from "../components/product/Product";
import { HashLoader, ClimbingBoxLoader } from "react-spinners";
import { useOutletContext } from "react-router-dom";
import ProductPage from "../components/product/ProductPage";
import Flyout from "../components/Flyout";
import ShowMore from "../components/ShowMore";
import ShowLess from "../components/ShowLess";
import { TotalCounter } from "./Cart";


const ShoppingContainer = styled.div`
    display: grid;
    width: 100%;
`
const Categories = styled.div`
    display: flex;
    overflow: auto;
    gap: 1em;
    align-items: center;
    width: 100%;
    padding: 1em 0;
    place-self: center;
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
    url: "https://dummyjson.com/products?limit=190"
}
const ShowUtil = styled.div`
    display: flex;
    flex: 100%;
    margin-left: 5%;
    gap: 2em;
`

function Shopping() {
    const {
        cart, 
        products, 
        categories, 
        setProducts,
        message,
        setMessage,
    } = useOutletContext(); 

    const navigate = useNavigate();
    const productRef = useRef(null);
    const notificationRef = useRef(null);
    
    const [productToLoad, setProductToLoad] = useState(10);
    const [productsApi, setProductsApi] = useState('https://dummyjson.com/products?limit=190');

    const [clickedProduct, setClickedProduct] = useState(null)

    useEffect(() => {
        fetch(productsApi)
        .then(response => response.json())
        .then(response => setProducts(response.products))
        .catch(error => console.log(error))
    }, [productsApi])

    const handleCategoryClick = (e) => {
        setProductsApi(e.target.dataset.url)
    }

    const showProductDetails = (e) => {
        const product = products.find(product => product.id == e.target.dataset.productid)
        setClickedProduct(product)
        productRef.current.showModal();
        productRef.current.focus();
        setTimeout(() => {
            
        })
    }

    const removeClickedProduct = () => {
        productRef.current.close();
        setClickedProduct(null);
    }

    const handlNotificationCartClick = () => {
        navigate('/cart')
        setMessage(null);
        notificationRef.current.close();
        if (clickedProduct != null) {
            removeClickedProduct();
        }
    }
    
    return (
        <ShoppingContainer>
            {message != null &&
                <Flyout 
                    ref={notificationRef} 
                    handleBtnClick={handlNotificationCartClick}
                />
            }
            <ProductPage product={clickedProduct} ref={productRef} handleClose={removeClickedProduct}/>
            <Header cart={cart}/>
            {categories.length > 0 ?
                <Categories className="categories">
                    <Category 
                        key={allProducts.slug} 
                        name={allProducts.name}
                        url={allProducts.url}
                        clickHandler={handleCategoryClick} 
                    />
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
                    <TotalCounter>
                        Total Items:  
                        <span style={{color: '#858bef', fontSize: '2rem', fontWeight: "600"}}>{products.length}</span>
                    </TotalCounter>
                    {
                        products.map((product, index) => {  
                            if (index  < productToLoad) {
                                return (<Product 
                                    product={product} 
                                    key={product.id}
                                    handleClick={showProductDetails}
                                    notificationRef={notificationRef}
                                />)
                            }
                        })
                    }
                    <ShowUtil>
                        {productToLoad > 10 &&
                            <ShowLess setProductLoadNumber={setProductToLoad}/>
                        }
                        {productToLoad < products.length &&
                            <ShowMore setProductLoadNumber={setProductToLoad}/>
                        }
                    </ShowUtil>
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