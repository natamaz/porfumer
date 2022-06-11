function initMap() {

    var bluhera = {lat: 55.0036883, lng: 82.9178295};

  
    var map = new google.maps.Map(
  
        document.getElementById('map'), {zoom: 13, center: bluhera});
  
    var marker1 = new google.maps.Marker({position: bluhera, map: map,icon: '../img/map-info.png'});

  
    var StreetBlu = '<div id="content">'+
          '<h5>ул. Блюхера, д. 16/4'+'</h5>'+
          '</div>';
  
          // Создаем информационное окно
    var infoBlu = new google.maps.InfoWindow({
      content: StreetBlu,
      maxWidth: 400
   });
   // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
   marker1.addListener('click', function() {
    infoBlu.open(map, marker1);
   });
  }