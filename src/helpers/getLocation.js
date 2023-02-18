export default function getLocation(setCurrentPosition) {
  const options = {
    enableHighAccuracy: true,
    timeOut: 5000,
    maximumAge: 0,
  };

  const success = (position) => {
    let coords = position.coords;
    setCurrentPosition(coords);
  };
  const error = (err) => {
    console.log(err);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}
