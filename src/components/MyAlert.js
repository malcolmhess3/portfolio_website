import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

function MyAlert( {open, onClick, type, text} ) {
    return (
        <div style={open ? {margin: "2rem 2rem 0 2rem"} : {}}>
            <Collapse in={open}>
                <Alert onClose={onClick} severity={type}>{text}</Alert>
            </Collapse>
        </div>
    )
}

export default MyAlert
