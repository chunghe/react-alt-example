

import alt from '../alt';
import LocationActions from '../actions/LocationActions';

class LocationStore {
  constructor() {
    this.locations = [{name: 'aa'}, {name: 'bb'}];
    // Actions who have a onCamelCasedAction method or an actionName 
    // method available in the store will be bound. In this example 
    // locationActions.updateLocations will be handled by onUpdateLocations. 
    // There is no difference between calling the action handler 
    // updateLocation or onUpdateLocations it's just a matter of aesthetic preference.
    this.bindActions(LocationActions);

    /*
    this.bindListeners({
      handleUpdateLocations: LocationActions.updateLocations,
      handleFetchLocations: LocationActions.fetchLocations,
      handleLocationsFailed: LocationActions.locationsFailed
    });
    */
  }

  onUpdateLocations(locations) {
    this.locations = locations;
  }

  // reset the array while we're fetching new locations so React can
  // be smart and render a spinner for us since the data is empty.
  onFetchLocations() {
    this.locations = [];
  }

  onLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}


// http://alt.js.org/docs/createStore/
// The name of the store comes from the class name but on production 
// due to heavy minification it is a good idea to provide your own name 
// to avoid collisions.
module.exports = alt.createStore(LocationStore, 'LocationStore');
