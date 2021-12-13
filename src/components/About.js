import profilepic from "../assets/profilepic.jpg"

function About() {
    return (
        <div className="about-section">
            <h1>&#123;About:</h1>
            <div className="aboutPicText">
                <img className= "profilePic" src={profilepic} alt="profile" />
                <div className= "aboutText">
                    <p>Hello! I'm a recent graduate looking to break into the tech industry as a Full-Stack Developer with a passion for web development and UI design. I mainly use Python and Javascript to code my projects but below are some of my most well known technologies.</p>
                    <div className="techIcons">
                        <p>&#123;</p>
                        <img alt="Python" title="Python" src="https://img.icons8.com/color/50/000000/python--v2.png"/>
                        <img alt="Javascript" title="Javascript" src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>
                        <img alt="React" title="React" src="https://img.icons8.com/color/48/000000/react-native.png"/>
                        <img alt="HTML" title="HTML" src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                        <img alt="Sass" title="Sass" src="https://img.icons8.com/color/48/000000/sass.png"/>
                        <img alt="Django" title="Django" src="https://img.icons8.com/color/48/000000/django.png"/>
                        <img alt="Java" title="Java" src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"/>
                        <img alt="C++" title="C++" src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/>
                        <img alt="Swift" title="Swift" src="https://img.icons8.com/color/48/000000/swift.png"/>
                        <img alt="PostgresSQL" title="PostgresSQL" src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
                        <p>&#125;</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default About