import {
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    {/* das ist quasi unser a tag mit href
              es wurde nur in Link to geändert */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
