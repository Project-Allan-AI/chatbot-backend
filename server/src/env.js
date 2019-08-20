'use strict';

module.exports = (() => {
  return {
    databaseURI: getDatabaseURI(),
    backendPort: getBackendPort(),
    backendURL: getBackendURL()
  };
})();


function getDatabaseURI () {
  return process.env.BOWWOW_DATABASE_URI || 'dumb-value-for-now';
}

function getBackendPort(){
  let port = process.env.port || 5000;
  return port
}

function getBackendURL(){
  let port = getBackendPort();
  let url = "http://localhost/"+port;
  return url;
}
