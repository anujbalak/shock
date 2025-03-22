import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../../components/Footer";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../../routes/routes";
import Mobile from "../../components/Footer/Contact/Mobile";
import Email from "../../components/Footer/Contact/Email";
import About from "../../components/Footer/About/About";

describe('footer component', () => {
    it('mobile number', () => {
        render(<Mobile />)
    //     const router = createMemoryRouter(routes, {
    //         initialEntries: ["/"],
    //     })
    //   render(<RouterProvider router={router}/>)
        const mobileNum = screen.getByText(/23456789/)
        expect(mobileNum).toBeInTheDocument();
    })

    it('email', () => {
        render(<Email />)
        
        const email = screen.getByText(/shock@contact/i)
        expect(email).toBeInTheDocument();
    })
})