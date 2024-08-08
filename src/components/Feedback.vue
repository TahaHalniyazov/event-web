<template>
    <div class="feedback-page">        
        <div class="open">
            <button @click="openFeedback"><img src="@/assets/img/section-img/forward.svg" alt="" class="share-img"></button>
        </div>
        <div v-if="visible" class="feedback-overlay">
            <div class="feedback">
                <div class="close">
                    <button class="close-btn" @click="closeFeedback">&times;</button>
                </div>
                <h3>Отзыв о мероприятии</h3>
                <StarRating class="star"/>
                <textarea name="description" cols="30" rows="10"></textarea>
                <button class="send-btn">Отправить</button>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'
    export default {
        data() {
            return {
                visible: false
            }
        },
        methods: {
            openFeedback() {
                this.visible = true;
                // Отключаем прокрутку при открытии поп-апа
                document.body.style.overflow = 'hidden';
            },
            closeFeedback() {
                this.visible = false;
                // Восстанавливаем прокрутку при закрытии поп-апа
                document.body.style.overflow = 'auto';
      }
    },
        components: { 
            StarRating 
        },
        
    }
</script>

<style scoped>
.feedback-page {
    
}
.feedback-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.feedback {
    background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(252, 92, 94, 1), rgba(244, 121, 208, 1), rgba(228, 182, 252, 1));
    padding: 40px;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.close-btn {
    position: absolute;
    top: -50px;
    right: -34px;
    border: none;
    background: none;
    font-size: 44px;
    cursor: pointer;
    color: white; /* Цвет крестика */
}
textarea {
    padding: 10px;
    font-family: "Montserrat", sans-serif;
    margin-top: 16px;
    border-radius: 6px;
    height: 200px;
    resize: none;
}

h3 {
    font-size: 20px;
    color: white;
    text-align: center;
    font-weight: 400;
    margin-bottom: 20px;
}

.send-btn {
    margin-top: 20px;
    padding: 10px 40px;
    color: black;
    font-family: "Montserrat", sans-serif;
    background: #BDFF00;
    border-radius: 30px;
    border: none;
    cursor: pointer;
}

.star {
    background: white;
    border-radius: 30px;
    padding-left: 30px;
    padding-right: 24px;
}


</style>