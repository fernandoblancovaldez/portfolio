export default async function getLocation(setCurrentPosition) {
  const options = {
    enableHighAccuracy: true,
    timeOut: 5000,
    maximumAge: 0,
  };

  const success = async (position) => {
    let coords = await position.coords;
    await setCurrentPosition(coords);
  };
  const error = (err) => {
    console.log(err);
  };

  await navigator.geolocation.getCurrentPosition(success, error, options);
}
