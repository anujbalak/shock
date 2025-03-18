import App from "../App";
import ErrorElement from "../error/error";
import Cart from "../web/Cart"
import Shopping from "../web/Shopping"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorElement />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/shopping",
        element: <Shopping />
    }
]

export default routes;