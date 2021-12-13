import Frame1 from "../assets/Frame1.png"
import Frame2 from "../assets/Frame2.png"
import Frame3 from "../assets/Frame3.png"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useState } from "react"
import Modal from '@mui/material/Modal'
import ModalProject from "./ModalProject"

function Projects() {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const [index, setIndex] = useState(0)

    const styles = {
        width: "100%", 
        height: "auto"
    }

    const carouselOptions = {
        width: "80%",
        dynamicHeight: false,
        emulateTouch: true,
        infiniteLoop: true,
        onClickItem: (index) => (showModal(index))
    }

    const showModal = (index) => {
        setOpen(true)
        setIndex(index)
    }
    
    return (
        <div className="project-section" id="project">
            <h1>&#123;Projects:</h1>
            <div className="proCarousel">
                <Carousel {...carouselOptions} >
                    <div>
                        <img src={Frame1} alt="project" style={styles}/>
                        <p className="legend">More Info</p>
                    </div>
                    <div>
                        <img src={Frame2} alt="project" style={styles}/>
                        <p className="legend">More Info</p>
                    </div>
                    <div>
                        <img src={Frame3} alt="project" style={styles}/>
                        <p className="legend">More Info</p>
                    </div>
                </Carousel>
            </div>
            <Modal open={open} onClose={handleClose}>
                <ModalProject index={index}/>
            </Modal>
        </div>
    )
}

export default Projects
