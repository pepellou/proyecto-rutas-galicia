import React from 'react';

class MapComponent extends React.Component {
  render() {
    var map = L.map(this.getDOMNode());
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.setView([this.props.lat, this.props.lon], this.props.zoom);        

    return (
      <div className="map">
      </div>
    );
  }
}

MapComponent.defaultProps = {
  lat: 60.0,
  lon: 10.0,
  zoom: 10
};

export default MapComponent;
