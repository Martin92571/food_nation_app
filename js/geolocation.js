class Geolocation {
  static cityLocation(city) {
    const data = {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyC9ceHIlLUKyUjT0rnO_zEFMnYkbf220-o`,
      method: "",
      dataType: "json"
    };
    return $.ajax(data);
  }
}
