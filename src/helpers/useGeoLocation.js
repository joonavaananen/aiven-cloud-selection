import { useState, useEffect } from 'react';

/**
 * Custom hook to use Navigator.geolocation
 * 
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation Navigator.geolocation}
 * Adapted from {@link https://github.com/trekhleb/use-position trekhleb/use-position}
 * 
 * @returns {Object} - Contains user position, or error if encountered
 */

const useGeoLocation = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState('');

  /**
   * Handle successfully gotten user position
   * 
   * @param {Object} coords - Contains user longitude and latitude
   */

  const handleSuccess = ({ coords }) => {
    setPosition({
      latitude : coords.latitude,
      longitude : coords.longitude
    });
  };

  /**
   * Handle encountered error getting user position
   * 
   * @param {string} message - Error message 
   */

  const handleError = ({ message }) => {
    setError(message);
  };

  /**
   * Get user position on mount
   */

  useEffect(() => {
    const geoLocation = navigator.geolocation;

    if (!geoLocation) {
      setError({ message : 'Geolocation is disallowed or not supported!' });
      return;
    }

    geoLocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { position, error };
};

export default useGeoLocation;
