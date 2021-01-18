const mutations = {
  setUserData(state, user) {
    state.uid = user.uid;
    state.email = user.email;
    state.user = user.displayName;
    state.isLoggedIn = true;
  },
  setUser(state, user) {
    if (user) {
      state.user = user.displayName;
      state.email = user.email;
      state.uid = user.uid;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  },
  setUserDetails(state, userDetails) {

    state.userDetails.phone = userDetails.phone;
    state.userDetails.profession = userDetails.profession;
    state.userDetails.location = userDetails.location;
    state.userDetails.description = userDetails.description;
    
  },
  clearUser(state) {
    state.user = {};
    state.isLoggedIn = false;
    sessionStorage.clear();
  },
};

export default mutations