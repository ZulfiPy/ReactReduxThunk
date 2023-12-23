import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="Nav">
            <form className="searchForm">
                <label htmlFor="search">Search Module</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search module"
                />
            </form>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;