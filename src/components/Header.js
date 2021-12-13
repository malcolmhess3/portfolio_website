import { useState } from "react"

function Header( {onClick, onEditClick, userText, onXClick, onViewClick, onHelpClick} ) {
    const [dropDown, setDropDown] = useState(false)
    return (
        <header>
            <button onClick={onClick}>File</button>
            <button onClick={() => (setDropDown(!dropDown))}>Edit</button>
            <button onClick={onViewClick}>View</button>
            <button onClick={onHelpClick}>Help</button>
            <input className={"editText"} style={dropDown ? {} : {marginBottom: "10rem"}} placeholder="Edit home page: try typing something" type="text" value={userText} onChange={(e) => onEditClick(e.target.value)}/>
            <button onClick={onXClick} style={{marginLeft: "auto"}}>X</button>
        </header>
    )
}

export default Header
