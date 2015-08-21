

import mockData from '../data/mockData';


export default {
  fetch: function () {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(mockData);
      }, 500);
    });       
  }
};
