class Geolocation {
  static cityLocation(city) {
    console.log("what is the city",city)
    const data = {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${mapKey}`,
      method: "",
      dataType: "json"
    };
    return $.ajax(data);
  }
}
