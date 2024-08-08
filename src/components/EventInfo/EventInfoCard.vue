<template>
    <div>        
        <div class="event-info-card-page">
            <div class="event-info-card">
                <div class="event-info-card-item1">
                        <div class="event-info-card-title">
                            <h4>Игра: {{ EventInfoName }}</h4>
                            
                        </div>
                        <p>Ведущий: {{ EventInfoHost }}</p>
                        <p>{{ EventInfoDate }} в {{ EventInfoTime }}</p>
                        <p>Стоимость: {{ EventInfoCost }} руб </p>
                        <div class="event-info-card-rules">
                            <p>Правила:</p>
                            <p>{{  EventInfoRules }}</p>
                        </div>
                </div>
                <div class="event-info-card-item2">
                    <BookingButton />
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import BookingButton from '@/components/Buttons/BookingButton.vue'

    export default {
        name: 'EventInfoCard',
        props: {
            msg: String
        },
        components: { BookingButton },
        data() {
            return {
                EventInfoName: '"Cashflow"',
                EventInfoHost: 'Алексей Алексеев',
                EventInfoDate: '14.02.24',
                EventInfoTime: '17:00',
                EventInfoCost: '1000',
                EventInfoRules: 'Объясняем правила последний раз, вот так и так нужно делать, сколько можно объяснять',
            }
        }
        
    }
</script>

<style scoped>
.event-info-card-page {
    max-width: 1400px;
    margin: 0 auto; 
    font-family: "Montserrat", sans-serif;
    margin-top: 20px;
}
.event-info-card {
    max-width: 100%;
    background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(244, 121, 208, 1), rgba(228, 182, 252, 1));
    border-radius: 10px;
    padding: 20px;
    color: white;
    display: flex;
    justify-content: space-between;
}

.event-info-card-title h4 {
    font-size: 20px;
    font-weight: 400;
}

.event-info-card p  {
    font-size: 16px;
    font-weight: 300;
    margin-top: 10px;
}
.event-info-card-rules {
    margin-top: 44px;
}
.event-info-card-rules p {
    max-width: 40%;
}

@media (max-width: 990px) { 
.event-info-card-rules p {
    max-width: 55%;
}

 }

 @media (max-width: 760px) { 
.event-info-card-rules p {
    max-width: 70%;
}

 }

 @media (max-width: 480px) { 
.event-info-card-rules p {
    max-width: 100%;

}
.event-info-card {
    flex-direction: column;
}
.event-info-card-rules p:last-child{
    margin-bottom: 26px;
}

 }
</style>