<template>
<div v-if="isPopupVisible" class="popup-overlay">
    <div class="popup-content">
    <!-- Кнопка закрытия отображается только при выборе билетов -->
    <button v-if="!orderConfirmed || showPaymentForm" class="close-button" @click="closePopup">×</button>


    <!-- Выбор билетов -->
    <div v-if="!orderConfirmed && !showPaymentForm">
        <div class="popup-header">
            <p>Завтра, {{ gameDate }}, {{ gameTime }}</p>
            <h2><span class="gradient">{{ gameName }}</span></h2>
            <p>Ведущий: {{ gameHost }}</p>
        </div>
            <div class="popup-body">
            <p>Билет:</p>
            <p>{{ gameCost }}₽</p>
        <div class="ticket-counter">
            <button @click="decrementTickets">-</button>
            <span>{{ tickets }}</span>
            <button @click="incrementTickets">+</button>
        </div>
        </div>
        <div class="popup-footer">
            <p>{{ tickets }} билет: {{ totalPrice }}₽</p>
            <button class="btn" @click="confirmOrder">Далее</button>
        </div>
    </div>

    <!-- Подтверждение заказа -->
    <div v-if="orderConfirmed && !showPaymentForm">
        <div class="popup-header">
            <button class="back-button" @click="orderConfirmed = false">&#10094; Подтверждение заказ</button>
            <h2 ><span class="gradient">{{ gameName }}</span></h2>
            <p class="pad">Ведущий: {{ gameHost }}</p>
            <p class="pad">{{ gameDate }}, {{ gameTime }} «Eaty»</p>
            <p class="pad">ул. Большая Морская, 7</p>
        </div>
        <div class="popup-body-2">
            <p>{{ tickets }} билета: {{ totalPrice }}₽</p>
            <p>Итоговая стоимость: {{ totalPrice }}₽</p>
        </div>
        <div class="popup-footer">
            <button class="btn width" @click="proceed">Далее</button>
        </div>
    </div>

    <!-- Форма оплаты Тинькофф -->
    <Payment v-if="showPaymentForm" :amount="totalPrice" @go-back="handleGoBack" />
    </div>
</div>
</template>

<script>
import Payment from '@/components/Payment.vue'; // Импорт компонента оплаты

export default {
components: {
    Payment
},
    computed: {
            isPopupVisible() {
                return this.$store.state.popup.isPopupVisible;
            },
            totalPrice() {
                return this.tickets * this.gameCost;
            }
    },
    methods: {
        closePopup() {
            this.$store.dispatch('closePopup');
            this.enableScroll();
            this.resetState(); // Сбросить состояние при закрытии
        },
        incrementTickets() {
            this.tickets++;
        },
            decrementTickets() {
                if (this.tickets > 1) {
                this.tickets--;
            }
        },
        handleGoBack() {
            this.showPaymentForm = false; // Скрыть форму оплаты
            this.orderConfirmed = true; // Вернуть к подтверждению заказа
        },
        confirmOrder() {
            this.orderConfirmed = true;
        },
        proceed() {
            this.showPaymentForm = true; // Показать форму оплаты
            this.orderConfirmed = false; // Скрыть подтверждение заказа
        },
        resetState() {
            this.tickets = 1;
            this.orderConfirmed = false;
            this.showPaymentForm = false; // Скрыть форму оплаты
        }
    },
    watch: {
        isPopupVisible(newVal) {
        if (newVal) {
            this.resetState();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        }
    },
    data() {
        return {
            tickets: 1,
            gameName: 'Монополия',
            gameHost: 'Алексей Александров',
            gameTime: '19:00',
            gameDate: '18 апреля',
            gameCost: '3000',
            orderConfirmed: false,
            showPaymentForm: false,
            
        };
    }
};
</script>

<style scoped>
.popup-overlay {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
}
h2 {
margin-top: 10px;
margin-bottom: 10px;
}
.pad {
padding-bottom: 10px;
}
.gradient {
background: linear-gradient(to right,rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
background-clip: text;
color: transparent;
margin-top: 20px;
}
.popup-content {
background: white;
padding: 30px;
border-radius: 10px;
position: relative;
width: 400px;
}
.popup-header {
font-size: 16px;
margin-bottom: 26px;
}
.popup-body {
margin-bottom: 40px;
display: flex;
justify-content: space-between;
}
.popup-footer {
display: flex;
justify-content: space-between;
align-items: center;
}
.close-button {
position: absolute;
top: -66px;
right: -40px;
background: none;
border: none;
font-size: 50px;
color: white;
cursor: pointer;
}
.back-button {
background: none;
border: none;
font-size: 16px;
color: black;
cursor: pointer;
}
.btn {
font-family: "Montserrat", sans-serif;
background-color: rgba(255, 0, 107, 1);
color: white;
padding: 10px 70px;
border: none;
border-radius: 30px;
cursor: pointer;
font-size: 16px;
}
.width {
width: 100%;
margin-top: 10px;
}
.ticket-counter {
display: flex;
align-items: center;
justify-content: center;
}
.ticket-counter button {
background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(244, 121, 208, 1));
color: white;
border: none;
width: 30px;
height: 30px;
border-radius: 6px;
cursor: pointer;
}
.ticket-counter span {
margin: 0 10px;
font-size: 16px;
}
.popup-body-2 p {
padding-bottom: 10px;
}
.popup-body-2 p:last-child {
font-weight: bold;
}

@media (max-width: 480px) { 
    .close-button {    
    top: -46px;
    right: -30px;
    }
    .popup-content {
        background: white;
        padding: 30px;        
        width: 350px;
}
}

@media (max-width: 360px) { 
    .close-button {    
    top: -46px;
    right: -30px;
    }
    .popup-content {
        background: white;
        padding: 20px;        
        width: 250px;
}
.popup-footer {
justify-content: space-between;
flex-direction: column;
}
}

</style>
