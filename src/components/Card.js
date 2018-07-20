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

  const icons = (cert) => {
    if (cert === "Installation Pro") {
      return <img src={Star} alt="Star icon" height="12" width="12" />;
    }
    if (cert === "Service Pro") {
      return <img src={Gear} alt="Gear icon" height="12" width="12" />;
    }
    if (cert === "Residential Pro") {
      return <img src={Home} alt="Home icon" height="12" width="12" />;
    }
    if (cert === "Commercial Pro") {
      return <img src={Users} alt="Users icon" height="12" width="12" />;
    }
  }


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
          {certifications.map((cert, i) => {
            return(
              <div key={i} className="service-certification">
                {icons(cert)}
                <p>{cert}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
