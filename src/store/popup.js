export default {
    state: {
      isPopupVisible: false
    },
    mutations: {
      openPopup(state) {
        state.isPopupVisible = true;
      },
      closePopup(state) {
        state.isPopupVisible = false;
      }
    },
    actions: {
      openPopup({ commit }) {
        commit('openPopup');
      },
      closePopup({ commit }) {
        commit('closePopup');
      }
    }
  };
  