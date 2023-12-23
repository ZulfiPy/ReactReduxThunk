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
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;