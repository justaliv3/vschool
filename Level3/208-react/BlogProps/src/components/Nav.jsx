

export default function Nav(){
    return(
<nav>
            <img className="nav--logo" />
            <div className="menu">
                <div className="home">
                    <a style={{fontWeight: "bold"}}>Start Bootstrap</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="list">
                        <li className="nav-item">About</li>
                        <li className="nav-item">Sample Post</li>
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Contact</li>
                    </ul>
                </div>
            </div>
</nav>

    )
}