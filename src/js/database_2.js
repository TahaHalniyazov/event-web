import moment from "moment";
import dayjs from 'dayjs';

let allPanelEvents = [
    { id: 1, moderation: true, expected: false, title: 'Событие 1', name: 'Алексей Александров', description: 'Описание события 1', date: dayjs().format("MM-DD-YYYY") },
    { id: 2, moderation: true, expected: false, title: 'Событие 2', name: 'Алексей Александров', description: 'Описание события 2', date: dayjs().format("MM-DD-YYYY") },
    { id: 3, moderation: false, expected: true, title: 'Событие 3', name: 'Алексей Александров', description: 'Описание события 3', date: dayjs().format("MM-DD-YYYY") },
    { id: 4, moderation: false, expected: true, title: 'Событие 4', name: 'Алексей Александров', description: 'Описание события 4', date: dayjs().format("MM-DD-YYYY") },
    { id: 5, moderation: false, expected: false, title: 'Событие 5', name: 'Алексей Александров', description: 'Описание события 5', date: dayjs().subtract(1, 'day').format("MM-DD-YYYY") },
    { id: 6, moderation: false, expected: false, title: 'Событие 6', name: 'Алексей Александров', description: 'Описание события 6', date: dayjs().subtract(1, 'day').format("MM-DD-YYYY") },
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


let panelPaylouds = {
    allPanelEvents: allPanelEvents,
    photos: allPhotos,
};

export default panelPaylouds;