import "bootstrap/dist/css/bootstrap.min.css"
import Map from "./Map"
import LocationList from "./LocationList"
import "./App.css"

export default function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Travel Planner</h1>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="map-container">
            <Map />
          </div>
        </div>
        <div className="col-lg-4">
          <LocationList />
        </div>
      </div>
    </div>
  )
}