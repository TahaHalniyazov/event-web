
import axios from 'axios';

export default {
    state: {
        isLoading: false,
        error: null,
        successMessage: null,
        phoneStatus: null,
        codeStatus: null,
        userData: null,
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        error(state) {
            return state.error;
        },
        successMessage(state) {
            return state.successMessage;
        },
        getPhoneStatus(state) {
            return state.phoneStatus;
        },
        getCodeStatus(state) {
            return state.codeStatus;
        },
        getUserData(state) {
            return state.userData;
        },

    },
    mutations: {
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setError(state, error) {
            state.error = error;
        },
        setSuccessMessage(state, message) {
            state.successMessage = message;
            
        },
        sendPhone(state, status) {
            state.phoneStatus = status;
        },
        sendCode(state, status) {
            state.codeStatus = status;
        },
        registerUser(state, userData) {
            state.userData = userData;
        },
    },
    actions: {

    async sendPhoneForCode({ commit }, payload) {
            commit('setLoading', true);
            commit('setError', null);
            try {
                const response = await axios.post('/auth/2fa', payload);
                commit('sendPhone', response.data.message);
                return response.data;
            } catch (error) {
                commit('setError', error.response?.data?.message || 'An error occurred');
                return error.response.data;
            } finally {
                commit('setLoading', false);
            }
        },

    async sendCode({ commit }, payload) {
            commit('setLoading', true);
            commit('setError', null);
            try {
                const response = await axios.post('/auth/2fa/code', payload);
                commit('sendCode', response.data.message);
                return response.data;
            } catch (error) {
                commit('setError', error.response?.data?.message || 'An error occurred');
                return error.response.data;
            } finally {
                commit('setLoading', false);
            }
        },

    async registerUser({ commit }, payload) {
            commit('setLoading', true);
            commit('setError', null);
            try {
                const response = await axios.post('/api/register', payload);
                commit('registerUser', response.data.message);
                return response.data;
            } catch (error) {
                commit('setError', error.response?.data?.message || 'An error occurred');
                return error.response.data;
            } finally {
                commit('setLoading', false);
            }
        },
    async successMessage({ commit }, payload) {
            commit('setLoading', true);
            commit('setError', null);
            try {
                const response = await axios.post('/api/register', payload);
                commit('setSuccessMessage', response.data.message);
            } catch (error) {
                commit('setError', error.response?.data?.message || 'An error occurred');
            } finally {
                commit('setLoading', false);
            }
        },
    },
};
