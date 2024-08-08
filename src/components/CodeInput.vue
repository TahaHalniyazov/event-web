<template>
    <div class="code-input-box">
        <h3>Введите код</h3>
        <div class="input-container">
            <input type="text" placeholder="Введите код" class="input-code" v-model="code" />
        </div>
        <div class="buttons">
            <button class="submit-code-btn" @click="submitCode">Отправить код</button>
        </div>
    </div>
</template>

<script>
export default {
name: 'CodeInput',
data() {
    return {
    code: '',
    };
},
methods: {
    submitCode() {
    // Логика для отправки кода
    console.log('Код введен:', this.code);
    // Генерируем событие для сообщения об успешной отправке кода
    this.$emit('code-submitted', this.code);
    },
},
};
</script>

<style scoped>
.code-input-box {
width: 460px;
padding: 50px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
background: #fff;
border-radius: 8px;
background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(252, 92, 94, 1), rgba(244, 121, 208, 1), rgba(228, 182, 252, 1));
}

h3 {
margin-bottom: 50px;
text-align: center;
color: white;
font-size: 24px;
font-weight: 500;
}

.input-container {
margin-bottom: 30px;
width: 100%;
}

.input-code {
font-family: "Montserrat", sans-serif;
padding: 10px;
width: 100%;
border-radius: 30px;
font-size: 16px;
border: 1px solid #ccc;
}

.buttons button {
width: 100%;
padding: 14px;
margin-top: 20px;
font-size: 16px;
font-family: "Montserrat", sans-serif;
transition: 0.5s all;
}

.submit-code-btn {
background: #BDFF00;
border: none;
border-radius: 30px;
}

.submit-code-btn:hover {
cursor: pointer;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}


@media (max-width: 480px) {
    .code-input-box {
    width: 350px;
    padding: 30px;
   
}
}

</style>
