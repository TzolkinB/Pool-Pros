import React     from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

class Menu extends React.Component {
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
    if(menuOpen){
      return "menu-open";
    }
    return "menu-closed";
  }
  
  toggleArrow() {
    const { menuOpen } = this.state;
    const { className } = this.props
    if(menuOpen){
      return;
    }
    return <span className={`triangle ${className}`}>&#9660;</span>;
  }

  render() {
    const {
      className, disabled, value,
      handleSelect, menuOptions, menuWidth,
      labelClass, label, borderBottom,
      menuClass, link, linkClass, scrollable,
      children
    } = this.props;

    const menuHeight = scrollable => {
      if(scrollable){
        return 'menu-height';
      }
      return;
    }

    if(disabled){
      return (
        <div className='menu menu-closed'>  
          <div className={`menu-button disabled-menu ${borderBottom}`}>
            {value}
            {this.toggleArrow()}
          </div>
          <label className={`menu-label ${labelClass}`}>{label}</label>
        </div> 
      
      );
    }
    return(
      <div>
        <div className={`menu ${this.renderMenu()} ${menuWidth} ${className}`}>  
          <div
            className={`menu-button ${borderBottom}`}
            tabIndex="0"
            onClick={this.handleClick.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            >
            {value}
            {this.toggleArrow()}
          </div>
          <label className={`menu-label ${labelClass}`}>{label}</label>
          {/*
          <ul className={`${menuClass} ${menuHeight(scrollable)}`}>
            {menuOptions.map((option, i) => {
              const selected = (option.value === value).toString()
              return(
                <li key={i} onClick={() => handleSelect(option.value)} aria-selected={selected}>
                  <a className={linkClass} href={option.link}>{option.name}</a>
                </li>
              )
            })}
          </ul>
          */}
          <div className={`${menuClass} ${menuHeight(scrollable)}`}>
            {children}
          </div>
        </div>
      </div>
    )
  }
};

Menu.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  scrollable: PropTypes.bool,
  handleSelect: PropTypes.func,
  menuOpen: PropTypes.bool,
  menuOptions: PropTypes.array, 
  menuWidth: PropTypes.string,
  labelClass: PropTypes.string,
  label: PropTypes.string
};

export default Menu;
