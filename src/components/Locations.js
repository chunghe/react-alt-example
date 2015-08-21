
import React, {Component} from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';

@connectToStores
class Locations extends React.Component {
  static getStores() {
    return [LocationStore]
  }

  static getPropsFromStores() {
    return LocationStore.getState();
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    LocationActions.fetchLocations();
  }

  render() {
    console.log ('render');
    if (this.props.errorMessage) {
      return (
        <div>`something is wrong ${this.props.errorMessage}`</div>
      );
    }

    if (!this.props.locations.length) {
      return (
        <div>Loading ...</div>    
      )
    }
    return (
      <div id="main">
        <button onClick={this.handleClick}>fetch</button>
        <ul>
          {this.props.locations.map((location, index) => {
            return (
              <li key={index}>{location.name}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Locations;
