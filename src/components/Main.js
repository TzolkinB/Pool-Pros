import React    from 'react';
import WaterImg from 'IMG/water-image.png';
import Phone    from 'IMG/phone-icon-desktop.png';
import Question from 'IMG/tool-tip-icon-filtering.png';
import Star     from 'IMG/star-installation-pro.png'; 
import Home     from 'IMG/home-residential-pro.png';
import Gear     from 'IMG/gear-service-pro.png';
import Users    from 'IMG/users-commercial-pro.png'; 
import json     from './../data/dealers.json';

const resultType = [
  {name: 'service'},
  {name: 'installation'},
  {name: 'residential'},
  {name: 'commercial'}
];

const capitalize = (word) => {
  return (word.charAt(0).toUpperCase() + word.slice(1));
};

const Main = () => {
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
                {dealer.data.name}
              </div>
              <div className="phone-container">
                <div className="phone-number">
                  <img src={Phone} alt="Phone icon" />
                  <p>{dealer.data.phone1}</p>
                </div>
                <p><i>Can\'t talk now? Click below to send an e-mail.</i></p>
                <button className="btn-card">
                  Contact this Pro
                </button>
                <p><b>Business Hours</b></p>
                <ul>
                  <li>Weekdays {hours.mon}</li>
                  <li>Saturdays {!hours.sat ? hours.mon : hours.sat}</li>
                  <li>Sundays {!hours.sun ? 'CLOSED' : hours.sun}</li>
                </ul>
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
    </main>
  );
}

export default Main;
