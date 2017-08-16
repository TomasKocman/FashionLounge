function googleMap () {
	let myLatLng = { lat: 49.293902, lng: 15.821219 };

	let map = new google.maps.Map(document.getElementById('google-map'), {
		center: myLatLng,
		zoom: 15,
	});

	let marker = new google.maps.Marker({
		position: myLatLng,
		map: map
	});
}