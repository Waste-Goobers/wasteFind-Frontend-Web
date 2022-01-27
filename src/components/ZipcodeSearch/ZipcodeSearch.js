import { Input, Row, Form, notification } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import Articles from '../Articles';
import MapComponent from '../MapComponent/MapComponent';
import './ZipcodeSearch.scss';

const baseUrl = 'http://localhost:3000';

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
  const [markersObject, setMarkersObject] = useState({});

  function onSearch(value) {
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
      handleGetMarkers(value);
    }
  }

  function isNumeric(str) {
    if (typeof str != 'string') return false; // we only process strings!
    return (
      !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
  }

  async function handleGetMarkers(zipcode) {
    try {
      const response = await axios.post(`${baseUrl}/mapping/zipcode`, {
        zipcode: zipcode,
      });

      if (response.status === 200) {
        setMarkersObject(response.data.recycle_centers);
        renderMap(zipcode);
        notification.success({
          message: `Recycle Centers Found`,
          description: 'You can find in the map below',
          placement: 'topRight',
        });
      }
    } catch (error) {
      console.log(error);
      notification.error({
        message: `Zipcode should 5 number`,
        description: 'Try again, Zipcode should be valid 5 number.',
        placement: 'topRight',
      });
    }
  }

  function renderMap(value) {
    setMapOpen(true);
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

      {mapOpen ? <MapComponent marks={markersObject} /> : <Articles />}
    </div>
  );
}

export default ZipcodeSearch;
