import App from "../App";
import ErrorElement from "../error/error";
import Cart from "../web/Cart"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorElement />,
    },
    {
        path: "cart",
        element: <Cart />,
    }
]

export default routes;