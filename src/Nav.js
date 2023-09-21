import { Link } from "react-router-dom"
import './Nav.css'

let Nav=(props)=>{
    return(
        <div className="con">
            <Link to="/">Results</Link>
          { props.token==""&& <Link to="/login">Login</Link>}
          { props.token!="" &&<Link to="/add">AddRes</Link>}
          { props.token!="" &&<Link to="/logout">Logout</Link>}
        </div>
    )
}
export default Nav