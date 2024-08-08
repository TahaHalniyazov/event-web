<template>
    <div>
        <section class="event-card">
            <div class="event-card-item-1">
                <div class="event-card-item-p">

                    <h3>{{ event.eventName }}</h3>
                    <p>{{ event.eventHost }}</p>
                    <star-rating class="star"></star-rating>
                    <p>{{ event.eventDate }} в {{ event.eventTime }}</p>                
                    <p>{{ event.cafeName }}</p>
                    <p>{{ event.eventAdress }}</p>
                </div>
            </div>
            <div class="event-card-item-2">
                <img src="@/assets/img/section-img/image 24.png" alt="" class="event-card-image">
            </div>
            <div class="event-card-item-3">
                <BookingButton class="booking"/>
                
            </div>
            <div class="event-card-item-4">
                <!-- <button class="share-btn"><img src="@/assets/img/section-img/forward.svg" alt="" class="share-img"></button> -->
                <share-popup @popup-opened="popupOpened" @popup-closed="popupClosed"></share-popup>
            </div>
           
        </section>
    </div>
</template>

<script>
import BookingButton from '@/components/Buttons/BookingButton.vue'
import StarRating from '@/components/StarRating.vue'
import SharePopup from '@/components/SharePopup.vue'
    export default {
        // data() {
        //     return {                
        //         eventName: 'Монополия',
        //         eventHoss: 'Алексей Александров',
        //         eventDate: '14.02.2024',
        //         eventTime: '19:00',
        //         cafeName: '<<Eaty>>',
        //         eventAdress: 'Большая морская Street' 
        //     }
        // },
        props: {
    event: {
      type: Object,
      required: true
    }
  },
        components: {
            BookingButton, StarRating, SharePopup
        },
        
    }
</script>

<style  scoped>
.event-card {
    max-width: 1400px;
    background: linear-gradient(to right, rgba(252, 214, 116, 1), rgba(254, 83, 60, 1), rgba(254, 83, 60, 1), rgba(252, 92, 94, 1), rgba(244, 121, 208, 1), rgba(228, 182, 252, 1));
    display: flex;
    justify-content: space-around;    
    align-items: center;
    border-radius: 16px;
    margin-top: 60px;
    padding: 10px 10px 0 10px;
    z-index: 999;
}
.event-card-item-1 {
    font-size: 20px;
    color: white;
    flex: 35%;
    margin-left: 100px;
    
    
}

.star {
    background: white;
    border-radius: 30px;
    padding-left: 6px;
}

.event-card-item-2 {
    flex: 30%;
    height: 100%; /* Установите высоту блока */
    display: flex;
    justify-content: center;
    align-items: flex-end; /* Выровнять содержимое по нижнему краю */
}


.event-card-image {
    align-self: flex-end; /* Располагаем изображение внизу блока */
    
}
.event-card-item-3 {
    flex: 30%;
    text-align: center;
}
h3 {
    margin-bottom: 10px;
    font-size: 32px;
}
.event-card-item-4 {
    flex: 5%;
    margin-bottom: 120px;
    text-align: center;
}
p {
    margin-top: 16px;
    font-weight: 500;
}
.share-btn {
    border: none;
    background: transparent;
    cursor: pointer;
}

@media (max-width: 990px) { 
    
    .event-card-image {
    align-self: flex-end; /* Располагаем изображение внизу блока */
    width: 90%;
    height: 90%;
    margin-top: 18px;
    
}
}
@media (max-width: 760px) { 
    .event-card {

    padding: 14px;
}
    .event-card-image {
    width: 70%;
    height: 70%;
    align-self: flex-end;
    
    
}
.event-card-item-1 {
    font-size: 18px;
    color: white;
    flex: 35%;
    margin-left: 40px;    
}
h3 {
    margin-bottom: 10px;
    font-size: 26px;
}
  
}

@media (max-width: 480px) {
    .event-card {
        display: grid;
        grid-template-columns: auto 1fr; /* Один столбец для текста и кнопки, второй для изображения */
        gap: 10px;        
        padding: 30px;
    }
    .event-card-item-1 {
        font-size: 14px;
        color: white;
        flex: 35%;
        margin-left: 0;    
}
    .event-card-image{
        justify-self: end; /* Размещаем изображение справа */
        align-self: flex-end;
    }
    .event-card-item-4 {
        display: none;
    }
    .booking {
        text-align: left;
    }
   
}

@media (max-width: 360px) { 
    h3 {
    margin-bottom: 8px;
    font-size: 20px;
}
.event-card-item-1 {
    font-size: 16px;
   
    margin-left: 0;    
}
p {
    margin-top: 8px;
    font-weight: 400;
    
}
}
</style>