<template>
    <div>
      <div ref="mapContainer" class="map-container"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MapComponent",
    data() {
      return {
        address: "Russia, Moscow", // ваш адрес
      };
    },
    mounted() {
      // Инициализация карты после монтирования компонента
      this.initMap();
    },
    methods: {
      initMap() {
        // Создание скрипта для загрузки API Яндекс.Карт
        const script = document.createElement("script");
        script.onload = this.createMap;
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
        document.head.appendChild(script);
      },
      createMap() {
        // Инициализация карты после загрузки API Яндекс.Карт
        window.ymaps.ready(() => {
          // Создание геокодера для получения координат по адресу
          const geocoder = new window.ymaps.geocode(this.address);
          geocoder.then((response) => {
            const coordinates = response.geoObjects.get(0).geometry.getCoordinates();
  
            // Инициализация карты
            const map = new window.ymaps.Map(this.$refs.mapContainer, {
              center: coordinates,
              zoom: 10,
            });
  
            // Добавление маркера на карту
            const marker = new window.ymaps.Placemark(coordinates);
            map.geoObjects.add(marker);
          });
        });
      },
    },
  };
  </script>
  
  <style>
  .map-container {
    height: 200px;
    width: 400px;
  }
  </style>
  