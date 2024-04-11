import Background from "../assets/background.jpg"
import Nav from "./Nav"


export default function Header(){
return(
<header className="masthead">
        <img className="image" src={Background}/>
        <Nav />
            <div className="site-heading">x
                <h1>Clean Blog</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
            </div>

</header>
)

}