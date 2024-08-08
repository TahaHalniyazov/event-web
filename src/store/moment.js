import axios from "axios";
import userMoments from "../js/database.js"
export default {
    state: {
        allUserMoments: userMoments.photos
    },
    getters: {
     
        photos(state) {
            return state.allUserMoments;
        }

        
    },
    mutations: {},
    actions: {},
}