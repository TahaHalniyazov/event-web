<template>
<div>
    <h2>{{ title }}</h2>
    <ul>
    <li v-for="event in events" :key="event.id">{{ event.title }} - {{ event.date }}</li>
    </ul>
</div>
</template>

<script>
export default {
props: {
    events: Array,
    title: String
}
}
</script>
