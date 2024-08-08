<template>
  <div class="main">     
    <Header/>
    
    <div class="main-container">
      <ComingEvents/>
      <section class="events-map">
        <h2 class="events-map-title"><span>Карта</span> событий</h2>
        <EventMap/>        
        <Map :events="events" @event-selected="handleEventSelected"/>        
        <transition name="fade">
          <EventCard v-if="selectedEvent" :event="selectedEvent"  />
        </transition>
        <Feedback/>
        <TicketPopup/>
      </section>
      <EventBoard/>
    </div>
    <!-- <UserDashboards/> -->
    
    <router-link to="/event-card-create"><button>Инструкция</button></router-link>
    <router-link to="/host-setting"><button>Party maker</button></router-link>
    <router-link to="/player-page"><button>Player Page</button></router-link>
    <router-link to="/event-info"><button>Event-info</button></router-link>
    <Payment/>
    <router-link to="/templates"><button>Templates</button></router-link>
    <router-link to="/user-panel"><button>User-panel</button></router-link>
    
    <Footer/>
     
      
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import EventMap from '@/components/EventMap.vue'
import EventBoard from '@/components/EventBoard/EventBoard.vue'
import ComingEvents from '@/components/ComingEvents.vue'
import Map from '@/components/Map/Map.vue'

import Payment from '@/components/Payment.vue'
import TicketPopup from '@/components/BookingTicket/TicketPopup.vue'





import UserEvents from '@/components/UserPanel/UserEvents.vue';
import EventCard from '@/components/EventCard/EventCard.vue';
import Feedback from '@/components/Feedback.vue';
import Templates from '@/components/Templates.vue';
import { fetchEvents } from '@/js/api';

// import UserDashboards from '@/components/UserDashboard/UserDashboards.vue'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      events: [],
      selectedEvent: null
    };
  },
  created() {
    this.loadEvents();
  },
  methods: {
    loadEvents() {
      fetchEvents().then((data) => {
        this.events = data;
      });
    },
    handleEventSelected(event) {
      this.selectedEvent = event;
    },
     handleRating(rating) {
      console.log('Selected rating:', rating);
    },
    handleRating(rating) {
      console.log('Selected rating:', rating);
    }
  },
 
  
  components: {
    Header, Footer,    EventCard, EventMap, EventBoard, Feedback, ComingEvents, Templates, Payment, UserEvents, Map, TicketPopup
    
    
  },

}
</script>


<style>
.main{
  max-width: 100%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;   
  
}

.main-container {
  max-width: 1400px;
  margin: 0 auto;
}


.events-map {
  margin: 0 auto;
  margin-top: 100px;

  
}
.events-map-title {
  text-align: left;
  margin-bottom: 20px;
  font-size: 32px;
}
.events-map-title span {
  background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
    background-clip: text;
    color: transparent;

}

.filter-button {
  margin-top: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@media (max-width: 1200px) { 
  .events-map {
  margin-top: 90px;
  margin: 10px;
  
}
.events-map-title {
  margin-left: 10px;
}
}

@media (max-width: 990px) { 
  .events-map-title {
    text-align: center;
  }

}

@media (max-width: 480px) { 
  .events-map-title {
    text-align: center;
    font-size: 26px;
    margin-left: 0;
  }
}

</style>
