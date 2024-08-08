<template>
    <div class="financial-reports-page">
        <h2 class="reports-title"><span>Финансовые</span> отчеты</h2>
        <div class="date-period-input">
            <h4>Период:</h4>
            <input type="date" id="startDate" v-model="startDate">
            <span class="calendar-icon"></span>
            <label for="endDate">-</label>
            <input type="date" id="endDate" v-model="endDate">
        </div>
        <div class="reports-text">
            <p>Количество проведённых мероприятий: {{ eventHeld }}</p>
            <p>Сумма собранных средств через платформу: {{ eventAmount }}</p>
            <p>Количество забронированных мест: {{ eventReserved }}</p>
            <p>Доход при 100% брони мест: {{ eventRevenue }}</p>
            <p>Перечислено системой: {{ listedBySystem }}</p>
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                startDate: '',
                endDate: '',
                eventHeld: '10',
                eventAmount: '100 000',
                eventReserved: '80',
                eventRevenue: '50 000',
                listedBySystem: '50 000'
            };
  },
    }
</script>

<style  scoped>

.reports-title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 50px;
    margin-top: 150px;
    font-family: "Montserrat", sans-serif;
    
    }

.reports-title span {
    background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
    background-clip: text;
    color: transparent;
}


.date-period-input {
    display: flex;  
    font-size: 28px;
    align-items: center;
}
.date-period-input input {
    border: none;
    font-size: 28px;
    outline: none;
    margin-left: 10px;
}

.date-period-input label {
    margin-bottom: 5px;
}



.date-period-input input[type=date]::-webkit-inner-spin-button,
.date-period-input input[type=date]::-webkit-clear-button {
  display: none;
}

.reports-text {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 50px;
}
.reports-text p {
    padding-top: 16px;
}

@media (max-width: 990px) { 
    .reports-text {
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 50px;
}
.date-period-input {
    display: flex;  
    font-size: 24px;
}
 }

 @media (max-width: 760px) { 
    .reports-text {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 50px;
}
.date-period-input {
    display: flex;  
    font-size: 22px;
}

.date-period-input input {
    border: none;
    font-size: 22px;
}

.reports-title {
    font-size: 28px;
}
 }

@media (max-width: 480px) { 
.reports-text {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 50px;
}

.reports-title {
    font-size: 28px;
    margin-top: 80px;
    margin-bottom: 20px;
}
.date-period-input input {
    border: none;
    font-size: 16px;
}

.date-period-input h4 {
    font-size: 16px;
}
.reports-text  {
    font-size: 14px;
    margin-top: 0;
}
.reports-text p {
    padding-top: 10px;
}
 } 


 @media (max-width: 360px) {
    .reports-title {
        font-size: 24px;
   
}
 }
</style>