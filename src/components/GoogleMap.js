import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './googleMap.css';

const mapStyles = {
      width: '100%',
      height: '500px',
    };

class GoogleMap extends Component {
      
      render() {
            return (
                  <div className="location">
                        <div style={{ height: '300px', width: '75%', position: 'relative', left: '12%'}}>
                        <Map
                        google={this.props.google}
                        zoom={12}
                        style={mapStyles}
                        initialCenter={{ lat: 33.783800, lng: -118.198730}}
                        defaultOptions={{
                             // these following 7 options turn certain controls off see link below
                              streetViewControl: false,
                              scaleControl: false,
                              mapTypeControl: false,
                              panControl: false,
                              zoomControl: false,
                              rotateControl: false,
                              fullscreenControl: false
                            }}
                        >
                        <Marker position={{ lat: 33.783800, lng: -118.198730}} />

                        </Map>
                  </div>
                  </div>
            )
      }
}

export default GoogleApiWrapper({
      apiKey: 'AIzaSyCWE-Jh3iwHFhQsvM_dgy4FIpzXajzukN8'
    })(GoogleMap);

