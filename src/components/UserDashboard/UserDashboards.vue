<template>
<div>
    <h1>Личный кабинет</h1>
    <event-list :events="bookedEvents" title="Забронированные"></event-list>
    <event-list :events="viewedEvents" title="Просмотренные"></event-list>
    <event-list :events="occurredEvents" title="Состоявшиеся"></event-list>
</div>
</template>

<script>
import EventList from './EventList.vue';

export default {
components: {
    EventList
},
data() {
    return {
    events: [
        { id: 1, title: "Event 1", date: "2024-05-25", status: "booked" },
        { id: 2, title: "Event 2", date: "2024-04-20", status: "viewed" },
        { id: 3, title: "Event 3", date: "2024-04-15", status: "occurred" }
    ]
    };
},
computed: {
    bookedEvents() {
    return this.events.filter(event => event.status === 'booked');
    },
    viewedEvents() {
    return this.events.filter(event => event.status === 'viewed');
    },
    occurredEvents() {
    return this.events.filter(event => event.status === 'occurred');
    }
},
methods: {
updateEventStatus() {
    const today = new Date();
    this.events.forEach(event => {
    const eventDate = new Date(event.date);
    if (eventDate < today) {
        event.status = 'occurred';
    } else if (eventDate >= today && eventDate <= new Date(today.getTime() + 30*24*60*60*1000)) {
        event.status = 'booked';
    } else {
        event.status = 'viewed';
    }
    });
}
},
mounted() {
this.updateEventStatus();
setInterval(this.updateEventStatus, 86400000); // Обновлять каждые 24 часа
}

}
</script>
