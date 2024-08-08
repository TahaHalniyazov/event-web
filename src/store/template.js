import axios from "axios";
import templates from "../js/database.js"
export default {
    state: {
        userTemplates: templates.allTemplates
    },
    getters: {       

        getuserTemplates(state) {
            return state.userTemplates;
        }

        
    },
    mutations: {
        setuserTemplates(state, template) {
            console.log('template', template);
            state.userTemplates.push(template);
        }
        
    },
    actions: {},
}