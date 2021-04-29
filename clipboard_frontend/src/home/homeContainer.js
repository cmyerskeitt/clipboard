import homeImage from './homeImage.jpg'
import './home.css'

export default function HomeContainer(){
    return (
        <div id="home-container">
            <h2>Welcome to Clipboard!</h2>
            <p>
            Clipboard is a lesson agenda app designed to help make preparing for your day easier. 
            Add your lesson information and quickly pinpoint when you will be teaching what. 
            </p>
            {/* <img scr={homeImage} alt="Woman holding Clipboard with calendar displayed" id="home-image"/><br></br>
            <small>
                Photo source: <a href="https://images.unsplash.com/photo-1484981184820-2e84ea0af397?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80">Brooke Lark</a>
            </small> */}
        </div>
    )
}
