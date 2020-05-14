var map;
var marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: budapest,
        zoom: 8,
        disableDefaultUI: true
    });

    marker = new google.maps.Marker({
        position: budapest,
        map: map,
        title: 'Want to go!',
        animation: google.maps.Animation.DROP
    });

    marker.addListener('click', adEvent);
};

function adEvent () {

    markerPosition = {
        "lat" : marker.position.lat(),
        "lng" : marker.position.lng()
    }

    if ((markerPosition.lat === budapest.lat)&&(markerPosition.lng === budapest.lng)) {
        alert("Thanks for your interest in \"Budapest, Hungary\"")
    }
    if ((markerPosition.lat === krakow.lat)&&(markerPosition.lng === krakow.lng)) {
        alert("Thanks for your interest in \"Kraków, Poland\"")
    }
    if ((markerPosition.lat === prague.lat)&&(markerPosition.lng === prague.lng)) {
        alert("Thanks for your interest in \"Prague, Czechia\"")
    }
    if ((markerPosition.lat === lviv.lat)&&(markerPosition.lng === lviv.lng)) {
        alert("Thanks for your interest in \"Lviv, Ukraine\"")
    }
    if ((markerPosition.lat === kosice.lat)&&(markerPosition.lng === kosice.lng)) {
        alert("Thanks for your interest in \"Košice, Slovakia\"")
    }
};


window.addEventListener('scroll', function() {
    windowHeight=window.innerHeight;
    if (scrollY >=0*windowHeight && scrollY<0.55*windowHeight) {
        map.panTo(budapest);
        marker.setPosition(budapest)
    };
    if (scrollY >=0.55*windowHeight && scrollY<1.65*windowHeight) {
        map.panTo(krakow);
        marker.setPosition(krakow)
    };
    if (scrollY >=1.65*windowHeight && scrollY<2.75*windowHeight) {
        map.panTo(prague);
        marker.setPosition(prague)
    };
    if (scrollY >=2.75*windowHeight && scrollY<3.85*windowHeight) {
        map.panTo(lviv);
        marker.setPosition(lviv)
    };
    if (scrollY >=3.85*windowHeight && scrollY<4.95*windowHeight) {
        map.panTo(kosice);
        marker.setPosition(kosice)
    };
});

var budapest = {
    "lat" : 47.497912,
    "lng" : 19.040235
};

var krakow = {
    "lat" : 50.06465009999999,
    "lng" : 19.9449799
};

var prague = {
    "lat" : 50.0755381,
    "lng" : 14.4378005
};

var lviv = {
    "lat" : 49.839683,
    "lng" : 24.029717
};

var kosice = {
    "lat" : 48.7163857,
    "lng" : 21.2610746
};