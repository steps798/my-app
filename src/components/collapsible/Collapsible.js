import React from 'react';

import styles from './styles.css';
import arrow from '../assets/arrow-down-sign-to-navigate.svg';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleDetail = () => {
    this.setState((prevState) => {
      return {isOpen: !prevState.isOpen};
    })
  }

  render = () => {
    return (
      <div className="collapsible-container">
          <button 
            type="button" 
            className="collapsible ripple" 
            onClick={this.toggleDetail}
            style={{backgroundColor: 
              `${this.state.isOpen ? 'var(--ripple-dark)' : 'var(--color-primary-light)'}`}}
          >
            <div style={{display: 'inline-block', width: 'calc(100% - 15px)'}}>
              {this.props.header}
            </div>
            <img 
              src={arrow} 
              className="expandArrow"
              style={{transform: `${this.state.isOpen? 'rotate(-180deg)' : ''}`}} 
            />
          </button>
          <div className="content" style={{display: `${this.state.isOpen ? 'block' : 'none'}`}}>
            {this.props.children}
          </div>
        </div>
    )

  }
}

export default Collapsible;