<template>
    <div>
        <Navbar/>
        <div class="templates-page">
            <router-link to="/" class="back">&#10094; Мой профиль</router-link>
            <h2><span>Мои</span> шаблоны</h2>
            <div class="templates-container">
                <div class="templates" v-for="template in getuserTemplates" :key="template.id">
                    <h4>Шаблон №{{ template.id }}</h4>
                    <form action="">
                        <div class="form-group">
                            <label for="event-name">Название мероприятия:</label>
                            <input type="text" class="event-name" name="event-name" required v-model="template.eventName">
                        </div>
                        <div class="form-group">
                            <label for="cover">Обложки:</label>
                            <input type="file" class="cover" name="cover">
                        </div>
                        <!-- <div class="form-group">
                            <label for="cover" class="cover-label">Обложки:</label>
                            <div class="custom-file-upload">
                            <input type="file" class="cover" name="cover" id="cover" ref="fileInput" @change="handleFileChange" hidden />
                            <button @click="triggerFileInput" class="upload-btn">Загрузить файл</button>
                            <span class="file-name" v-if="fileName">{{ fileName }}</span>
                            <span class="file-name" v-else>Файл не выбран</span>
                        </div> -->
                        <div class="form-group">
                            <label for="venue">Город:</label>
                            <input type="text" class="venue" name="city" required v-model="template.city">
                        </div>
                        <div class="form-group">
                            <label for="venue">Место проведения:</label>
                            <input type="text" class="venue" name="venue" required v-model="template.venue">
                        </div>
                        <div class="form-group">
                            <label for="cost">Стоимость:</label>
                            <input type="text" class="cost" name="cost" required v-model="template.cost">
                        </div>
                        <div class="form-group">
                            <label for="participants">Количество участников:</label>
                            <input type="number" class="participants" name="participants" required v-model="template.participants">
                        </div>
                        <div class="form-group flex">
                            <label for="description">Описание мероприятия:</label>
                            <textarea class="description" name="description" v-model="template.description" ></textarea>
                        </div>
                        <div class="form-group flex">
                            <label for="conditions">Условия и ограничения для участников:</label>
                            <textarea class="conditions" name="conditions" v-model="template.conditions"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="datetime">Дата и время:</label>
                            <input type="datetime-local" class="datetime" name="datetime" required v-model="template.date">
                        </div>
                        <div class="form-group">
                            <label for="payment-method">Способ оплаты:</label>
                            <input type="text" class="payment-method" name="payment-method" required v-model="template.paymentMethod">
                        </div>
                        <div class="form-group">
                            <label for="reservation-payment">Оплата брони:</label>
                            <select class="reservation-payment" name="reservation-payment" required>
                                <option :selected="template.reservationPayment"  value="yes">Да</option>
                                <option :selected="!template.reservationPayment" value="no" >Нет</option>
                            </select>
                        </div>
                        <div class="button-block">                   
                            <button class="moderation-btn">Отправить на модерацию</button>
                        </div>
                    </form>
                </div>
                <!-- <div class="templates">
                    <h4>{{ templatesNumber }}</h4>
                    <form action="">
                        <div class="form-group">
                            <label for="event-name">Название мероприятия:</label>
                            <input type="text" class="event-name" name="event-name" required>
                        </div>
                        <div class="form-group">
                            <label for="cover">Обложки:</label>
                            <input type="file" class="cover" name="cover">
                        </div>
                        <div class="form-group">
                            <label for="cover" class="cover-label">Обложки:</label>
                            <div class="custom-file-upload"></div>
                            <input type="file" class="cover" name="cover" id="cover" ref="fileInput" @change="handleFileChange" hidden />
                            <button @click="triggerFileInput" class="upload-btn">Загрузить файл</button>
                            <span class="file-name" v-if="fileName">{{ fileName }}</span>
                            <span class="file-name" v-else>Файл не выбран</span>
                        </div>
                        <div class="form-group">
                            <label for="venue">Место проведения:</label>
                            <input type="text" class="venue" name="venue" required>
                        </div>
                        <div class="form-group">
                            <label for="cost">Стоимость:</label>
                            <input type="text" class="cost" name="cost" required>
                        </div>
                        <div class="form-group">
                            <label for="participants">Количество участников:</label>
                            <input type="number" class="participants" name="participants" required>
                        </div>
                        <div class="form-group flex">
                            <label for="description">Описание мероприятия:</label>
                            <textarea class="description" name="description" ></textarea>
                        </div>
                        <div class="form-group flex">
                            <label for="conditions">Условия и ограничения для участников:</label>
                            <textarea class="conditions" name="conditions" ></textarea>
                        </div>
                        <div class="form-group">
                            <label for="datetime">Дата и время:</label>
                            <input type="datetime-local" class="datetime" name="datetime" required>
                        </div>
                        <div class="form-group">
                            <label for="payment-method">Способ оплаты:</label>
                            <input type="text" class="payment-method" name="payment-method" required>
                        </div>
                        <div class="form-group">
                            <label for="reservation-payment">Оплата брони:</label>
                            <select class="reservation-payment" name="reservation-payment" required>
                                <option value="yes">Да</option>
                                <option value="no">Нет</option>
                            </select>
                        </div>
                        <div class="button-block">                   
                            <button class="moderation-btn">Отправить на модерацию</button>
                        </div>
                    </form>
                </div> -->
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
    export default {
        components: {
            Navbar, Footer
    },
    data () {
        return {
            templatesNumber: 'Шаблон №1'
        }
    },

    computed: {
        ...mapGetters(['getuserTemplates']),
    },
    methods: {},
    mounted() {
        console.log('getuserTemplates', this.getuserTemplates);
    }
    }
