import comp from '../assets/macbook2.png'
import { Link } from 'react-scroll'

function Hero( {userText} ) {
    return (
        <div className="hero-section" id="home">
            <div className="text-wrapper">
                <h1 style={{color: "white"}}>&#123;</h1>
                <h1 style={{ marginLeft:"1rem"}}>'Malcolm Hess':</h1>
                <h2 style={{ marginLeft:"1rem"}}>'Full-Stack Developer'</h2>
                <h1 style={{color: "white"}}>&#125;</h1>
                <Link to="projectScroll" smooth={true} duration={500}>View Projects</Link>
                {userText !== "" && <h1 style={{color: "white"}}>&#123;</h1>}
                {userText !== "" && <h2>'{userText}'</h2>}
                {userText !== "" && <h1 style={{color: "white"}}>&#125;</h1>}
            </div>
            <div className='computerWrapper'>
                <img className="computer-pic" src={comp} alt="computer"/>
            </div>
        </div>
    )
}

export default Hero
