import React    from 'react';
import { Link } from 'react-router-dom';
import GoTo     from 'IMG/action-commercial-icon.png';
import Logo     from 'IMG/pool-pros-logo.png';
import MenuIcon from 'IMG/menu-icon-mobile.png';

const services = [
  {name: 'Pool & Spas'},
  {name: 'Supplies'},
  {name: 'Resources'},
  {name: 'Services'}
];

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
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

  renderMenu() {
    const { menuOpen } = this.state;
    return(
      <div className={`menu d-inline ${menuOpen ? "menu-open" : "menu-closed"}`}>  
        <div className="menu-mobile"
          tabIndex="0"
          onClick={this.handleClick.bind(this)}
          onBlur={this.handleBlur.bind(this)}>
          <img src={MenuIcon} alt="Services menu" height="52" width="52" />
            <p className="">MENU</p>
          <ul className={`${menuHeight(scrollable)}`}>
            {services.map((option, i) => {
              return(
                <a key={i} className="" href={option.link}>{option.name}</a>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    const scrollable = true;
    const menuHeight = scrollable => {
      if(scrollable){
        return 'menu-height';
      }
      return;
    }

    return(
      <div>
        <div id="blue-nav">
          <span className="float-right commercial-service">
            <a href="#"> Commercial Service</a>
            <img src={GoTo} alt="Go to arrow icon" />
          </span>
          <a href="#" className="float-right">Dealers and Distributors</a>
        </div>
        <div id="main-nav">
          <img src={Logo} alt="Pool Pros Logo" className="logo"/>
          {services.map(service => {
            return <a href="#" key={service.name}>{service.name}</a>
          })}
          <button className="btn-nav blue-text">
            Find a Pool Pro
          </button>
          <button className="btn-mobile">
            Find a Pro
          </button>
          {renderMenu()}
          </div>
        </div>
      </div>
    );
  }
}

export default AppBar;
