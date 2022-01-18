import { Input, Row, Form, notification } from 'antd';
import React, { useState } from 'react';
import MapComponent from '../MapComponent/MapComponent';
import './ZipcodeSearch.scss';

const { Search } = Input;
const fake_marks = [
  {
    lat: 39.9488539,
    lng: 32.8441413,
  },
  {
    lat: 39.892379,
    lng: 32.7677681,
  },
];
function ZipcodeSearch() {
  const [mapOpen, setMapOpen] = useState(false);

  function onSearch(value) {
    console.log('searched' + value);

    if (!isNumeric(value)) {
      notification.info({
        message: `Zipcode should be valid number`,
        description: 'Try again, Zipcode should be valid number.',
        placement: 'topRight',
      });
    } else if (value.length !== 5) {
      notification.info({
        message: `Zipcode should 5 number`,
        description: 'Try again, Zipcode should be valid 5 number.',
        placement: 'topRight',
      });
    } else {
      console.log('nice');
      renderMap(value);
    }
  }

  function isNumeric(str) {
    if (typeof str != 'string') return false; // we only process strings!
    return (
      !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
  }

  function renderMap(value) {
    if (value === '06370') {
      setMapOpen(true);
    }
  }
  return (
    <div className="zipcodeSearchContainer">
      <div className="zipcodeSearch">
        <Row justify="center">
          <div className="zipcodeSearch-title-container">
            <h2 className="zipcodeSearch-title">Find Where, Recycle easier</h2>
            <h2 className="zipcodeSearch-title2">
              With Zipcode you can find Recycle Centers around the location
            </h2>
          </div>
        </Row>
        <Row justify="center">
          <div>
            <Search
              placeholder="Enter a Zipcode"
              onSearch={onSearch}
              className="zipcodeSearch-searchbox"
              size="large"
            />
          </div>
        </Row>
      </div>

      {mapOpen && <MapComponent marks={fake_marks} />}
    </div>
  );
}

export default ZipcodeSearch;
