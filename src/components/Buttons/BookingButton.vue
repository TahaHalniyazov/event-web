<template>
    <div>
        <button class="booking-btn" @click="book" >Забронировать</button>
    </div>
</template>

<script>
    export default {
        name: 'BookingButton',        
        methods: {
            book() {
            this.$store.dispatch('openPopup');
            }
    }
  }   
</script>

<style scoped>
.booking-btn {
    font-size: 16px;
    background: #BDFF00;
    border-radius: 30px;
    padding: 6px 24px;
    border: none;
    font-family: "Montserrat", sans-serif;
    transition: all 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}
.booking-btn:hover {
    cursor: pointer;
    background-color: white; /* Изменение цвета фона при наведении */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Мягкая тень при наведении */
    transform: translateY(-2px); 
}
</style>