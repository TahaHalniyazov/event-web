<template>
    <div>
        <Navbar/>
        <div class="player-page">
            <div class="player-options">
                <div class="player-options-1">
                    <img src="@/assets/img/section-img/user-circle-2.png" alt="">
                    <div class="player-options-name">
                        <p>{{ playerName }}</p>
                        <p>{{ playerPhone }}</p>
                        <p>{{ playerMail }}</p>
                    </div>
                </div>
                <div class="player-options-2">
                    <PlayerPageButton/>
                </div>
            </div>
            <PlayerEvents :allEvents="getUserEvents"/>
            <PlayerSubscribes/>
            <div class="support">
                <button class="support-button">Оставить заявку в техподдержку</button>
            </div>
        </div>
        <Footer/>

    </div>
</template>

<script>
import { mapGetters } from "vuex"
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import PlayerPageButton from '@/components/Buttons/PlayerPageButton.vue';
import PlayerEvents from '@/components/PlayerComponents/PlayerEvents.vue';
import PlayerSubscribes from '@/components/PlayerComponents/PlayerSubscribes.vue';
    export default {
        components: {
            Navbar, Footer, PlayerPageButton, PlayerEvents, PlayerSubscribes
        },
        data () {
            return {
                playerName: 'Иван',
                playerPhone: '+79789786543',
                playerMail: 'e-mail@mail.ru'
            }
        },

        computed: {
            ...mapGetters(['getUserEvents']),
        },
        
    }
</script>

<style scoped>
.player-page {
    max-width: 1400px;
    margin: 0 auto; 
    font-family: "Montserrat", sans-serif;
    margin-top: 50px;
    padding: 10px;
    
}
.player-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.player-options-1 {
    display: flex;
}

.player-options-name {
    margin-left: 20px;
    margin-top: 30px;
    font-size: 16px;

}

.player-options-name p {
    margin-bottom: 10px;
}
.support {
    text-align: center;
    margin: 100px 0;
}
.support-button {    
    padding: 10px 30px;
    font-family: "Montserrat", sans-serif;
    background: #FF006B;
    border: none;
    color: white;
    border-radius: 30px;
    cursor: pointer;
}

@media (max-width: 760px) { 
    .player-options-1 img {
        width: 150px;
    }
 }

 @media (max-width: 480px) {

    .player-options-1 img {
        width: 100px;
    }
    .player-options-name {
    margin-left: 6px;
    margin-top: 10px;
}
    .player-options {
        flex-direction: column-reverse;
        
}
.player-options-1 {
    align-self: flex-start;
    
}
.player-options-2 {
    align-self: flex-end;
}
  } 


@media (max-width: 360px) {
    .player-options-2 {
        margin-bottom: 30px;
}
  }
</style>