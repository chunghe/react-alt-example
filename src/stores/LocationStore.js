

import alt from '../alt';
import LocationActions from '../actions/LocationActions';

class LocationStore {
  constructor() {
    this.locations = [{name: 'aa'}, {name: 'bb'}];

    this.bindListeners({
      handleUpdateLocations: LocationActions.updateLocations,
      handleFetchLocations: LocationActions.fetchLocations,
      handleLocationsFailed: LocationActions.locationsFailed
    });
  }

  handleUpdateLocations(locations) {
    this.locations = locations;
  }

  // reset the array while we're fetching new locations so React can
  // be smart and render a spinner for us since the data is empty.
  handleFetchLocations() {
    this.locations = [];
  }

  handleLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');
