import { useState, useEffect } from 'react';

const useGeoLocation = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState('');

  const handleChange = ({ coords }) => {
    setPosition({
      latitude : coords.latitude,
      longitude : coords.longitude
    });
  };

  const handleError = ({ message }) => {
    setError(message);
  };

  useEffect(() => {
    const geoLocation = navigator.geolocation;

    if (!geoLocation) {
      setError({ message : 'Geolocation is disallowed or not supported!' });
      return;
    }

    geoLocation.getCurrentPosition(handleChange, handleError);
  }, []);

  return { position, error };
};

export default useGeoLocation;
