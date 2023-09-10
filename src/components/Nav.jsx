import { Link } from "react-router-dom"

function Nav(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/title"}>Title</Link>
            <Link to={"/description"}>Description</Link>
        </nav>
    )
}
export default Nav;