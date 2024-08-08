import moment from "moment";
import dayjs from 'dayjs';

let allEvents = [
    { id: 1, booked: true, viewed: false, title: 'Событие 1', name: 'Алексей Александров', description: 'Описание события 1', date: dayjs().format("MM-DD-YYYY") },
    { id: 2, booked: true, viewed: false, title: 'Событие 2', name: 'Алексей Александров', description: 'Описание события 2', date: dayjs().format("MM-DD-YYYY") },
    { id: 3, booked: false, viewed: true, title: 'Событие 3', name: 'Алексей Александров', description: 'Описание события 3', date: dayjs().format("MM-DD-YYYY") },
    { id: 4, booked: false, viewed: true, title: 'Событие 4', name: 'Алексей Александров', description: 'Описание события 4', date: dayjs().format("MM-DD-YYYY") },
    { id: 5, booked: false, viewed: false, title: 'Событие 5', name: 'Алексей Александров', description: 'Описание события 5', date: dayjs().subtract(1, 'day').format("MM-DD-YYYY") },
    { id: 6, booked: false, viewed: false, title: 'Событие 6', name: 'Алексей Александров', description: 'Описание события 6', date: dayjs().subtract(1, 'day').format("MM-DD-YYYY") },
];


let allTemplates = [
    { 
        id: 1, 
        eventName: 'LILA',
        cover: '',
        city: 'Севастополь', 
        venue: 'Севастополь', 
        cost: '500', 
        participants: '10', 
        description: 'Описание 1',
        conditions: 'Условия 1', 
        paymentMethod: '',
        reservationPayment: true,
        date: dayjs().format("MM-DD-YYYY") },
    { 
        id: 2, 
        eventName: 'Cashflow',
        cover: '', 
        city: 'Симферополь',
        venue: 'Симферополь', 
        cost: '5000', 
        participants: '4', 
        description: 'Описание 2',
        conditions: 'Условия 2', 
        paymentMethod: '',
        reservationPayment: false,
        date: dayjs().format("MM-DD-YYYY") },
    
    
];

// let require_photos = require.context('@/assets/img', false, /(.png|.jpg)$/);
let photos = [];
let allPhotos = [];


// require_photos.keys().forEach((key) => {
//     photos.push({ id: require_photos.keys().indexOf(key) + 1, url: require_photos(key) });
// });

for (let i = 0; i < photos.length; i++) {
    allPhotos.push(...photos);
}


let paylouds = {
    allEvents: allEvents,
    photos: allPhotos,
    allTemplates
};

export default paylouds;