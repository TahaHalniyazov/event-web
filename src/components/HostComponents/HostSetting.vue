<template>
    <div class="host-setting-page">
        <Navbar/>
        <div class="host-setting-container">
            <div class="hsc-item-1">
                <img src="@/assets/img/section-img/user-circle-2.png" alt="">
                <div class="hst-description">
                    <p class="media-360"><span>Ведущий:</span> {{ hostName }}</p>
                    <div class="hts-description-2">
                        <p><span>Рейтинг мероприятий:</span></p>
                        <StarRating class="star"/>
                    </div>                     
                </div>
            </div>
            <ReviewSection/>
            <Calendar :fullCalendar="fullCalendar" @date-selected="handleDateSelected" />
            <div class="events_block">
                <div class="events" v-for="event in allEvents" :key="event.id">
                    <h2>{{ event.title }}</h2>
                    <p>{{ event.body }}</p>

                </div>

            </div>

            
        </div>
      
        <Footer/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import moment from "moment"
import calendar from "../../js/calendar.js";
import StarRating from '@/components/StarRating.vue'
import ReviewSection from '@/components/HostComponents/ReviewSection.vue'
import Calendar from '@/components/HostComponents/Calendar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
    export default {
        components: {
            StarRating,  Navbar, Footer, Calendar, ReviewSection
        },
        data () {
            return {
                hostName: 'Алексей Александров'
                
            }
        },

        computed: {
            ...mapGetters(['allEvents']),

            fullCalendar() {
            return calendar;
            }
        },

        methods: {
           ...mapActions(['getAllEvents']),
           handleDateSelected(date) {
        console.log('Selected date:', date); // Обработка выбранной даты
    },
        },
       
        async mounted () {
            this.getAllEvents()

        }
        
    }

</script>

<style scoped>
.events_block {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;

}

.events {
    border: #000 1px solid;
    width: fit-content;
    height: fit-content;    
    margin: 2.5rem;
}
.host-setting-page {
    
}
.host-setting-container {
    max-width: 1400px;
    margin: 0 auto; 
    padding: 20px;   
}
.hsc-item-1 {
    display: flex;
    align-items: center;
    margin-top: 50px;
    
}
.hst-description {
    margin-left: 50px;
}
.hst-description p {
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    font-weight: 600;
    
}
.hst-description span {
    background: linear-gradient(to right,rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
    background-clip: text;
    color: transparent;
}
.hts-description-2 {
    display: flex;
    margin-top: 40px;
}
.star {
    margin-left: 20px;
    margin-top: 4px;    
}

@media (max-width: 760px) {
.hsc-item-1 {  
    margin-top: 30px;    
}
.hsc-item-1 img {
    width: 160px;
}
.hst-description p {
    font-size: 26px;   
}
.hst-description {
    margin-left: 16px;
}
}

@media (max-width: 480px) {
.hsc-item-1 img {
    width: 100px;
}
.hst-description p {
    font-size: 16px;   
}
.hst-description {
    margin-left: 10px;
}
.hts-description-2 {
    margin-top: 14px;
}
.star {
    margin-left: 4px;
    margin-top: 0;
    margin-bottom: 2px;    
}
}

@media (max-width: 360px) {
.hsc-item-1 img {
    width: 100px;
}
.hst-description p {
    font-size: 16px;   
}
.host-setting-container {
    padding: 10px;   
}
.media-360 {
    display: flex;
    flex-direction: column;
}
.star {
    margin-left: 0;
    
   
}
.hts-description-2 {
    display: block;
    margin-top: 10px;
 
}

}

</style>





































































