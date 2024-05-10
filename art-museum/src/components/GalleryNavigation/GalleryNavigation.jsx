import { NavLink } from "react-router-dom";

const GalleryNavigation = ({galleries}) => {
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink 
                to="/"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
                }
            >
            </NavLink>
        </nav>
    )
}

export default GalleryNavigation;