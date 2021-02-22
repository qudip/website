import React from 'react';



function EggOne() {
  var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=1ed66c8728f9471dabefab09c40b2faf';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
  return (
    <h1>1</h1>
  );
}

export default EggOne;
