// import firebase from '@/firebase';
// //import store from '@/store';
// //import db from '@/db';
// import router from '@/router';

// firebase.auth().onAuthStateChanged((user) => {
//   console.log(user)
//   if (user) {
//     if (user.user) {
//       /* eslint-disable */
//       user = user.user;
//       /* eslint-enable */
//     }
//     const setUser = {
//       id: user.uid,
//       created_at: firebase.firestore.FieldValue.serverTimestamp(),
//     };
//     console.log(user.uid);
//     // this.$store.dispatch("setUser", setUser);
//     // store.commit('auth/setUser', setUser);
//     router.push('/subreddits');
//   } else {
//     // this.$store.dispatch("setUser", null);
//     // store.commit('auth/setUser', null);
//   }
// });
