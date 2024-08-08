<template>
    <div>
        <Navbar/>
        <div class="event-info-page">
            <router-link to="/" class="back">&#10094; Вернуться</router-link>
            <h2 class="about"><span>О мероприятии</span></h2>
            <div class="event-info-card-component">
                <EventInfoCard/>
            </div>
            <h2 class="title-margin"><span>Адрес</span></h2>
            <Map class="map"/>
            <h2 class="title-margin"><span>Популярно на этой неделе</span></h2>
            <div class="event-info-popuar-card">
                <EventInfoPopular/>
            </div>
            <h2 class="title-margin"><span>Вы смотрели</span></h2>
            
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import EventInfoCard from '@/components/EventInfo/EventInfoCard.vue'
import EventInfoPopular from '@/components/EventInfo/EventInfoPopular.vue'
import Map from '@/components/Map/Map.vue'

    export default {
        components: { Navbar, Footer, EventInfoCard, Map, EventInfoPopular  }
        
    }
</script>

<style scoped>
.event-info-page {
    max-width: 1400px;
    margin: 0 auto; 
    font-family: "Montserrat", sans-serif;
    margin-top: 50px;
    padding: 10px;
}
.event-info-page h2 span {
    background: linear-gradient(to right,rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
    background-clip: text;
    color: transparent;
    font-size: 32px;    
}

.back{
    text-align: left;
    text-decoration: none;
    color: #666666;    
    margin-top: 40px;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;  
    
}
.title-margin {
    margin-top: 100px;
    margin-bottom: 50px;
}
.about {
    margin-top: 30px;
}

@media (max-width: 990px) { 
.event-info-page h2 {
    text-align: center;
}
.event-info-page {

    padding: 20px;
}

 }

 @media (max-width: 480px) { 
    .event-info-page h2 span {
        font-size: 28px;
}
.title-margin {
    margin-top: 50px;
    margin-bottom: 30px;
}
  }

  @media (max-width: 360px) { 
    .event-info-page h2 span {
        font-size: 20px;
}
  }

</style>