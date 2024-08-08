<template>
    <div>
        <div class="board-container">
            <div class="board-container-items">
                <div class="board-container-image"><img src="@/assets/img/section-img/Frame 84.jpg" alt=""></div>
                <div class="board-container-item-1">
                    <p>игра <<{{ boardName }}>></p>
                    <div class="board-container-subitem-1">
                        <p>{{ boardHoss }}</p>
                        <StarRating class="star"/>
                    </div>
                    <p>{{ boardDate }} в {{ boardTime }}</p>
                    <p>{{ boardAdress }}</p>
                    <p>Стоимость: {{ boardCost }}</p>
                    <div class="board-container-subitem-2">
                        <BookingButton/>
                        <SharePopup class="share"/>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
import BookingButton from '@/components/Buttons/BookingButton.vue'
import StarRating from '@/components/StarRating.vue'
import SharePopup from '@/components/SharePopup.vue';
    export default {
        data() {
            return {
                boardName: 'Бродилка',
                boardHoss: 'Алексей Александров',
                boardDate: 'сегодня',
                boardTime: '17:00',
                boardAdress: 'Кафе Снежинка, адрес Большая морская стрит',
                boardCost: '1000'
            }
        },
        components: {
            BookingButton, StarRating, SharePopup
        }
    }
</script>

<style scoped>
.board-container {
    background: linear-gradient(to right, rgba(252, 214, 116, 1), rgba(254, 83, 60, 1), rgba(254, 83, 60, 1), rgba(252, 92, 94, 1), rgba(244, 121, 208, 1), rgba(228, 182, 252, 1));
    padding: 20px 14px;
    margin-top: 20px;
    
}
.board-container-items {
    display: flex;    
}

.board-container-item-1 {
    margin-left: 30px;
    flex: 80%;
}
.board-container-item-1 p {
    margin-bottom: 10px;
}

.board-container p {
    color: white;
    font-size: 20px;    
}

.board-container-subitem-1 {
    display: flex;
    justify-content: space-between;

}
.board-container-subitem-2 {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}
.share-btn {
    border: none;
    background: transparent;
    cursor: pointer;
}
.star {
    background: white;
    border-radius: 30px;
    padding-left: 6px;
    padding-bottom: 0;
}


@media (max-width: 990px) {
    .board-container-items img {
        width: 100%;
        height: 100%;
    }

 
}

@media (max-width: 760px) {
    .board-container-items img {
        width: 100%;
        height: 100%;
    }
    .board-container p {
    color: white;
    font-size: 16px;    
}    
 
}

@media (max-width: 480px) {
    .board-container-items {
        display: grid;
        grid-template-columns: 1fr; /* Один столбец */
        grid-template-rows: auto auto; /* Два ряда */
        gap: 10px; /* Промежуток между элементами */
        text-align: left;
        
    }

    .board-container-image {
        grid-row: 1; /* Первый ряд */
    }

    .board-container-item-1 {
        grid-row: 2; /* Второй ряд */
        text-align: left;
        margin-left: 0; /* Убираем отступ слева */
    }

    .board-container-subitem-1 {
        display: flex;
        justify-content: space-between;
        align-items: left; /* Выравнивание элементов по центру */
    }

    .board-container-subitem-2 {
        margin-top: 20px; /* Увеличиваем отступ между кнопкой и звездами */
    }
   
}

@media (max-width: 360px) {
    .star {    
    
    padding-left: 0;
    
}
}

</style>