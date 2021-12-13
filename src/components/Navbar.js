import { Link } from 'react-scroll'

function Navbar( {showNav} ) {

    return (
        <div className="nav-bar" style={showNav ? {} : {width: 0}}>
            <ul>
                <h1 style={showNav ? {} : {marginRight: '11rem'}}>&lt;MH3&gt;</h1>
                <Link activeClass="active" className= "aLink" to="homeScroll" spy={true} smooth={true} duration={500} style={showNav ? {} : {marginRight: '11rem'}}>Home</Link>
                <Link activeClass="active" className= "aLink" to="projectScroll" spy={true} smooth={true} duration={500} style={showNav ? {} : {marginRight: '11rem'}}>Projects</Link>
                <Link activeClass="active" className= "aLink" to="aboutScroll" spy={true} smooth={true} duration={500} style={showNav ? {} : {marginRight: '11rem'}}>About</Link>
                <Link activeClass="active" className= "aLink" to="contactScroll" spy={true} smooth={true} duration={500} style={showNav ? {} : {marginRight: '11rem'}}>Contact</Link>
            </ul>
        </div>
    )
}

export default Navbar
