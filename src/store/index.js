import Vue from "vue";
import Vuex from "vuex";
import event from "./event";
import moment from "./moment";
import login from "./login";
import template from "./template";
import event_2 from "./event_2";
import popup from "./popup";

Vue.use(Vuex);

export default new Vuex.Store({
   
    modules: {
        event, login, moment, event_2, template, popup
    }
       
});