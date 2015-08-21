

import alt from '../alt';
import LocationsFetcher from '../utils/LocationsFetcher';

class LocationActions {
  updateLocations(locations) {
    this.dispatch(locations);
  }

  // Inside those actions you can use `this.dispatch` to dispatch 
  // your payload through the Dispatcher and onto the stores.
  fetchLocations() {
    //  we dispatch an event here so we can have "loading" state.
    this.dispatch();

    LocationsFetcher.fetch()
      .then((locations) => {
        console.log('locations', locations);
        this.actions.updateLocations(locations);
      })
      .catch((errorMessage) => {
        this.actions.locationsFailed(errorMessage);
      });
  }

  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}


export default alt.createActions(LocationActions);
