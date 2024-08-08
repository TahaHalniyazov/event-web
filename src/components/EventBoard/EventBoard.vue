<template>
    <div class="board-page">
        <h3><span>Афиша</span> мероприятий</h3>
        <BoardFIlterButton/>
        <EventBoardItem/>
        
        <div class="show-more">
            <button class="show-more-btn">Показать еще</button>
        </div>
    </div>
</template>

<script>
import BoardFIlterButton from '@/components/Buttons/BoardFIlterButton.vue'
import EventBoardItem from '@/components/EventBoard/EventBoardItem.vue'


    export default {
        components: {
            BoardFIlterButton, EventBoardItem
        }
       
        
    }
</script>

<style scoped>

.board-page {
    font-family: "Montserrat", sans-serif; 
    margin-top: 120px;
    z-index: 0;
    
}
.board-page h3 {
    font-size: 32px;
    margin-bottom: 40px;
}
.board-page span {
    background: linear-gradient(to right,rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
    background-clip: text;
    color: transparent;
}


.show-more {
    text-align: center;
    margin-top: 50px;
}
.show-more-btn {
    background: #FF006B;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 10px 60px;
    font-size: 16px;
    font-family: "Montserrat", sans-serif; 
    
}

@media (max-width: 1200px) {
    .board-page {    
    margin-top: 100px;
    padding: 10px;
    
}
}
@media (max-width: 990px) {
.board-page h3 {   
    text-align: center;
}
}
@media (max-width: 480px) {
.board-page h3 {   
    font-size: 26px;
}
}

</style>