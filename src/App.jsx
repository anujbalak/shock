import styled from "styled-components"
import Header from "./components/Header"
import "./styles/app.css"
import backgroundImage from "/background/cart_bg.jpg"
const Homepage = styled.div`
  
`
const Top = styled.div`
  background-image: url(${backgroundImage});
  min-height: 100vh;
  background-position: center;
  background-size: cover;
`

function App() {

  return (
    <Homepage>
      <Top>
        <Header />
      </Top>
    </Homepage>
  )
}

export default App
