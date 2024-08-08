<template>
   <form class="payform-tinkoff" ref="payformTinkoff" @submit.prevent="submitPayment">
    <input class="payform-tinkoff-row" type="hidden" name="terminalkey" value="1717098364737DEMO">
    <input class="payform-tinkoff-row" type="hidden" name="frame" value="false">
    <input class="payform-tinkoff-row" type="hidden" name="language" value="ru">
    <input class="payform-tinkoff-row" type="text" placeholder="Сумма заказа" name="amount" v-model="amount" required>
    <input class="payform-tinkoff-row" type="hidden" placeholder="Номер заказа" name="order" v-model="order">
    <input class="payform-tinkoff-row" type="text" placeholder="Описание заказа" name="description" v-model="description">
    <input class="payform-tinkoff-row" type="text" placeholder="ФИО плательщика" name="name" v-model="name">
    <input class="payform-tinkoff-row" type="email" placeholder="E-mail" name="email" v-model="email">
    <input class="payform-tinkoff-row" type="tel" placeholder="Контактный телефон" name="phone" v-model="phone">
    <input class="payform-tinkoff-row payform-tinkoff-btn" type="submit" value="Оплатить">
    <button class="btn-back" @click.prevent="$emit('go-back')">Назад</button>
</form>  
  
</template>

<!-- <script type="text/javascript">
    const TPF = document.getElementById("payform-tinkoff");

    TPF.addEventListener("submit", function (e) {
        e.preventDefault();
        const {description, amount, email, phone, receipt} = TPF;

        if (receipt) {
            if (!email.value && !phone.value)
                return alert("Поле E-mail или Phone не должно быть пустым");

            TPF.receipt.value = JSON.stringify({
                "EmailCompany": "mail@mail.com",
                "Taxation": "patent",
                "FfdVersion": "1.2",
                "Items": [
                    {
                        "Name": description.value || "Оплата",
                        "Price": amount.value + '00',
                        "Quantity": 1.00,
                        "Amount": amount.value + '00',
                        "PaymentMethod": "full_prepayment",
                        "PaymentObject": "service",
                        "Tax": "none",
                        "MeasurementUnit": "pc"
                    }
                ]
            });
        }
        pay(TPF);
    })
</script> -->

<script>
export default {
    data() {
            return {
                description: "",
                order: "",                
                name: "",
                email: "",
                phone: "",
                receipt: false,                
                
            }
        },
        props: {
            amount: {
                type: Number,
                required: true
            }
        },
        watch: {
            amount(newAmount) {
                this.amount = newAmount * 100; // Преобразовать в копейки
            }
    },
    methods: {
        submitPayment() {
        const form = this.$refs.payformTinkoff;
        const { description, amount, email, phone, receipt } = form;

        if (receipt) {
            if (!email.value && !phone.value)
            return alert("Поле E-mail или Phone не должно быть пустым");

            form.receipt.value = JSON.stringify({
            "EmailCompany": "mail@mail.com",
            "Taxation": "patent",
            "FfdVersion": "1.2",
            "Items": [
                {
                "Name": description.value || "Оплата",
                "Price": this.amount * 100, // Преобразовать в копейки
                "Quantity": 1.00,
                "Amount": this.amount * 100, // Преобразовать в копейки
                "PaymentMethod": "full_prepayment",
                "PaymentObject": "service",
                "Tax": "none",
                "MeasurementUnit": "pc"
                }
            ]
            });
            pay(form);
        }
        }
        
    }
    

}
</script>

<style>
.payform-tinkoff {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: 2px auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        max-width: 250px;
    }
    .payform-tinkoff-row {
        margin: 2px;
        border-radius: 4px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
        border: 1px solid #DFE3F3;
        padding: 15px;
        outline: none;
        background-color: #DFE3F3;
        font-size: 15px;
    }
    .payform-tinkoff-row:focus {
        background-color: #FFFFFF;
        border: 1px solid #616871;
        border-radius: 4px;
    }
    .payform-tinkoff-btn {
        background-color: #FBC520;
        border: 1px solid #FBC520;
        color: #3C2C0B;
    }
    .payform-tinkoff-btn:hover {
        background-color: #FAB619;
        border: 1px solid #FAB619;
    }
    .btn-back {
        font-family: "Montserrat", sans-serif;
        background-color: rgba(255, 0, 107, 1);
        color: white;
        padding: 10px 70px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-size: 16px;
        margin-top: 10px;
}
</style>