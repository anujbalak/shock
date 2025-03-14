import styled from "styled-components"
import Header from "./components/Header"
import "./styles/app.css"
import backgroundImage from "/background/cart_bg.jpg"
import festivalImg from "/background/festival.jpg";
import ShoppingBtn from "./components/ShoppingBtn";
import Timer from "./components/Timer";
import { useEffect, useState } from "react";


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

const Categories = styled.div`
  
`

function App() {

  const [categories, setCategories] = useState(null);
  const ctgrLink = "https://dummyjson.com/products/categories"

  useEffect(() => {
    fetch(ctgrLink)
    .then(response => {

      return response.json()
    })
    .then(response => console.log(response))
  }, [])

  return (
    <Homepage>
      <Top>
        <Header />
        <ShoppingPageContainer>
          {/* <ShoppingPageText>Shop the products those make you happy with discount and offers.</ShoppingPageText> */}
          <ShoppingBtn />
        </ShoppingPageContainer>
      </Top>
      <FestivalSeason>
        <FestivalImage src={festivalImg} alt="Festival" />
        <ShoppingPageContainer>
          <FestivalText>Celebrate this festival season with huge discounts on your favorite items.</FestivalText>
          <ShoppingBtn />
          <Timer />
        </ShoppingPageContainer>
      </FestivalSeason>
      <Categories>

      </Categories>
    </Homepage>
  )
}

export default App
