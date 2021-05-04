import Navigation from "./Navigation"
import './header.css'

export default function HeaderContainer() {
    return (
        <div className="header">
            <center><h1>Clipboard</h1></center>
            <Navigation/>
        </div>
    )
}