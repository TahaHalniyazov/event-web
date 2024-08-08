<template>
  <div id="map" ref="map"></div>
</template>

<script>
import markerIcon from '@/assets/img/section-img/marker.png';
export default {
  name: 'Map',
  props: {
    center: {
      type: Array,
      default: () => [44.952116, 34.102411]
    },
    zoom: {
      type: Number,
      default: 10
    },
    events: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: 'view'
    },
    eventName: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      ymaps.ready(() => {
        this.myMap = new ymaps.Map(this.$refs.map, {
          center: this.center,
          zoom: this.zoom,
          controls: []
        });

        if (this.mode === 'create') {
          this.setupCreateMode();
        } else {
          this.addMarkers();
        }
      });
    },
    setupCreateMode() {
      let currentMarker = null;

      this.myMap.events.add('click', (e) => {
        const coords = e.get('coords');
        console.log('Координаты клика:', coords);

        ymaps.geocode(coords).then((res) => {
          const firstGeoObject = res.geoObjects.get(0);
          const address = firstGeoObject.getAddressLine();
          console.log('Адрес:', address);

          if (currentMarker) {
            this.myMap.geoObjects.remove(currentMarker);
          }

          currentMarker = new ymaps.Placemark(coords, {
            hintContent: address,
            balloonContent: `<strong>${this.eventName || 'Без названия'}</strong><br>${address}`
          }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42],
            iconContentOffset: [15, 15],
            iconContentLayout: ymaps.templateLayoutFactory.createClass(
              `<div style="
                position: absolute;
              top: 0; 
              left: 0;
              color: white;
              font-weight: 600;
              font-size: 14px;
              margin-left: 10px;
              padding: 10px;
              border-radius: 20px;
              
              background-color: #FD7567;
              white-space: nowrap;">
                 ${this.eventName || 'Без названия'}
               </div>`
            )
          });

          this.myMap.geoObjects.add(currentMarker);
        });
      });
    },
    addMarkers() {
      this.events.forEach(event => {
        const { location, eventName, description } = event;

        const marker = new ymaps.Placemark(location, {
          hintContent: eventName,
          balloonContent: `<strong>${eventName}</strong><br>${description}`
        }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: markerIcon,
          iconImageSize: [55, 55],
          iconImageOffset: [-15, -42],
          iconContentOffset: [15, 15],
          iconContentLayout: ymaps.templateLayoutFactory.createClass(
            `<div class="marker-content">${eventName}</div>
               
             </div>`
          )
        });

        marker.events.add('click', () => {
          this.$emit('event-selected', event);
        });

        this.myMap.geoObjects.add(marker);
      });
    }
  }
};
</script>

<style>
#map {
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 400px;  
  margin: 0 auto;
}
.marker-content {
    position: absolute;
    top: 16px; 
    left: 14px;
    color: white;
    font-weight: 600;
    font-size: 14px;
    margin-left: 10px;
    padding: 10px;
    border-radius: 20px;
    
    background-color: #FD7567;
    white-space: nowrap;
}

@media (max-width: 1200px) {
  #map { 
    width: 98%;
  }
  .marker-content {
    
    padding: 8px;
    border-radius: 4px;
  }
}


</style>

  