<template>
    <div >
        <Navbar/>
        <div class="user-panel-page">
            <div class="user-options">
                    <div class="user-options-1">
                        <img src="@/assets/img/section-img/user-circle-2.png" alt="">
                        <div class="user-options-name">
                            <p>{{ UserName }}</p>
                            <p>{{ UserPhone }}</p>
                            <p>{{ UserMail }}</p>
                            <p>РейтинГ: {{ UserRating }}</p>
                            <p>Баланс: {{ UserBalance }}</p>
                        </div>
                    </div>
                    <div class="user-options-2">
                        <PlayerPageButton/>
                    </div>
            </div>
            <UserEvents :allPanelEvents="getUserPanelEvents"/>
            <Calendar :fullCalendar="fullCalendar" @date-selected="handleDateSelected" />
            <div class="events_block">
                <div class="events" v-for="event in allEvents" :key="event.id">
                    <h2>{{ event.title }}</h2>
                    <p>{{ event.body }}</p>
                </div>
            </div>
            <FinancialReports/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import calendar from "../../js/calendar.js";
import moment from "moment"
import Navbar from '@/components/Navbar.vue';
import Calendar from '@/components/HostComponents/Calendar.vue'
import Footer from '@/components/Footer.vue';
import PlayerPageButton from '@/components/Buttons/PlayerPageButton.vue';
import UserEvents from '@/components/UserPanel/UserEvents.vue';
import FinancialReports from '@/components/UserPanel/FinancialReports.vue';
    export default {
        components: {
            Navbar, Footer, PlayerPageButton, UserEvents, Calendar, FinancialReports
        },
        data () {
            return {
                UserName: 'Иван',
                UserPhone: '+79789786543',
                UserMail: 'e-mail@mail.ru',
                UserRating: '5.0',
                UserBalance: ''
            }
        },
         computed: {
            ...mapGetters(['getUserPanelEvents'], ['allEvents']),

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
.user-panel-page {
    max-width: 1400px;
    margin: 0 auto; 
    font-family: "Montserrat", sans-serif;
    margin-top: 50px;
    padding: 20px;
    
}
.user-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user-options-1 {
    display: flex;
}

.user-options-name {
    margin-left: 20px;
    margin-top: 30px;
    font-size: 16px;

}

.user-options-name p {
    margin-bottom: 10px;
}

@media (max-width: 760px) { 
    .user-options-1 img {
        width: 150px;
    }
 }

 @media (max-width: 480px) {

    .user-options-1 img {
        width: 100px;
        height: 100px;
    }
    .user-options-name {
    margin-left: 6px;
    margin-top: 20px;
}
    .user-options {
        flex-direction: column-reverse;
        
}
.user-options-1 {
    align-self: flex-start;
    align-items: center;
    
    
}
.user-options-2 {
    align-self: flex-end;
}
  } 


@media (max-width: 360px) {
    .user-options-2 {
        margin-bottom: 30px;
}
  }
</style>