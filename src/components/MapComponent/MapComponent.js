import React, { useEffect } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 39.9126519, lng: 32.7544914 }}
      onClick={(e) => props.onMapClick(e)}
    >
      {props.marks.map((mark) => (
        <Marker
          animation={window.google.maps.Animation.DROP}
          key={mark.id}
          position={mark.location}
          title={mark.name + ' - ' + mark.type[0]}
        />
      ))}
    </GoogleMap>
  ))
);

function MapComponent({ marks }) {
  useEffect(() => {
    console.log(marks);
  }, []);

  return (
    <div style={{ margin: '30px', borderRadius: '15px ' }}>
      <Map
        googleMapURL={`http://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%`, borderRadius: '25px ' }} />}
        marks={marks}
        onMapClick={() => console.log('clicked')}
      />
    </div>
  );
}

export default MapComponent;
