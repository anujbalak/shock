import App from "../App";
import ErrorElement from "../error/error";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorElement />,
    },
]

export default routes;