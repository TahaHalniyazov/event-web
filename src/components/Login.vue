<template>
<div class="main-page">
    <Navbar />
    <div class="login-container">
    <div v-if="!isCodeSent" class="login-box">
        <h3>Регистрация или вход</h3>
        <div class="input-container">
            <div class="icon-input">
                <img src="../assets/img/footer-img/TL.svg" alt="Telegram" class="telegram-icon" />
                <input type="text" placeholder="Войти через Telegram" class="input-telegram" />
            </div>
        </div>
        <div class="input-container">
            <input type="tel" placeholder="Войти по номеру телефона" v-model="phoneNumber" class="input-phone" />
        </div>
        <div class="buttons">
            <button class="adress-btn">Адрес электронной почты</button>
            <button class="code-btn" @click="showCodeInput">Получить код</button>
        </div>
        <p>Продолжая регистрацию или вход, Вы принимаете условия <span><a href="">Пользовательского соглашения</a></span> и <span><a href="">Политики конфиденциальности</a></span></p>
    </div>
    <div v-else-if="!isRegistrationFormVisible" class="code-input-box">
        <CodeInput @code-submitted="showRegistrationForm" />
    </div>
    <RegistrationForm v-else @register-submitted="register"/>
    </div>
    <Footer />
    
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import CodeInput from '@/components/CodeInput.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
name: 'Login',
components: {
    Navbar,
    Footer,
    CodeInput,
    RegistrationForm,
},
data() {
    return {
    phoneNumber: '',
    isCodeSent: false,
    isRegistrationFormVisible: false
    };
},

computed: {
    ...mapGetters('login', ['error', 'getPhoneStatus', 'getCodeStatus', 'getUserData']),
},

methods: {
    ...mapActions('login', ['sendPhoneForCode', 'sendCode', 'registerUser']),
    showCodeInput() {
    this.isCodeSent = true;
    const payload = { phoneNumber: this.phoneNumber };
    this.sendPhoneForCode(payload);
    // let resultPhone = this.sendPhoneForCode(payload);
    // if(resultPhone.status == 200) {
    //     this.isCodeSent = true;
    // }
    },

    showRegistrationForm(code) {
    this.isRegistrationFormVisible = true;
    const payload = { code };
    this.sendCode(payload);
    // let resultCode = this.sendCode(payload);
    // if(resultCode.status == 200) {
    //     this.isRegistrationFormVisible = true;
    // }
    },

    register(userData) {
    this.registerUser(userData);    
    }


},
};
  </script>


<!-- <template>
<div class="main-page">
    <Navbar />
    <div class="login-container">
            <div class="login-box">
            <h3>Регистрация или вход</h3>
            <div class="input-container">
                <div class="icon-input">
                    <img src="../assets/img/footer-img/TL.svg" alt="Telegram" class="telegram-icon" />
                    <input type="text" placeholder="Войти через Telegram" class="input-telegram" />
                </div>
            </div>
            <div class="input-container">
                <input type="tel" placeholder="Войти по номеру телефона" v-model="phoneNumber" class="input-phone" />
            </div>
            <div class="buttons">
                <button class="adress-btn">Адрес электронной почты</button>
                <button class="code-btn" @click="register">Получить код</button>
            </div>
            <p>Продолжая регистрацию или вход, Вы принимаете условия <span><a href="">Пользовательского соглашения</a></span> и <span><a href="">Политики конфиденциальности</a></span></p>
        </div>
    </div>
    <Footer />
</div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'Login',
    components: {
        Navbar,
        Footer,
        },
    data() {
        return {
        phoneNumber: '',
        };
    },
    computed: {
        ...mapGetters('login', ['isLoading', 'error', 'successMessage']),
    },
    methods: {
        ...mapActions('login', ['registerUser']),
        register() {
        const payload = { phoneNumber: this.phoneNumber };
        this.registerUser(payload);
        },
    },
    };
</script> -->

<!-- TODO:: Ты когда делаешь стили в рамках компонента тогда делай табуляцию в теле чтобы можно было скрывать и не засорять -->

<style scoped>


    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 71vh;
        width: 100%;
        
        font-family: "Montserrat", sans-serif;
    
    }

    .login-box {
        width: 460px;
        padding: 50px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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
    p {
        font-size: 10px;
        color: white;
        text-align: center;
        margin-top: 30px;
    }

    p span a {
        
        color: white;
    }

    .input-container {
        margin-bottom: 30px;
        width: 100%;
    }

    .icon-input {
        display: flex;
        align-items: center;
        position: relative;
        background-color: #FFF; /* Фон, соответствующий вашему дизайну */
        border: 1px solid #ccc; /* Рамка, соответствующая вашему дизайну */
        border-radius: 30px; /* Радиус скругления рамки */
        }

    .input-telegram {
        align-self: flex-start;
        border: none; /* Убрать стандартную рамку поля ввода */
        
            
    }
    .input-telegram, .input-phone {
        font-family: "Montserrat", sans-serif; 
        padding: 10px;
        width: 100%;
        border-radius: 30px;
        font-size: 16px;
        
        
    }
    .input-phone {
        border: 1px solid #ccc;
        padding-left: 30px; 
    }
    .input-telegram:focus, .input-phone:focus {
    outline: none; /* Убираем границу при клике */
    }

    .input-phone::placeholder {
    text-align: left; /* Выравниваем плейсхолдер по центру */
    }
    .telegram-icon {
        margin-left: 20px;
        height: 30px; /* Установите высоту иконки */
        width: 30px; /* Установите ширину иконки */
    }

    .buttons button {
        width: 100%;
        padding: 14px;
        margin-top: 20px;
        font-size: 16px;
        font-family: "Montserrat", sans-serif; 
        transition: 0.5s all;
    }
    .adress-btn {
        background: transparent;
        border: 1px white solid;
        border-radius: 30px;
        color: white;
    }

    .code-btn {
        background: #BDFF00;
        border: none;
        border-radius: 30px;
        
    }

    .adress-btn:hover, .code-btn:hover {
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.7)
    }

    @media (max-width: 480px) {
        .login-box {
        width: 400px;
        padding: 30px;
    }
    }

    @media (max-width: 360px) {
        .login-box {
        width: 350px;
        padding: 20px;
    }
    h3 {
        
    
        font-size: 20px;
        
    }
    }
        

</style>





