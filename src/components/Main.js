import React    from 'react';
import WaterImg from 'IMG/water-image.png';
import Phone    from 'IMG/phone-icon-desktop.png';
import Question from 'IMG/tool-tip-icon-filtering.png';
import Star     from 'IMG/star-installation-pro.png'; 
import Home     from 'IMG/home-residential-pro.png';
import Gear     from 'IMG/gear-service-pro.png';
import Users    from 'IMG/users-commercial-pro.png'; 
import json     from './../data/dealers.json';
import Modal    from './Modal';

const resultType = [
  {name: 'service'},
  {name: 'installation'},
  {name: 'residential'},
  {name: 'commercial'}
];

const capitalize = word => {
  return (word.charAt(0).toUpperCase() + word.slice(1));
};

const formatPhone = number => {
  return number.replace(/[-]+/g, ".");
};

// To DO
// close modal when clicking outside of modal 

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      companyName: null
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e, name){
    e.preventDefault();
    this.setState({
      modalOpen: !this.state.modalOpen,
      companyName: name
    });
  }

  render() {
    const {dealers} = json;
    return(
      <main>
        <div className="container">
          <div className="filter-container">
            <p className="d-inline">{dealers.length} dealers in {json.zipcode}</p>
            <span> | </span>
            <p className="d-inline"><b>Filter Results</b></p>
            {resultType.map(result => {
              return(
                <label className="d-inline custom-checkbox" htmlFor={result.name}>
                  {capitalize(result.name)}
                  <input type="checkbox" id={result.name} name="results" value={result.name} />
                  <span className="checkmark"></span>
                </label>
              );
            })}
            <span className="tooltip tooltip-right" data-tooltip="Look at me I am a tooltip! ¯\_(ツ)_/¯">
              <img src={Question} alt="Question mark" />
            </span>
          </div>
          {dealers.map(dealer => {
            const hours = dealer.data.weekHours;
            return(
              <div className="card">
                <div className="card-header">
                  <p>{dealer.data.name}</p>
                </div>
                <div className="phone-container">
                  <div className="phone-number">
                    <img src={Phone} alt="Phone icon" />
                    <p>{formatPhone(dealer.data.phone1)}</p>
                  </div>
                  <p className="phone-text">Can't talk now? Click below to send an e-mail.</p>
                  <button id="myBtn" className="btn-custom" onClick={e => this.toggleModal(e, dealer.data.name)}>
                    Contact this Pro
                  </button>
                  <div className="hours">
                    <p>Business Hours</p>
                    <ul>
                      <li>Weekdays {hours.mon}</li>
                      <li>Saturdays {!hours.sat ? hours.mon : hours.sat}</li>
                      <li>Sundays {!hours.sun ? 'CLOSED' : hours.sun}</li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="service-certification">
                    <img src={Star} alt="Star icon" />
                  </div>
                  <div className="service-certification">
                    <img src={Gear} alt="Gear icon" />
                  </div>
                  <div className="service-certification">
                    <img src={Home} alt="House icon" />
                  </div>
                  <div className="service-certification">
                    <img src={Users} alt="Users icon" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Modal show={this.state.modalOpen}>
          <div className="modal-header">
            <button type="button" className="close" onClick={this.toggleModal} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <p className="email">EMAIL</p>
            <p className="company-name">{this.state.companyName}</p>
          </div>
          <div className="modal-body">
            <p>Fill out the form below and {this.state.companyName} will get in touch.</p>
            <form>
              <div>
                <label htmlFor="name">First and last name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="phone">Phone number</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="comments">Comments or questions?</label>
                <textarea id="comments" name="comments" wrap="soft"></textarea>
              </div>
              <div>
                <label htmlFor="pool">Do you currently own a pool or spa?</label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
          </div>
        </Modal>
      </main>
    );
  }
}

export default Main;
