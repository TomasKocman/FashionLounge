function googleMap () {
	let myLatLng = { lat: 49.293902, lng: 15.821219 };

	let map = new google.maps.Map(document.getElementById('google-map'), {
		center: myLatLng,
		zoom: 15,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.TOP_CENTER
		},
		scaleControl: true,
		streetViewControl: true,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		fullscreenControl: true
	});

	let marker = new google.maps.Marker({
		position: myLatLng,
		map: map
	});
}