import react from "react";
import {Link} from 'react-router-dom'
import "./style.css"

const Error = () =>{
    return(
        <div>
            Hellow Error<br/>
            <Link to="/" className="btn">Back To Home</Link>
        </div>
    )
}
export default Error