import React    from 'react';
import json     from './../data/dealers.json';
import Modal    from './Modal';
import Card     from './Card';

import WaterImg    from 'IMG/water-image.png';
import PhoneMobile from 'IMG/phone-icon-mobile.png';
import Question    from 'IMG/tool-tip-icon-filtering.png';
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

// To DO
// close modal when clicking outside of modal 

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      companyName: null,
      filters: [],
      isChecked: false,
      menuOpen: false
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

  handleClick(e) {
    const menuOpen = !this.state.menuOpen;
    this.setState({menuOpen})
  }

  handleBlur() {
    setTimeout(() => {
      this.setState({ menuOpen: false });
    }, 200)
  }

  handleChange(e) {
    let { filters, isChecked } = this.state;
    const {checked, value} = e.target;
    this.setState({ isChecked: !isChecked});
    
    //if checked and not included in filters array (-1)
    if(checked && filters.indexOf(value) === -1) {
      this.setState({ filters: [...filters, value] });
    }
    if(!checked) {
      const filterBy = filters.indexOf(value);
      let newFilter = filters.filter(filterBy => filterBy != value);
      this.setState({ filters: newFilter });
    }
    return;
  }

  renderMenu() {
    const { menuOpen } = this.state;
    return(
      <React.Fragment>
      <div className="menu-button d-inline"
        tabIndex="0"
        onClick={this.handleClick.bind(this)}
        onBlur={this.handleBlur.bind(this)}>
        <p>
          Filter Results
          <span className="triangle">&#9660;</span>
        </p>
      </div>
      <div className={`menu d-inline ${menuOpen ? "filter-menu-open" : "menu-closed"}`}>  
        <ul className="filter-menu-content">
          {resultType.map(result => {
            return(
              <li>
                <label key={result.name} className="custom-checkbox" htmlFor={result.name}>
                  {result.name}
                  <input 
                    type="checkbox"
                    name="results"
                    checked={result.name.isChecked}
                    onChange={e => this.handleChange(e)}
                    id={result.name}
                    value={result.name} />
                  <span className="checkmark"></span>
                </label>
              </li>
            );
          })}
          <span className="tooltip tooltip-bottom" data-tooltip="Look at me I am a tooltip! ¯\_(ツ)_/¯">
            <img src={Question} alt="Question mark" height="20" width="20" />
          </span>
        </ul>
      </div>
      </React.Fragment>
    );
  }

  render() {
    const { filters, isChecked } = this.state;
    const { dealers } = json;

    const certs = filters.map(name => { 
      return capitalize(name) + " Pro";
    });

    const matchBusiness = (dealer, certifications) => {
      const a = JSON.stringify(certifications.sort());
      const b = JSON.stringify(certs.sort());
      if(a === b){
        const {name} = dealer.data
        alert(`${name} matches your filter selections.`);
        return {...dealer.data};
      }
    }
    
    return(
      <main>
        <div className="container">
          <div className="filter-container">
            <p className="d-inline blue-text margin-left">{dealers.length} dealers in {json.zipcode}</p>
            <div className="filter-desktop d-inline">
              <div className="vertical-line"></div>
              <p className="d-inline"><b>Filter Results</b></p>
              {resultType.map(result => {
                return(
                  <label key={result.name} className="d-inline custom-checkbox" htmlFor={result.name}>
                    {result.name}
                    <input 
                      type="checkbox"
                      name="results"
                      checked={result.name.isChecked}
                      onChange={e => this.handleChange(e)}
                      id={result.name}
                      value={result.name} />
                    <span className="checkmark"></span>
                  </label>
                );
              })}
              <span className="tooltip tooltip-right" data-tooltip="Look at me I am a tooltip! ¯\_(ツ)_/¯">
                <img src={Question} alt="Question mark" height="20" width="20" />
              </span>
            </div>
            <div className="filter-mobile">
              {this.renderMenu()}
            </div>
          </div>
          {dealers.map((dealer, i) => {
            const {weekHours, name, certifications} = dealer.data;
            const cardProps = { weekHours, name, certifications, dealer };
            let dealerArray = matchBusiness(dealer, certifications);
            return(
              <Card
                {...cardProps}
                dealerArray={dealerArray}
                key={i}
                toggleModal={this.toggleModal} />
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
                <p className="optional d-inline float-right">optional</p>
                <textarea id="comments" name="comments" wrap="soft"></textarea>
              </div>
              <div>
                <label htmlFor="pool">Do you currently own a pool or spa?</label>
                <p className="optional d-inline float-right">optional</p>
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
