import React from 'react';

const mockLocations = [
  { id: 1, name: 'Marina Bay Sands', address: '10 Bayfront Ave, Singapore 018956', lat: '1.2838', lng: '103.8591' },
  { id: 2, name: 'Gardens by the Bay', address: '18 Marina Gardens Dr, Singapore 018953', lat: '1.2816', lng: '103.8636' },
  { id: 3, name: 'Singapore Zoo', address: '80 Mandai Lake Rd, Singapore 729826', lat: '1.4043', lng: '103.7930' },
  { id: 4, name: 'Sentosa Island', address: 'Sentosa Island, Singapore 099981', lat: '1.2494', lng: '103.8303' },
  { id: 5, name: 'Chinatown', address: 'Chinatown, Singapore', lat: '1.2838', lng: '103.8434' }
];

export default function LocationList() {
  return (
    <div className="location-list">
      <h3 className="mb-4">My Travel Destinations</h3>
      
      {/* Add Location Section */}
      <div className="mb-4 p-3 bg-light rounded">
        <h5 className="mb-3">Add New Location</h5>
        
        <div className="mb-3">
          <label className="form-label mb-1">Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter location name"
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label mb-1">Address</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter full address"
          />
        </div>
        
        <div className="row g-2 mb-3">
          <div className="col">
            <label className="form-label mb-1">Latitude</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="e.g., 1.3521"
            />
          </div>
          <div className="col">
            <label className="form-label mb-1">Longitude</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="e.g., 103.8198"
            />
          </div>
        </div>
        
        <button className="btn btn-primary w-100">
          <i className="fas fa-plus-circle me-2"></i>Add Location
        </button>
      </div>

      {/* Locations List */}
      <div className="list-group">
        {mockLocations.map(location => (
          <div key={location.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">{location.name}</h6>
              <small className="text-muted d-block">{location.address}</small>
              <small className="text-muted">
                {location.lat}, {location.lng}
              </small>
            </div>
            <div className="btn-group btn-group-sm">
              <button className="btn btn-outline-primary">
                <i className="fas fa-edit"></i>
              </button>
              <button className="btn btn-outline-danger">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
