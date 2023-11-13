import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err)
    return(
    <div>
        <h1>Oops...!</h1>
        <h3>The page link is broken. Check again</h3>
        <h3>{err.status}: {err.statusText}</h3>

    </div>
    )
}
export default Error;