import moment from 'moment';

export default {
  // data fetching
  fetchItinerary(url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
  },
  // local time
  getLocalTime(timeInSeconds) {
    return moment(parseInt(timeInSeconds)*1000).format('LT');
  }
};