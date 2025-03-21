import styled from "styled-components"
import { Header } from "./Cart"
import Title from "../components/Title"
import Footer from "../components/Footer"
import Navbar from "../components/Footer/Navbar/Navbar"

const Aboutpage = styled.div`
`
const Page = styled.div`
    min-height: 100vh;
    display: flex;
    gap: 2em;
    flex-direction: column;
    margin: 2em 1em;
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 10px;
`
const Url = styled.a`
    font-size: 1.4rem;
    color: rgb(11, 45, 95);
    text-decoration: none;
    &:hover, &:focus {
        text-decoration: underline;
    }
    &::after {
        content: "-";
    }
`
const Description = styled.p`
    font-size: 1.2rem;
    margin: 0;
`
export default function About() {
    return (
        <Aboutpage>
            <Header>
                <Title />
            </Header>
            <Page>
                <Description>
                    This website has built using these tools and technologies.
                </Description>
                <Container>
                    <Url href="https://vite.dev" target="__blank">Vite + React</Url>
                    <Description>A framework.</Description>
                </Container>
                <Container>
                    <Url href="https://vitest.dev/" target="__blank">Vitest</Url>
                    <Description>A Vite-native testing framework.</Description>
                </Container>
                <Container>
                    <Url href="https://testing-library.com/docs/" target="__blank">React Testing Library</Url>
                    <Description>Simple and complete testing utilities that encourage good testing practices</Description>
                </Container>
                <Container>
                    <Url href="https://lucide.dev" target="__blank">Lucide</Url>
                    <Description>Beautiful &
                    consistent icons</Description>
                </Container>
                <Container>
                    <Url href="https://legacy.reactjs.org/docs/typechecking-with-proptypes.html" target="__blank">React Proptypes</Url>
                    <Description>Typechecking With PropTypes</Description>
                </Container>
                <Container>
                    <Url href="https://www.reactrouter.com/" target="__blank">React Router</Url>
                    <Description>A user‑obsessed, standards‑focused, multi‑strategy router you can deploy anywhere.</Description>
                </Container>
                <Container>
                    <Url href="https://svgrepo.com" target="__blank">Svg Repo</Url>
                    <Description>earch, explore and edit the best-fitting free icons or vectors for your projects using a wide variety vector library. Download free SVG vectors and icons for commercial use.</Description>
                </Container>
                <Container>
                    <Url href="https://www.cloudflare.com/" target="__blank">Cloudfare</Url>
                    <Description>Connect, protect, and build everywhere</Description>
                </Container>
                <Container>
                    <Url href="https://github.com/anujbalak/shock" target="__self">Github Repo</Url>
                </Container>
                <Navbar $about/>
            </Page>
            <Footer />
        </Aboutpage>
    )
}