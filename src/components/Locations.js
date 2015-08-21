
import React, {Component} from 'react';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';

class Locations extends React.Component {

  constructor(props) {
    super(props);
    this.state = LocationStore.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    LocationStore.listen(this.handleStoreChange);
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.handleStoreChange);
  }

  handleStoreChange(state) {
    this.setState(state);
  }

  handleClick() {
    LocationActions.fetchLocations();
  }

  render() {
    console.log ('render');
    if (this.state.errorMessage) {
      return (
        <div>`something is wrong ${this.state.errorMessage}`</div>
      );
    }

    if (!this.state.locations.length) {
      return (
        <div>Loading ...</div>    
      )
    }
    return (
      <div id="main">
        <button onClick={this.handleClick}>fetch</button>
        <ul>
          {this.state.locations.map((location, index) => {
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
