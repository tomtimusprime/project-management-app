import React, { Component } from 'react'
import "./modal.css";


const Modal = (props) => {
    const [display, setDisplay] = React.useState(true);

    const open = () => {
        setDisplay(true);
    };

    const close = () => {
        setDisplay(false);
    }
    
    
    return ( 
        <div className={"modal-wrapper"}>
            <div className={"modal-backdrop"}/>
            <div className={"modal-box"}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;


// export default class Modal extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
