export const getLocation = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve(coords);
      },
      (err) => {
        console.log(err);
        reject();
      },
      {
        enableHighAccuracy: true,
        timeOut: 5000,
        maximumAge: 0,
      }
    );
  });
};
