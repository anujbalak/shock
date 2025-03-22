import { screen, render } from "@testing-library/react";
import  { describe, expect, it, vi} from "vitest"
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Mobile from "../../components/Footer/Contact/Mobile";
import routes from "../../routes/routes";


const categories = [
    {
        name: 'dude',
        slug: 1,
        url: 1,
    },
    {
        name:2,
        slug: 2,
        url: 2
    }
]

window.fetch = vi.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(categories),
    }); 
})


describe('Categories loading', () => {
    it('category text is presetnt', () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ["/"],
        })
      render(<RouterProvider router={router}/>)
      expect(screen.getByText(/explore by categories/i)).toBeInTheDocument()  
    })
})