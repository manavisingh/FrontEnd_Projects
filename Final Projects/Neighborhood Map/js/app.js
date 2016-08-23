// The foursquare client ID and Secret ID obtained from the fourquare API guide.

var clientID = 'XLWQA4EHKKKYHJRO4CHQDBJVJRL1QNNKN1DYWYUZZPCFP1NM';	
var clientSECRET = 'FYG3T2VNDRZNRDQIN1SIKYECDOYWADZOJXD4BW4Y5ES3BRSW';

//The Model with the location data	
var Fav_locations = [{
    name: 'Prost Brewpub Services',
    latlng: {
        lat: 12.949918,
        lng: 77.6541309
    },
    address: '749, 10th Main, 80 Feet Road, 4th Block, Near Maharaja Hotel, Koramangala',
    id: 'Koramangala'
}, {
    name: 'UB City',
    latlng: {
        lat: 12.9723422,
        lng: 77.5967357
    },
    address: '24, Vittal Mallya Road',
    id: 'Shivaji Nagar'
}, {
    name: 'Windmills Craftworks',
    latlng: {
        lat: 12.9999619,
        lng: 77.72627299999999
    },
    address: 'No. 331, 5B Road, EPIP Zone, Whitefield',
    id: 'Whitefield'
}, {
    name: 'Toscano',
    latlng: {
        lat: 13.0086105,
        lng: 77.58419929999999
    },
    address: '1st Floor, Orion Mall, Brigade Gateway',
    id: 'Yeshwantpur'
}, {
    name: 'Big Brewsky',
    latlng: {
        lat: 12.9209007,
        lng: 77.70799939999999
    },
    address: 'Sarjapur Road, Behind MK Retail',
    id: 'Sarjapur'
}]


//Initializing the Location function
var Location = function(data) {
    var self = this;
    self.name = data.name;
    self.latlng = data.latlng;
    self.id = data.id;
    self.address = data.address;
	self.distance = ko.observable(data.distance);
};

var map, marker;

//The viewmodel with the ko observables
var viewModel = function() {

    var self = this;

    this.names = ko.observableArray([]);

    this.markers = ko.observableArray([]);

    this.locationList = ko.observableArray([]);
	//Calling the four square api function for thrid party data about the locations.
	this.foursquareApi = function() {
	
    //Pushing the locations data into the locationList variable
    Fav_locations.forEach(function(location) {
        self.locationList.push(new Location(location));
    });

    //Initializing the infoWindow and setting the bounds to load the map with all points visible.
    var largeInfoWindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    //the marker data from the locations object
    for (var i = 0; i < self.locationList().length; i++) {

        marker = new google.maps.Marker({
            map: map,
            position: self.locationList()[i].latlng,
            animation: null,
            title: Fav_locations[i].name,
            content: '',
            address: Fav_locations[i].address,
            draggable: true,
            visible: true,
            id: i
        });

        //Setting bounds for centering the map
        bounds.extend(marker.getPosition());
        map.fitBounds(bounds);

        self.markers().push(marker);

        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfoWindow);
        });
        marker.addListener('click', function() {
            toggleBounce(this);
        });
        self.locationList()[i].marker = marker;

    };

    //Populating the info Window with the title, address and id from the Location object
    var populateInfoWindow = function(marker, infowindow) {

        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent('<div>' + '<h2>' + marker.title + '</h2>' + marker.content + '<h3>' + marker.address + '</h3>' + '</div>');
            infowindow.open(map, marker);

            infowindow.addListener('closeclick', function() {
                infowindow.marker = null;
            });
        }
    };

    //Filtering the data as the user enters it in the input tab
    self.query = ko.observable('');

    self.filteredPlaces = ko.computed(function() {
        return ko.utils.arrayFilter(self.locationList(), function(location) {
            if (self.query().length === 0 || location.name.toLowerCase().indexOf(self.query().toLowerCase()) > -1) {
                location.marker.setVisible(true);
                return true;
            } else {
                location.marker.setVisible(false);
                return false;
            }
        });
    });

    //Setting and animating the marker
    self.setMarker = function(data) {
        self.locationList().forEach(function(location) {
            location.marker.setVisible(false);
        });

        data.marker.setVisible(true);

        data.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            data.marker.setAnimation(null);
        }, 2000);
        map.setCenter(data.marker.position);
		populateInfoWindow(data.marker, largeInfoWindow);
    }

    var toggleBounce = function(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                marker.setAnimation(null)
            }, 750);
        }
    };
	
	//Setting the ajax request for the Foursqyare API data.
	self.locationList().forEach(function(item) {
				//API error handling
				var api_error = setTimeout(function() {
					alert("Oops! Foursquare API failed to load");
					},1000);
					
				$.ajax({
					type: 'GET',
					dataType: "jsonp",
					cache: false,
					url: 'https://api.foursquare.com/v2/venues/search',
					data: 'client_id='+clientID+'&client_secret='+clientSECRET+'&v=20130815&ll='+item.latlng.lat+','+item.latlng.lng+'&query='+item.name,
					success: function(data) {
								//Setting the info window data as the distance and check in count using the Foursquare API.
								item.marker.title =  data.response.venues[0].name ; 
								item.marker.content = '	Distance: '+ (data.response.venues[0].location.distance)/1000 + " km's" + '</br>' + '	CheckinCount: ' + data.response.venues[0].stats.checkinsCount;			
								clearTimeout(api_error);	
							}				
				});
					
			});
		};
		
		self.foursquareApi();

};

//The initMap function to initialize the Map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            lat: 13.173706,
            lng: 77.88268080000002
        },
    });

    ko.applyBindings(new viewModel());
}