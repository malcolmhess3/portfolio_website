import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './css/main.scss';
import { useState } from 'react';
import { Element } from 'react-scroll'
import MyAlert from './components/MyAlert'


function App() {
  const [showNav, setShowNav] = useState(true)
  const [userText, setUserText] = useState("")
  const [showApp, setShowApp] = useState(true)
  const [showViewAlert, setShowViewAlert] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  
  const helpMeText = "File: Open and close menu — Edit: Edit the home page — View: See alert — Help: Get help — X: Close app"

  const showNavHandler = () =>{
    setShowNav(!showNav)
  }
  
  const updateUserText = (value) => (
    setUserText(value)
  )

  const showAppHandler = ()=> {
    setShowApp(!showApp)
  }

  const showViewAlertHandler = ()=> {
    setShowViewAlert(!showViewAlert)
  }

  const showHelpHandler = ()=> {
    setShowHelp(!showHelp)
  }

  return (
    <div className="App">
      <div className="Prank" style={showApp ? {} : {display: "none"}}>
        <Header onClick = {showNavHandler} showNav={showNav} onEditClick= {updateUserText} userText={userText} onXClick={showAppHandler} onViewClick={showViewAlertHandler} onHelpClick={showHelpHandler}/>
        <Navbar showNav = {showNav} onClick = {showNavHandler} />
        <div className="main-body-wrapper" style={ showNav ? {} : {marginLeft: '2rem'}}>
          <MyAlert open={showViewAlert} onClick={showViewAlertHandler} text={"Just a regular alert message"}  />
          <MyAlert open={showHelp} onClick={showHelpHandler} text={helpMeText} type={"info"}  />
          <Element name="homeScroll">
            <Hero userText={userText}/>
          </Element>
          <Element name="projectScroll">
            <Projects/>
          </Element>
          <Element name="aboutScroll">
            <About/>
          </Element>
          <Element name="contactScroll">
            <Contact/>
          </Element>
        </div>
        <Footer/>
      </div>
      {!showApp && 
        <div style={{backgroundColor: "white"}} >
          <p>App Closed</p>
          <button onClick={showAppHandler}>Reopen</button>
        </div>}
    </div>
  );
}

export default App;
