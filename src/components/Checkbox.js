import React from 'react';

const capitalize = word => {
  console.log('w', word);
  return (word.charAt(0).toUpperCase() + word.slice(1));
};

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    }
  }

  render() {
    const {values} = this.props;

    const toggleCheckbox = (result, i) => {
      console.log('val',result, i);
      if(values[i] = i) {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }
      console.log('checked', result.isChecked);
    };

    return(
      <div>
        {values.map((result,i) => {
          return(
            <label className="d-inline custom-checkbox" htmlFor={result.name} key={i}>
              {capitalize(result.name)}
              <input type="checkbox" id={result.name} name="results" onChange={e => toggleCheckbox(result, i)} checked={this.state.isChecked}/>
              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>
    );
  }
}

export default Checkbox;
