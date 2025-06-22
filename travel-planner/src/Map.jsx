import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    // Only initialize the map once when the component mounts
    if (!mapInstance.current && mapRef.current) {
      // Create map instance
      mapInstance.current = L.map(mapRef.current, {
        // Enable smooth zooming and better touch support
        zoomControl: true,
        // Make sure the map fills its container
        preferCanvas: true
      }).setView([1.3521, 103.8198], 13); // Centered on Singapore
      
      // Add tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        // Better tile loading
        maxZoom: 19,
        tileSize: 256,
        zoomOffset: 0
      }).addTo(mapInstance.current);
      
      // Add a marker
      L.marker([1.3521, 103.8198])
        .addTo(mapInstance.current)
        .bindPopup('Hello from Singapore!');

      // Force a resize event to ensure the map fills its container
      setTimeout(() => {
        mapInstance.current.invalidateSize();
      }, 0);
    }

    // Handle window resize
    const handleResize = () => {
      if (mapInstance.current) {
        setTimeout(() => {
          mapInstance.current.invalidateSize();
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove map instance and event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        height: '100%',
        width: '100%',
        minHeight: '500px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}
    />
  );
}