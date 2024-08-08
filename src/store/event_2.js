import axios from "axios";
import userPanelEvents from "../js/database_2.js"
export default {
    state: {
        panelEvents: [],
        allUserPanelEvents: userPanelEvents.allPanelEvents
    },
    getters: {
        allPanelEvents(state) {
            return state.panelEvents;
        },

        getUserPanelEvents(state) {
            return state.allUserPanelEvents;
        }

        
    },
    mutations: {
        getPanelEvents(state, panelEvents) {
            state.panelEvents = panelEvents;
        }
        
    },
    actions: {
        async getAllPanelEvents(ctx) {
            
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