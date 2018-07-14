import React from 'react'

// When the user clicks anywhere outside of the modal, close it
 // Get the modal
const modal = document.getElementById('myModal');
console.log(modal);
window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
}

class Modal extends React.Component {
  render() {
    const {
      children, show
    } = this.props;
    
    if(!show) {
      return null;
    }
    console.log('show', show);
    return(
      <div className="modal">
        <div id="myModal" className="modal-content">
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
