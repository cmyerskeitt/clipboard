import {NavLink} from "react-router-dom"


export default function Navigaton(){
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/lessons/new">
                        Create a Clipboard
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/lessons">
                        All Clipboards
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}