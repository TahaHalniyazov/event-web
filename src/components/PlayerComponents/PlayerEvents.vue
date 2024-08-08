<template>
    <div class="player-events-page">
        <h2><span>Мои</span> мероприятия</h2>
        <div v-if="$mq === 'mobile'" class="tabs">
            <button :class="{'active': activeTab === 'booked'}" @click="activeTab = 'booked'">Забронированные</button>
            <button :class="{'active': activeTab === 'viewed'}" @click="activeTab = 'viewed'">Просмотренные</button>
            <button :class="{'active': activeTab === 'completed'}" @click="activeTab = 'completed'">Состоявшиеся</button>
        </div>
        <div class="events-container">
            <div v-show="activeTab === 'booked' || $mq === 'desktop'" class="event-category">
                <h3 v-if="$mq === 'desktop'">Забронированные</h3>
                <div class="events">
                    <div v-for="event in bookedEvents" :key="event.id" class="event-card">
                        <div class="share">
                            <h4>{{ event.title }}</h4>
                            <SharePopup/>
                        </div>                        
                        <div class="subscribe">
                            <p>{{ event.name }}</p>
                            <button class="subscribe-btn"><img src="@/assets/img/section-img/user-round-check.svg" alt=""></button>
                        </div>
                        <p>{{ event.description }}</p>
                    </div>
                </div>
            </div>
            <div v-show="activeTab === 'viewed' || $mq === 'desktop'" class="event-category">
                <h3 v-if="$mq === 'desktop'">Просмотренные</h3>
                <div class="events">
                    <div v-for="event in viewedEvents" :key="event.id" class="event-card">
                        <div class="share">
                            <h4>{{ event.title }}</h4>
                            <SharePopup/>
                        </div>                      
                        <div class="subscribe">
                            <p>{{ event.name }}</p>
                            <button class="subscribe-btn"><img src="@/assets/img/section-img/user-round-check.svg" alt=""></button>
                        </div>
                        <p>{{ event.description }}</p>
                    </div>
                </div>
            </div>
            <div v-show="activeTab === 'completed' || $mq === 'desktop'" class="event-category">
                <h3 v-if="$mq === 'desktop'">Состоявшиеся</h3>
                <div class="events">
                    <div v-for="event in completedEvents" :key="event.id" class="event-card ">
                        <h4>{{ event.title }}</h4>
                        <div class="subscribe justify-content small-rating">
                            <p>{{ event.name }}</p>
                            <button class="subscribe-btn"><img src="@/assets/img/section-img/user-round-check.svg" alt=""></button>
                            <StarRating class="star"/>
                        </div>
                        <p>{{ event.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script>
import SharePopup from '@/components/SharePopup.vue';
import StarRating from '@/components/StarRating.vue';
import moment from 'moment';
import * as dayjs from 'dayjs'
export default {
components: {
    SharePopup, StarRating
},
data() {
    return { 
    
    };
},

props: {
    allEvents:{
        type: Array,
        required: true
    }
},

computed: {
    bookedEvents() {
        return this.allEvents.filter(event => event.booked);
    },
    viewedEvents() {
        return this.allEvents.filter(event => event.viewed);
    },
    completedEvents() {
        // return this.allEvents.filter(event =>!event.booked &&!event.viewed);
        let dateNow = dayjs().format("MM-DD-YYYY");  
        let lastEvents = this.allEvents.filter(event => dayjs(event.date).isBefore(dayjs(dateNow)));
        return lastEvents;
    },

},

mounted() {}
};
</script> -->
<script>
import SharePopup from '@/components/SharePopup.vue';
import StarRating from '@/components/StarRating.vue';
import  dayjs from 'dayjs';
import moment from 'moment';

export default {
    components: {
        SharePopup, StarRating
    },
    data() {
        return {
            activeTab: 'booked', // Состояние для хранения текущей активной вкладки
            
        };
    },
    props: {
        allEvents: {
            type: Array,
            required: true
        }
    },
    computed: {
        bookedEvents() {
        return this.allEvents.filter(event => event.booked);
        },
        viewedEvents() {
            return this.allEvents.filter(event => event.viewed);
        },
        completedEvents() {
        // return this.allEvents.filter(event =>!event.booked &&!event.viewed);
        let dateNow = dayjs().format("MM-DD-YYYY");  
        let lastEvents = this.allEvents.filter(event => dayjs(event.date).isBefore(dayjs(dateNow)));
        return lastEvents;
    },
    }
    
};
</script>
<style scoped>

.tabs {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
}

.tabs button {
    padding: 10px 20px;
    font-size: 20px;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: color 0.3s;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
}

.tabs button.active {
    color: #ff5373; /* Цвет активной вкладки */
    border-bottom: 2px solid #ff5373; /* Подчеркнуть активную вкладку */
}
.star {
    background: white;
    border-radius: 30px;
    padding-left: 6px;
    margin-left: 40px;
}

.player-events-page {
font-family: "Montserrat", sans-serif;
margin-top: 100px;
}

.player-events-page h2 {
font-size: 32px;
color: #333;
text-align: center;
}

.player-events-page h2 span {
    background: linear-gradient(to right,rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
    background-clip: text;
    color: transparent;
    
}

.events-container {
display: flex;
gap: 20px;
flex-wrap: wrap;
}

.event-category {
flex: 1;
min-width: 300px;
margin-top: 80px;

}

.event-category h3 {
font-size: 20px;
margin-bottom: 10px;
text-align: center;
}

.events {
display: flex;
flex-direction: column;
gap: 20px;
}
.share {
    display: flex;
    
    justify-content: space-between;
    align-items: center;
    align-self: flex-start;
}

.subscribe {
    display: flex;
}
.subscribe-btn  {
    background: transparent;
    border: none;
    cursor: pointer;
}
.subscribe img {
    margin-left: 14px;
}

.event-card {
background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(244, 121, 208, 1), rgba(228, 182, 252, 1));
border-radius: 10px;
padding: 20px;
margin-top: 10px;
min-height: 140px;


}

.event-card h4 {
margin-top: 0;
color: white;
font-size: 16px;
font-weight: 400;
}

.event-card p {
margin: 5px 0;
color: white;
}


@media (max-width: 1200px) { 
    .star {     
        padding-left: 6px;
        margin-left: 10px;
}
.event-card {    
    padding: 10px;
    margin-top: 10px;
}
.subscribe img {
    margin-left: 8px;
}
}

@media (max-width: 990px) { 
    .events {
        gap: 0;           
}
}

@media (max-width: 760px) { 
.player-events-page h2 {
    font-size: 26px;
    margin-bottom: 30px;
}  
.event-category {  
    margin-top: 20px; /* Добавим это свойство */
}
}

@media (max-width: 480px) {
    .tabs {
        display: flex;
        overflow-x: auto;
        gap: 10px;
        padding: 10px 0;
        margin-top: 10px;
        justify-content: center;
    }

    .tabs button {
        flex: 0 0 auto;
        font-size: 14px;
        padding: 8px;
        border: 2px solid transparent;
        border-radius: 6px;
        background-color: transparent;
        color: #333;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .tabs button.active {
        border-color: #ff5373;
        color: #ff5373;
    } 

}
@media (max-width: 360px) {
    .tabs {
        display: flex;
        flex-wrap: wrap; /* Перенос вкладок на новую строку, если не помещаются */
        gap: 5px;
        padding: 5px 0;
        margin-top: 5px;
        justify-content: center; /* Центрирование кнопок */
    }

    .tabs button {
        flex: 0 0 auto;
        font-size: 16px;
        padding: 6px;
    }

    .star {
        margin-left: 0;
    }

    .event-card {
        padding: 10px;
        min-height: 0;
    }

    .subscribe img {
        margin-left: 6px;
    }

    .events-container {
        flex-direction: column; /* Вертикальное расположение вкладок и событий */
    }
    .small-rating {
        display: block;
                
    }
    .small-rating button {
        display: none;
    }  
}

</style>