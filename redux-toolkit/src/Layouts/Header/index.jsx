import { NavLink } from "react-router-dom"
import styles from "./index.module.css"
import { useSelector } from "react-redux"

const Header = () => {

    const wishlist = useSelector((state) => state.wishlist)

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Product</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/add-edit"}>AddProduct</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/wishlist"}>Wishlist <sup>{wishlist?.items.length}</sup></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/basket"}>Basket</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
