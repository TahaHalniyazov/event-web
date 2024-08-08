import axios from "axios";
import userEvents from "../js/database.js"
export default {
    state: {
        events: [],
        allUserEvents: userEvents.allEvents
    },
    getters: {
        allEvents(state) {
            return state.events;
        },

        getUserEvents(state) {
            return state.allUserEvents;
        }

        
    },
    mutations: {
        getEvents(state, events) {
            state.events = events;
        }
        
    },
    actions: {
        async getAllEvents(ctx) {
            
            await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=6`, {
              headers: {},
            })
              .then((response) => {
                console.log("response", response.data);
                ctx.commit("getEvents", response.data);
              })
              
          }
    },
}