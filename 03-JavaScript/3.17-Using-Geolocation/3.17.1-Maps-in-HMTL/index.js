// GOOGLE MAPS
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-css

let marker, map;

// INTEGRAR GOOGLE MAPS A UN PROYECTO
function initMap() {
  const position = {
    lat: -25.363,
    lng: 131.044,
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
  });

  const marker = new google.maps.Marker({
    position: position,
    map,
    title: "Initial Position",
  });
  // Obtener la localización
  // marker.setPosition({ lat, lng });
  geoPosition();
}

// GEOLOCATION
// .navigator.geolocation -> console
// watchPosition -> method that admits 3 params
// .navitagor.geolocation.watchPosition(position => { console.log(position) })

function geoPosition() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const options = { timeout: 60000 };
    const watchPos = geoLoc.watchPosition(
      mapCenter,
      onError,
      options
      //   (position) => {
      //     console.log(position.coords);
      //   },
      //   (error) => console.error(error),
      //   { timeout: 60000 }
    );
  } else {
    alert("Your browser do not admit geolocation :(");
  }
}

function mapCenter(position) {
  const newPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  console.log(newPos);
  marker.setPosition(newPos);
  map.setCenter(newPos);
}

function onError(error) {
  console.log("There is an error and it is already handled");
  console.error(error);
}
