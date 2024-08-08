<template>
    <div class="user-events-page">
        <h2><span>Мои</span> мероприятия</h2>
        <div v-if="$mq === 'mobile'" class="tabs">
            <button :class="{'active': activeTab === 'moderation'}" @click="activeTab = 'moderation'">На модерации</button>
            <button :class="{'active': activeTab === 'expected'}" @click="activeTab = 'expected'">Ожидаются</button>
            <button :class="{'active': activeTab === 'established'}" @click="activeTab = 'established'">Состоявшиеся</button>
        </div>
        <div class="events-container">
            <div v-show="activeTab === 'moderation' || $mq === 'desktop'" class="event-category">
                <h3 v-if="$mq === 'desktop'">На модерации</h3>
                <div class="events">
                    <div v-for="event in moderationPanelEvents" :key="event.id" class="event-card">
                        <div class="share">
                            <h4>{{ event.title }}</h4>
                           
                        </div>                        
                        <div class="subscribe">
                            <p>{{ event.name }}</p>
                            
                        </div>
                        <p>{{ event.description }}</p>
                    </div>
                </div>
            </div>
            <div v-show="activeTab === 'expected' || $mq === 'desktop'" class="event-category">
                <h3 v-if="$mq === 'desktop'">Ожидаются</h3>
                <div class="events">
                    <div v-for="event in expectedPanelEvents" :key="event.id" class="event-card">
                        <div class="share">
                            <h4>{{ event.title }}</h4>                            
                        </div>                      
                        <div class="subscribe">
                            <p>{{ event.name }}</p>                            
                        </div>
                        <p>{{ event.description }}</p>
                    </div>
                </div>
            </div>
            <div v-show="activeTab === 'established' || $mq === 'desktop'" class="event-category">
                <h3 v-if="$mq === 'desktop'">Состоявшиеся</h3>
                <div class="events">
                    <div v-for="event in establishedPanelEvents" :key="event.id" class="event-card ">
                        <h4>{{ event.title }}</h4>
                        <div class="subscribe justify-content small-rating">
                            <p>{{ event.name }}</p>                            
                            
                        </div>
                        <p>{{ event.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import SharePopup from '@/components/SharePopup.vue';
import StarRating from '@/components/StarRating.vue';
import * as dayjs from 'dayjs';

export default {
    components: {
        SharePopup, StarRating
    },
    data() {
        return {
            activeTab: 'moderation',
        };
    },
    props: {
        allPanelEvents: {
            type: Array,
            required: true
        }
    },
    computed: {
        moderationPanelEvents() {
            return this.allPanelEvents.filter(event => event.moderation);
        },
        expectedPanelEvents() {
            return this.allPanelEvents.filter(event => event.expected);
        },
        establishedPanelEvents() {
            let dateNow = dayjs().format("MM-DD-YYYY");
            let lastPanelEvents = this.allPanelEvents.filter(event => dayjs(event.date).isBefore(dayjs(dateNow)));
            return lastPanelEvents;
        },
    },
};
</script>

<style scoped>
.user-events-page {
    font-family: "Montserrat", sans-serif;
    margin-top: 100px;
}
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
.user-events-page h2 {
    font-size: 32px;
    color: #333;
    text-align: center;
}

.user-events-page h2 span {
    background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
    background-clip: text;
    color: transparent;
}

.user-events-page .events-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.user-events-page .event-category {
    flex: 1;
    min-width: 300px;
    margin-top: 80px;
}

.user-events-page .event-category h3 {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
}

.user-events-page .events {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.user-events-page .share {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: flex-start;
}

.user-events-page .subscribe {
    display: flex;
}

.user-events-page .subscribe-btn {
    background: transparent;
    border: none;
    cursor: pointer;
}

.user-events-page .subscribe img {
    margin-left: 14px;
}

.user-events-page .event-card {
    background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(244, 121, 208, 1), rgba(228, 182, 252, 1));
    border-radius: 10px;
    padding: 20px;
    margin-top: 10px;
    min-height: 140px;
}

.user-events-page .event-card h4 {
    margin-top: 0;
    color: white;
    font-size: 16px;
    font-weight: 400;
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
.user-events-page .event-card p {
    margin: 5px 0;
    color: white;
}

@media (max-width: 1200px) {
    .user-events-page .star {
        background: white;
        border-radius: 30px;
        padding-left: 6px;
        margin-left: 40px;
    }

    .user-events-page .event-card {
        padding: 10px;
        margin-top: 10px;
    }

    .user-events-page .subscribe img {
        margin-left: 8px;
    }
}

@media (max-width: 990px) {
    .user-events-page .events {
        gap: 0;
    }
  
}

@media (max-width: 760px) {
    .user-events-page h2 {
        font-size: 26px;
        margin-bottom: 30px;
    }

    .user-events-page .event-category {
        margin-top: 20px;
    }
}

@media (max-width: 480px) {
    .user-events-page .tabs {
        display: flex;
        overflow-x: auto;
        gap: 10px;
        padding: 10px 0;
        margin-top: 10px;
        justify-content: center;
    }

    .user-events-page .tabs button {
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

    .user-events-page .tabs button.active {
        border-color: #ff5373;
        color: #ff5373;
    }
}

@media (max-width: 360px) {
    .user-events-page .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        padding: 5px 0;
        margin-top: 5px;
        justify-content: center;
    }

    .user-events-page .tabs button {
        flex: 0 0 auto;
        font-size: 16px;
        padding: 6px;
    }

    .user-events-page .star {
        margin-left: 0;
    }

    .user-events-page .event-card {
        padding: 10px;
        min-height: 0;
    }

    .user-events-page .subscribe img {
        margin-left: 6px;
    }

    .user-events-page .events-container {
        flex-direction: column;
    }
}
</style>
