import { Link, useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const error = useRouteError();
    console.error(error)

    return (
        <div className="errorPage">
            <h2>This page is blank.</h2>
            <p>{error.status} {error.statusText}</p>
            <p>Return to home.</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default ErrorElement;