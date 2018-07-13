import React    from 'react';
import WaterImg from 'IMG/water-image.png';
import Phone    from 'IMG/phone-icon-desktop.png';
import Star     from 'IMG/star-installation-pro.png'; 
import Home     from 'IMG/home-residential-pro.png';
import Gear     from 'IMG/gear-service-pro.png';
import Users    from 'IMG/users-commercial-pro.png'; 
import json     from './../data/dealers.json';

const Main = () => {
  const {dealers} = json;
  return(
    <main>
      <div className="container">
        <div className="filter-container">
          <p>filter here</p>
        </div>
        {dealers.map(dealer => {
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
                <p><i>Can't talk now? Click below to send an e-mail.</i></p>
                <button className="btn-card">
                  Contact this Pro
                </button>
                <p><b>Business Hourse</b></p>
                <ul>
                  <li>List of hours</li>
                  <li>more hrs</li>
                  <li>more hrs</li>
                </ul>
              </div>
              <div className="card-footer">
                <img src={Star} alt="Star icon" />
                <img src={Home} alt="House icon" />
                <img src={Gear} alt="Gear icon" />
                <img src={Users} alt="Users icon" />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
