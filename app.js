
  const mapStyle = [{
    'featureType': 'administrative',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'on',
    },
    {
      'lightness': 33,
    },
    ],
  },
    ];
  
  function initMap() {
    // Create the map.
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 52.157512, lng: 5.392124},
      styles: mapStyle,
    });
  
    // Load the stores GeoJSON onto the map.
    map.data.loadGeoJson('stores.json', {idPropertyName: 'storeid'});
  
    // Define the custom marker icons, using the store's "category".
//    map.data.setStyle((feature) => {
 //     return {
 //       icon: {
 //         url: `img/icon_${feature.getProperty('category')}.png`,
 //         scaledSize: new google.maps.Size(64, 64),
 //       },
//      };
 //   });
  
    const apiKey = 'AIzaSyC-UCRG--9qHjOyR-De1Tkh0EfbN_ox3Mg';
    const infoWindow = new google.maps.InfoWindow();
  
    // Show the information for a store when its marker is clicked.
    map.data.addListener('click', (event) => {
      const category = event.feature.getProperty('category');
      const name = event.feature.getProperty('name');
      const description = event.feature.getProperty('description');
      const afbeelding = event.feature.getProperty('afbeelding');
      const hours = event.feature.getProperty('hours');
      const phone = event.feature.getProperty('phone');
      const position = event.feature.getGeometry().get();
      const content = `
        <img style="float:left; width:200px; margin-top:30px" src="${afbeelding}">
        <div style="margin-left:220px; margin-bottom:20px;">
          <h2>${name}</h2><p>${description}</p>
          <p><b>Openingstijden:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
          
        </div>
        `;
  
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
      infoWindow.open(map);
    });

 
  }
  
