import React    from 'react';
import json     from './../data/dealers.json';
import Modal    from './Modal';
import Dropdown from './Dropdown';

import WaterImg    from 'IMG/water-image.png';
import PhoneDesk   from 'IMG/phone-icon-desktop.png';
import PhoneMobile from 'IMG/phone-icon-mobile.png';
import Question    from 'IMG/tool-tip-icon-filtering.png';
import Star        from 'IMG/star-installation-pro.png'; 
import Home        from 'IMG/home-residential-pro.png';
import Gear        from 'IMG/gear-service-pro.png';
import Users       from 'IMG/users-commercial-pro.png'; 
import Arrow       from 'IMG/next-arrow.png';
import EmptyCircle from 'IMG/circle-form.png';
import CheckCircle from 'IMG/checkmark-circle.png';

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
      companyName: null,
      filterValue: 'Filter Results'
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
    
    const menuProps = {
      scrollable: true,
      disable: false,
      menuWidth: ''
    };

    return(
      <main>
        <div className="container">
          <div className="filter-container">
            <p className="d-inline blue-text margin-left">{dealers.length} dealers in {json.zipcode}</p>
            <div className="filter-desktop">
              <div className="vertical-line"></div>
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
                <img src={Question} alt="Question mark" height="20" width="20" />
              </span>
            </div>
            <div className="filter-mobile">
              <Dropdown
                {...menuProps}
                value={this.state.filterValue}>
                  {resultType.map(result => {
                    return(
                      <label className="custom-checkbox" htmlFor={result.name}>
                        {capitalize(result.name)}
                        <input type="checkbox" id={result.name} name="results" value={result.name} />
                        <span className="checkmark"></span>
                      </label>
                    );
                  })}
              </Dropdown>
            </div>
          </div>
          {dealers.map(dealer => {
            const hours = dealer.data.weekHours;
            const name = dealer.data.name;
            return(
              <div className="card" key={name}>
                <div className="card-header">
                  <p>{name}</p>
                </div>
                <div className="phone-container">
                  <div className="phone-number">
                    <img src={PhoneDesk} alt="Phone icon" />
                    <p>{formatPhone(dealer.data.phone1)}</p>
                  </div>
                  <p className="phone-text">Can't talk now? Click below to send an e-mail.</p>
                  <button id="myBtn" className="btn-custom" onClick={e => this.toggleModal(e, name)}>
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
                    <img src={Star} alt="Star icon" height="12" width="12" />
                    <p>Installation Pro</p>
                  </div>
                  <div className="service-certification">
                    <img src={Gear} alt="Gear icon" height="12" width="12" />
                    <p>Service Pro</p>
                  </div>
                  <div className="service-certification">
                    <img src={Home} alt="House icon" height="12" width="12" />
                    <p>Residential Pro</p>
                  </div>
                  <div className="service-certification">
                    <img src={Users} alt="Users icon" height="12" width="12" />
                    <p>Commercial </p>
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
                <img src={CheckCircle} alt="Circle with checkmark" className="float-right" />
                <input type="text" id="name" name="name" />
              </div>
              <div className="custom-input">
                <label htmlFor="phone">Phone number</label>
                <img src={EmptyCircle} alt="Circle with no checkmark" className="float-right" />
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <img src={EmptyCircle} alt="Circle with no checkmark" className="float-right" />
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="comments">Comments or questions?</label>
                <textarea id="comments" name="comments" wrap="soft"></textarea>
              </div>
              <div>
                <label htmlFor="pool">Do you currently own a pool or spa?</label>
                <br/>
                <button type="button" className="btn-modal btn-success">Yes</button>
                <button type="button" className="btn-modal btn-transparent">No</button>
                <div className="mobile-checkbox">
                  <label className="d-inline custom-checkbox" htmlFor="yes">
                    Yes
                    <input type="checkbox" id="yes" name="pool-owner" value="yes" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="d-inline custom-checkbox" htmlFor="no">
                    No
                    <input type="checkbox" id="no" name="pool-owner" value="no" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="modal-submit">
                <p className="d-inline">Send my email</p>
                <img src={Arrow} alt="Next arrow" height="15" width="15" />
              </div>
              <div className="mobile-submit">
                <p className="float-right">Send</p>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <p>
              These are the voyages of the Starship Enterprise. Its continuing
              mission, to explore strange new worlds, to seek out new life and new
              civilizations, to boldly go where no one has gone before. 
            </p>
          </div>
        </Modal>
      </main>
    );
  }
}

export default Main;
