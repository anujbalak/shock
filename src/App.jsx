import styled from "styled-components"
import Header from "./components/Header"
import "./styles/app.css"
import backgroundImage from "/background/cart_bg.jpg"
import festivalImg from "/background/festival.jpg";
import ShoppingBtn from "./components/ShoppingBtn";
import Timer from "./components/Timer";
import { useEffect, useState } from "react";
import Category from "./components/Category";
import BeatLoader from 'react-spinners/BeatLoader'
import Footer from "./components/Footer";

const override = {
  display: "block",
  margin: "1em 2em",
}

const Homepage = styled.div`

`
const Top = styled.div`
  background: url(${backgroundImage});
  image-rendering: optimizeQuality;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-rows: auto 1fr;
`

const ShoppingPageContainer = styled.div`
  place-self: center;
`
const ShoppingPageText = styled.p`
  font-size: 1.5rem;
  max-width: 20em;
  color: #f6f7c9;
`

const FestivalSeason = styled.div`
  padding: 5em 0;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
const FestivalImage = styled.img`
  max-width: 50%;
  height: fit-content;
  margin: 1em 2em;
`
const FestivalText = styled.p`
  font-size: 1.4rem;
  max-width: 20em;
  margin-right: 2em;
`

const CategoriesContainer = styled.section`
  background-color: rgb(233, 231, 218);
  padding: 1em 0;
`
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2em;
  row-gap: 1em;
  margin: 1em;
  align-items: center;
  justify-content: space-evenly;
`

const CtgrText = styled.h3`
  margin-left: 1em;
  font-size: 1.6rem;
`

function App() {

  const [categories, setCategories] = useState(null);
  const ctgrLink = "https://dummyjson.com/products/categories"

  useEffect(() => {
    fetch(ctgrLink)
    .then(response => {

      return response.json()
    })
    .then(response => setCategories(response))
    .catch(error => console.error(error))
  }, [])
  

  const [products, setProducts] = useState(null);
  const productsLink = "https://dummyjson.com/products"

  useEffect(() => {
    fetch(productsLink)
    .then(response => response.json())
    .then(response => setProducts(response))
    .catch(error => console.log(error))
  }, [])

  return (
    <Homepage>
      <Top>
        <Header />
        <ShoppingPageContainer>
          {/* <ShoppingPageText>Shop the products those make you happy with discount and offers.</ShoppingPageText> */}
          <ShoppingBtn 
            testid="topShopBtn"
            categories={categories}
            products={products}  
          />
        </ShoppingPageContainer>
      </Top>
      <FestivalSeason>
        <FestivalImage src={festivalImg} alt="Festival" />
        <ShoppingPageContainer>
          <FestivalText>Celebrate this festival season with huge discounts on your favorite items.</FestivalText>
          <ShoppingBtn categories={categories} products={products}/>
          <Timer />
        </ShoppingPageContainer>
      </FestivalSeason>
      <CategoriesContainer>
        <CtgrText>Explore By Categories</CtgrText>
        {categories ?
          <Categories>
            {categories.map(category => {
              return (
                <Category name={category.name} key={category.slug} page="home" url={category.url}/>
              )
            })}
          </Categories>
          : 
          <BeatLoader
            loading={Boolean(!categories)}
            color="#545ef3"
            cssOverride={override}
          />       
        }
      </CategoriesContainer>
      <Footer />
    </Homepage>
  )
}

export default App