</script>

<style scoped>
    .templates-container {
        display: flex;
        justify-content: space-between;        
        gap: 80px;
    }
    .templates-page {
        margin: 0 auto;
        max-width: 1400px;
        font-family: "Montserrat", sans-serif;
        margin-top: 50px;
        padding: 20px;
    }
    .templates {
        flex-grow: 1;
        padding: 20px 0;
    }
    .templates h4 {
        margin: 40px 0;
    }
    .templates-page h2 {
        font-size: 32px;    
        margin-top: 30px;
        text-align: left;
    }

    .templates-page h2 span {
        background: linear-gradient(to right,rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
        background-clip: text;
        color: transparent;
    }
    .back{
        text-align: left;
        text-decoration: none;
        color: #666666;        
        font-size: 16px;
        font-family: "Montserrat", sans-serif;  
        margin-left: 0;
    }

    .form-group {
    margin-bottom: 20px;
    display: flex;
    
    
    
    
}
.form-group label {
    font-size: 16px;
    white-space: nowrap;
    
}
.form-group input {
    outline: none;
    width: 100%;
    padding-left: 4px;
    border: none;
    border-bottom: 1px #C9C9C9 solid;    
    font-size: 14px; 
}
input[type="datetime-local"],input[type="file"] {
    outline: none;
    border-bottom: none;
}
.cover {
    border-bottom: none;
    font-family: "Montserrat", sans-serif; 
    
}


.flex {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;   
}
.flex label {
    margin-bottom: 10px;
}
.description, .conditions {
    height: 150px;
    font-size: 14px;
    font-family: "Montserrat", sans-serif; 
    padding: 10px;
}

.datetime {
    border: none;
    outline: none;
    padding-left: 4px;
    color: #818181;
    
}

select {
    background-color: #ffffff;
    color: #333333;
    font-size: 14px;
    padding-left: 4px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    outline: none;
}

select:focus {
    border-color: #999999;
}

.button-block {
    display: flex;
    margin-top: 80px;
    
}

.template-btn:hover, .moderation-btn:hover  {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7)
}

.moderation-btn {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    padding: 10px 30px;
    background: #BDFF00;
    border: none;
    border-radius: 30px;
    color: black;    
    cursor: pointer;
    transition: linear 0.25s ;
}
@media (max-width: 990px) {
    .templates-container {
        flex-direction: column;
        gap: 40px;
    }
    .templates-page h2 {
        text-align: center;
    }
    .templates h4 {
        margin: 20px 0;
    }
    .button-block {
        margin-top: 50px;
    }
}

@media (max-width: 480px) {   
    .templates-page  {
        margin-top: 20px;
    }
    .templates-page h2 {
        font-size: 26px;
    }  
    .templates h4 {
        margin: 20px 0;   
}
}
@media (max-width: 360px) {
    .form-group label {
        font-size: 14px;
    }
}
</style>