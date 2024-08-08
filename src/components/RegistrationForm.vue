<template>
<div class="additional-info-box">
    <h3>Введите дополнительную информацию</h3>
    <div class="input-container">
        <input type="text" placeholder="Имя" class="input-name" v-model="name" />
    </div>
    <div class="input-container">
        <input type="text" placeholder="Фамилия" class="input-lastname" v-model="lastname" />
    </div>
    <div class="input-container">
        <input type="tel" placeholder="Номер телефона" class="input-phone" v-model="phoneNumber" />
    </div>
        <div class="input-container">
    <input type="password" placeholder="Пароль" class="input-password" v-model="password" />
    </div>
    <div class="input-container">
        <input type="password" placeholder="Повторите пароль" class="input-confirm-password" v-model="confirmPassword" />
    </div>
    <div class="buttons">
        <button class="submit-info-btn" @click="submitInfo">Войти</button>
    </div>
</div>
</template>

<script>
export default {
name: 'AdditionalInfoInput',
data() {
    return {
    name: '',
    lastname: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    };
},
methods: {
    submitInfo() {
    // Логика для отправки дополнительной информации
    let registerData = {
        name: this.name,
        lastname: this.lastname,
        phoneNumber: this.phoneNumber,
        password: this.password,
        confirmPassword: this.confirmPassword,
    }
    console.log('Дополнительная информация отправлена:', registerData);
    this.$emit('register-submitted', registerData);
    },
},
};
</script>

<style scoped>
.additional-info-box {
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

.input-name,
.input-lastname,
.input-phone,
.input-password,
.input-confirm-password {
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

.submit-info-btn {
background: #BDFF00;
border: none;
border-radius: 30px;
}

.submit-info-btn:hover {
cursor: pointer;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}


@media (max-width: 480px) {
.additional-info-box {
    width: 440px;
    padding: 30px;

}
h3 {
    margin-bottom: 20px;
    font-size: 20px;
}
 
}


@media (max-width: 360px) {
    .additional-info-box {
        width: 340px;
        padding: 30px;

}
h3 {
margin-bottom: 20px;

font-size: 20px;

}
 
}
</style>
