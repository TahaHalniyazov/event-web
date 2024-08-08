<template>
    <div>
        <Navbar/>    
        
        <div class="form-container">
            <h2 class="gradient">Инструкция</h2>
            <form action="" @submit.prevent="createTemplate">
                <div class="form-group">
                    <label for="event-name">Название мероприятия:</label>
                    <input type="text" class="event-name" name="event-name" required v-model="templateData.eventName">
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
                    <input type="text" class="venue" name="venue" required v-model="templateData.city">
                </div>
                <div class="form-group">
                    <label for="venue">Место проведения:</label>
                    <input type="text" class="venue" name="venue" required v-model="templateData.venue">
                </div>
                <div class="form-group">
                    <label for="cost">Стоимость:</label>
                    <input type="text" class="cost" name="cost" required v-model="templateData.cost">
                </div>
                <div class="form-group">
                    <label for="participants">Количество участников:</label>
                    <input type="number" class="participants" name="participants" required v-model="templateData.participants">
                </div>
                <div class="form-group flex">
                    <label for="description">Описание мероприятия:</label>
                    <textarea class="description" name="description" v-model="templateData.description"></textarea>
                </div>
                <div class="form-group flex">
                    <label for="conditions">Условия и ограничения для участников:</label>
                    <textarea class="conditions" name="conditions" v-model="templateData.conditions"></textarea>
                </div>
                <div class="form-group">
                    <label for="datetime">Дата и время:</label>
                    <input type="datetime-local" class="datetime" name="datetime" required v-model="templateData.date">
                </div>
                <div class="form-group">
                    <label for="payment-method">Способ оплаты:</label>
                    <input type="text" class="payment-method" name="payment-method" required v-model="templateData.paymentMethod">
                </div>
                <div class="form-group">
                    <label for="reservation-payment">Оплата брони:</label>
                    <select class="reservation-payment" name="reservation-payment" required @change="reservation">
                        <option value="yes">Да</option>
                        <option value="no">Нет</option>
                    </select>
                </div>
                <div class="button-block">
                    <button class="template-btn" @click="createTemplate">Сделать шаблоном</button>
                    <button class="moderation-btn">Отправить на модерацию</button>
                </div>
            </form>
           
        </div> 
        <div class="map-container">
            <h2 class="map-title"><span class="gradient">Выберите место проведения мероприятия на карте</span> </h2>
            <Map
        :center="[44.952116, 34.102411]"
        :zoom="12"
        mode="create"
        :eventName="templateData.eventName"
        class="map"
      />
        </div>
       
        <Footer/>
    </div>
    
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Map from '@/components/Map/Map.vue'
import dayjs from 'dayjs'
export default {
    name: 'EventCard',
    props: {
        msg: String
    },
    components: {
        Navbar, Footer, Map
    },

    data () {
        return {      
            templateData: {
                id: '', 
                eventName: '',
                cover: '',
                city: '', 
                venue: '', 
                cost: '', 
                participants: '', 
                description: '',
                conditions: '', 
                paymentMethod: '',
                reservationPayment: false,
                date: dayjs().format("YYYY-MM-DDTHH:mm")
            }      
            
        }        

    },

    computed: {
       ...mapGetters(['getuserTemplates'])
    },

    methods: {
        ...mapMutations(['setuserTemplates']),
        reservation(event) {
            let value = event.target.value;
            if (value == "yes") {this.templateData.reservationPayment = true; return}

        },

        // createTemplate() {
        //     let allTemplates = this.getuserTemplates;
        //     console.log('allTemplates', allTemplates);
        //     this.templateData.id = allTemplates.length + 1

        //     this.setuserTemplates(this.templateData);
        //     this.$router.push('/templates');

        // }
        createTemplate() {
            let allTemplates = this.getuserTemplates;
            console.log('allTemplates', allTemplates);
            this.templateData.id = allTemplates.length + 1;
            this.setuserTemplates(this.templateData);
    // Оставляем пользователя на той же странице, чтобы он мог кликнуть на карту
    // this.$router.push('/templates'); // Убираем переход на другую страницу
  }
    },

    mounted() {
        console.log('getuserTemplates', this.getuserTemplates);
    }
    
    // data () {
    // return {            
    // fileName: '',    
    // }
    // },
    // methods: {
    //     triggerFileInput() {
    //         this.$refs.fileInput.click();
    //     },
    //     handleFileChange(event) {
    //         const file = event.target.files[0];
    //         if (file) {
    //             this.fileName = file.name
    //         }
    //     }
    // }  
}
</script>

<style scoped>
.map-container {
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom: 100px;
    font-family: "Montserrat", sans-serif;
}
.map-title {
    text-align: center;
    
    margin-bottom: 50px;
}
.form-container{
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    margin-bottom: 100px;
    font-family: "Montserrat", sans-serif;
}
.gradient {
    background: linear-gradient(to right,rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
    background-clip: text;
    color: transparent;
    font-size: 32px;
    
}
form {
    width: 30%;
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
    font-family: "Montserrat", sans-serif;
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
.template-btn {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    padding: 10px 20px;
    background: #FF006B;
    border: none;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    transition: linear 0.25s ;
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
    margin-left: 20px;
    cursor: pointer;
    transition: linear 0.25s ;
}


@media (max-width: 990px) {
    .form-container {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    form {
        width: 60%;
        padding: 20px;
        
    }
}

@media (max-width: 760px) {
.form-container {
    flex-direction: column;
    
}
form {
    width: 100%;
    text-align: left;
}
.gradient {
    font-size: 28px;
    margin-left: 20px;
}
}

@media (max-width: 360px) {
    .form-group {  
    display: flex;
    flex-direction: column; /* меняем направление на колонку и разворачиваем в обратном порядке */
}
.form-group label {
    margin-bottom: 10px;
}

.flex {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    
}

.moderation-btn {
    margin-left: 0;
    margin-top: 20px;

}
.button-block {
    flex-direction: column;
}
} 

</style>