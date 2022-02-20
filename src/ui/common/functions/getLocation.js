//get location from user location
export const getLocation = () => {
  return new Promise((resolve, reject) => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      if (lat && lon) {
        resolve({ lat, lon });
      }
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(
      function () {},
      function () {},
      {}
    );
    navigator.geolocation.getCurrentPosition(success, error, options);
  });
};
