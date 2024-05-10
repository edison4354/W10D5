import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';

const GalleryNavigation = ({galleries}) => {
    // return (
    //     <nav>
    //         <h1>Galleries</h1>
    //         <NavLink 
    //             to="/"
    //             className={({ isActive, isPending }) =>
    //             isPending ? "pending" : isActive ? "active" : ""
    //             }
    //         >Link
    //         </NavLink>
    //     </nav>
    // )

    const galleriesList =  galleries.map((gallery) => {
            return (<li key={gallery.id}><NavLink 
                    to={`/galleries/${gallery.id}`}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                    }
                >{gallery.name}
                </NavLink>
                </li>
            )
    });

    return (
        <>
            <NavLink 
                to="/"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
                }
            >Homepage
            </NavLink>
            <ol>{galleriesList}</ol>
        </>
    )
}

export default GalleryNavigation;