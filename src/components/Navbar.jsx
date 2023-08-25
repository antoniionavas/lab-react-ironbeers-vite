import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>

        <nav style={{display:"flex", justifyContent:"center", backgroundColor:"#3dc4fc", padding:"50px"}}>
            <Link to="/"><img src="src/assets/home-icon.png"></img></Link>
        </nav>

    </div>
  )
}

export default Navbar
