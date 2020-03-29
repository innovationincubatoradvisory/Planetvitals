
// colors to use for the map categories
var colors = ["#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c"];
(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";
window.randomScalingFactor = function() {
  return Math.floor(Math.random() * 100);
};
window.chartColors = {
  red: "rgb(255, 0, 0)",
  orange: "rgb(255, 165, 0)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(0, 128, 0)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)"
};

var initializeMap = function (geoData){  
  let geojson_data = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": geoData
  }
  // filters for classifying corona_spots into five categories based on confirmed reports
  var confirmed1 = ['<', ['get', 'confirmed'], 1000];
  var confirmed2 = ['all', ['>=', ['get', 'confirmed'], 2], ['<', ['get', 'confirmed'], 5000]];
  var confirmed3 = ['all', ['>=', ['get', 'confirmed'], 3], ['<', ['get', 'confirmed'], 10000]];
  var confirmed4 = ['all', ['>=', ['get', 'confirmed'], 4], ['<', ['get', 'confirmed'], 50000]];
  var confirmed5 = ['>=', ['get', 'confirmed'], 50000];

  mapboxgl.accessToken = 'pk.eyJ1IjoiaWlhLXBsYW5ldCIsImEiOiJjazZrY3RyeWgwMzB0M2RxZmIwcnp0cXFhIn0.4KlBCBispcZFokPHivJZOQ';
  var map = new mapboxgl.Map({
    container: 'map',
    zoom: 3,
    center: [78, 20],
    style: 'mapbox://styles/mapbox/dark-v10'
  });

  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true
})
);

 
  map.on('load', function () {
    // add a clustered GeoJSON source for a sample set of corona_spots
    map.addSource('corona_spots', {
      'type': 'geojson',
      'data': geojson_data,
      'cluster': true,
      'clusterRadius': 1,
      'clusterProperties': {
        // keep separate counts for each confirmed category in a cluster
        "sum": ['+', ['get', 'confirmed']],
        'confirmed1': ['+', ['case', confirmed1, 1, 0]],
        'confirmed2': ['+', ['case', confirmed2, 1, 0]],
        'confirmed3': ['+', ['case', confirmed3, 1, 0]],
        'confirmed4': ['+', ['case', confirmed4, 1, 0]],
        'confirmed5': ['+', ['case', confirmed5, 1, 0]]
      }
    });
    // circle and symbol layers for rendering individual corona_spots (unclustered points)
    map.addLayer({
      'id': 'corona_circle',
      'type': 'circle',
      'source': 'corona_spots',
      'filter': ['!=', 'cluster', true],
      'paint': {
        'circle-color': [
          'case',
          confirmed1,
          colors[0],
          confirmed2,
          colors[1],
          confirmed3,
          colors[2],
          confirmed4,
          colors[3],
          colors[4]
        ],
        'circle-opacity': 1.0,
        'circle-radius': 20
      }
    });
    map.addLayer({
      'id': 'corona_label',
      'type': 'symbol',
      'source': 'corona_spots',
      'filter': ['!=', 'cluster', true],
      'layout': {
        'text-field': [
          'number-format',
          ['get', 'confirmed'],
          { 'min-fraction-digits': 0, 'max-fraction-digits': 0 }
        ],
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-size': 10
      },
      'paint': {
        'text-color': [
          'case',
          ['<', ['get', 'confirmed'], 100],
          'black',
          'black'
        ]
      }
    });

    // objects for caching and keeping track of HTML marker objects (for performance)
    var markers = {};
    var markersOnScreen = {};

    function updateMarkers() {
      var newMarkers = {};
      var features = map.querySourceFeatures('corona_spots');

      // for every cluster on the screen, create an HTML marker for it (if we didn't yet),
      // and add it to the map if it's not there already
      for (var i = 0; i < features.length; i++) {
        var coords = features[i].geometry.coordinates;
        var props = features[i].properties;
        if (!props.cluster) continue;
        var id = props.cluster_id;

        var marker = markers[id];
        if (!marker) {
          var el = createDonutChart(props);
          marker = markers[id] = new mapboxgl.Marker({
            element: el
          }).setLngLat(coords);
        }
        newMarkers[id] = marker;

        if (!markersOnScreen[id]) marker.addTo(map);
      }
      // for every marker we've added previously, remove those that are no longer visible
      for (id in markersOnScreen) {
        if (!newMarkers[id]) markersOnScreen[id].remove();
      }
      markersOnScreen = newMarkers;
    }

    // after the GeoJSON data is loaded, update markers on the screen and do so on every map move/moveend
    map.on('data', function (e) {
      if (e.sourceId !== 'corona_spots' || !e.isSourceLoaded) return;

      map.on('move', updateMarkers);
      map.on('moveend', updateMarkers);
      updateMarkers();
    });
  });

  map.on('click', 'corona_circle', function (e) {
    
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description =
    "<br><p>Country:"+
    e.features[0].properties.country+
      "<br><p>Confirmed: " +
      e.features[0].properties.confirmed +
      "</p><p>Died: " +
      e.features[0].properties.died +
      "</p><p>Recovered: " +
      e.features[0].properties.recovered +
      "</p>";

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
  });

  map.on('mouseenter', 'corona_circle', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'corona_circle', function () {
    map.getCanvas().style.cursor = '';
  });

  }
  
  // code for creating an SVG donut chart from feature properties
  function createDonutChart(props) {

    var offsets = [];
    var counts = [
      props.confirmed1,
      props.confirmed2,
      props.confirmed3,
      props.confirmed4,
      props.confirmed5
    ];
    var total = 0;
    for (var i = 0; i < counts.length; i++) {
      offsets.push(total);
      total += counts[i];
    }
    var fontSize =
      total >= 1000 ? 22 : total >= 100 ? 20 : total >= 10 ? 18 : 16;
    var r = props.sum >= 1000 ? 50 : props.sum >= 100 ? 32 : props.sum >= 10 ? 24 : 18;
    var r0 = Math.round(r * 0.88);
    var w = r * 2;

    var html =
      '<div><svg width="' +
      w +
      '" height="' +
      w +
      '" viewbox="0 0 ' +
      w +
      ' ' +
      w +
      '" text-anchor="middle" style="font: ' +
      fontSize +
      'px sans-serif">';

    for (i = 0; i < counts.length; i++) {
      html += donutSegment(
        offsets[i] / total,
        (offsets[i] + counts[i]) / total,
        r,
        r0,
        colors[i]
      );
    }
    html +=
      '<circle cx="' +
      r +
      '" cy="' +
      r +
      '" r="' +
      r0 +
      '" fill="white" /><text dominant-baseline="central" transform="translate(' +
      r +
      ', ' +
      r +
      ')">' +
      props.sum.toLocaleString() +
      '</text></svg></div>';

    var el = document.createElement('div');
    el.innerHTML = html;
    return el.firstChild;
  }

  function donutSegment(start, end, r, r0, color) {
    if (end - start === 1) end -= 0.00001;
    var a0 = 2 * Math.PI * (start - 0.25);
    var a1 = 2 * Math.PI * (end - 0.25);
    var x0 = Math.cos(a0),
      y0 = Math.sin(a0);
    var x1 = Math.cos(a1),
      y1 = Math.sin(a1);
    var largeArc = end - start > 0.5 ? 1 : 0;

    return [
      '<path d="M',
      r + r0 * x0,
      r + r0 * y0,
      'L',
      r + r * x0,
      r + r * y0,
      'A',
      r,
      r,
      0,
      largeArc,
      1,
      r + r * x1,
      r + r * y1,
      'L',
      r + r0 * x1,
      r + r0 * y1,
      'A',
      r0,
      r0,
      0,
      largeArc,
      0,
      r + r0 * x0,
      r + r0 * y0,
      '" fill="' + color + '" />'
    ].join(' ');
  }
