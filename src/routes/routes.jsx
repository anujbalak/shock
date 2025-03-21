import ErrorElement from "../error/error";
import Cart from "../web/Cart"
import Shopping from "../web/Shopping"
import Root from "../../Root";
import Home from "../web/Home";
import About from "../web/About";

const routes = [
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />,
                index: true,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/shopping",
                element: <Shopping />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },
]

export default routes;