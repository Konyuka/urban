const actions = {
  register({ commit }, user) {
    commit("setUserData", user);
  },
  setUser({ commit }, user) {
    commit("setUser", user);
  },
  setUserDetails({ commit }, userDetails) {
    commit("setUserDetails", userDetails);
  },
  logout({ commit }) {
    commit("clearUser");
  },
};

export default actions
