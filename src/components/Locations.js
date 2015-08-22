
import React, {Component} from 'react';
import AltContainer from 'alt/AltContainer';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';

class Locations extends React.Component {
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

class LocationsContainer extends React.Component {
  render() {
    return (
      <AltContainer store={LocationStore}>
        <Locations />
      </AltContainer>
    )
  }
}

export default LocationsContainer;
