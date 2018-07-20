import React from 'react';
import Star  from 'IMG/star-installation-pro.png'; 
import Home  from 'IMG/home-residential-pro.png';
import Gear  from 'IMG/gear-service-pro.png';
import Users from 'IMG/users-commercial-pro.png'; 
import PhoneDesk from 'IMG/phone-icon-desktop.png';

const formatPhone = number => {
  return number.replace(/[-]+/g, ".");
};

const Card = props => {
  const {
    key, toggleModal, dealer,
    certifications, weekHours, name,
    dealerArray
  } = props;


  return(
    <React.Fragment>
      <div className="card" key={key}>
        <div className="card-header">
          <p>{name}</p>
        </div>
        <div className="phone-container">
          <div className="phone-number">
            <img src={PhoneDesk} alt="Phone icon" />
            <p>{formatPhone(dealer.data.phone1)}</p>
          </div>
          <p className="phone-text">Can't talk now? Click below to send an e-mail.</p>
          <button id="myBtn" className="btn-custom" onClick={e => toggleModal(e, name)}>
            Contact this Pro
          </button>
          <div className="hours">
            <p>Business Hours</p>
            <ul>
              <li>Weekdays {weekHours.mon}</li>
              <li>Saturdays {!weekHours.sat ? weekHours.mon : weekHours.sat}</li>
              <li>Sundays {!weekHours.sun ? 'CLOSED' : weekHours.sun}</li>
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
    </React.Fragment>
  );
}

export default Card;
