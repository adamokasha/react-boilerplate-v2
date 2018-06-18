const moment = require.requireActual('moment');

// force moment to start at a specific point in time if point in time not provided not provided
export default (timestamp = 0) => {
  return moment(timestamp);
};