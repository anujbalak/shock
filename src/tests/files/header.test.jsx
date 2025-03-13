import { describe, expect, it } from "vitest";
import Header from "../../components/Header"
import { render, screen} from "@testing-library/react"
import Title from "../../components/Title";
import Search from "../../components/Search";

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