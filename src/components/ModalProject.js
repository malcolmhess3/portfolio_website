import React from "react"
import info from "../assets/projectsInfo.json"

const ModalProject = React.forwardRef((props, ref ) => {
    return (
        <div className="proModal">
            <h1>{info[props.index].Title}</h1>
            <p>{info[props.index].Info}</p>            
            {info[props.index].Live !== "" && <a href={info[props.index].Live} target="_blank" rel="noreferrer">Live Demo</a>}     
            <a href={info[props.index].Github} target="_blank" rel="noreferrer">Github</a>            
        </div>
    )
})

export default ModalProject
