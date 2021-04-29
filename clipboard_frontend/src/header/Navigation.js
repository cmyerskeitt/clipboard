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
                        Clipboard
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/lessons">
                        All Lessons
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}