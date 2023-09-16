/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibXJrZ2JyIiwiYSI6ImNsbWtrc2RsNzAzc2kya3J4NGF6OGJwbWsifQ.oDb0weyaRxtnPHbu9Z9EIA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mrkgbr/clmklklvy01s401pj9dkt4n14',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((location) => {
    // Create marker
    const element = document.createElement('div');
    element.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element,
      anchor: 'bottom',
    })
      .setLngLat(location.coordinates)
      .addTo(map);

    // ADD popup
    new mapboxgl.Popup({
      offset: 35,
    })
      .setLngLat(location.coordinates)
      .setHTML(`<p>Day ${location.day}: ${location.description}</p>`)
      .addTo(map);

    // Extends map bounds to include current location
    bounds.extend(location.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
