import { describe, expect, it } from "vitest";
import Header from "../../components/Header"
import { render, screen} from "@testing-library/react"
import Title from "../../components/Title";
import Search from "../../components/Search";
import userEvent from "@testing-library/user-event";
import CartButton from "../../components/CartBtn";

describe('Header component title', () => {
    it('title element is h1', () => {
        render(<Title />)
        
        expect(screen.getByRole("heading", {name: /shock/i})).toHaveTextContent('Shock');
    });

    it('input element is in web', () => {
        render(<Search />)

        expect(screen.getByRole("searchbox")).toBeInTheDocument();
    })
})

describe('Header search bar', () => {
    it('search bar is working', async() => {
        render(<Search />)
        const user = userEvent.setup();
        const input = screen.getByPlaceholderText(/search/i)
        await user.type(input, 'search is working')

        expect(input).toHaveValue('search is working')
    })

})

// describe('Header cart button', () => {
//     // it('cart button is working', async () => {
//     //     render(<CartButton />)
//     //     const user = userEvent.setup();
//     //     const button = screen.getByRole('button')
//     //     await user.click(button)
//     // })

//     it('cart button is present', () => {
//         render(<CartButton />)
//         const btn = screen.getByRole('button');
//         expect(btn).toBeInTheDocument();
//     })
// })