<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from '@/firebase'

export default {
  name: 'App',
  components: {
  },
  data(){
    return {}
  },
  computed: {
    // isLoggedIn() {
    //   // return (this.$store.state.user.length == 0) ? true : false
    //   return this.$store.state.isLoggedIn
    // }, 
    // user () {
    //   return this.$store.state.user
    // },
  },
  watch: {
    // isLoggedIn(){
    //   firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       this.isLoggedIn = true
    //       // User is signed in.
    //     } else {
    //       this.isLoggedIn = false
    //       // No user is signed in.
    //     }
    //   });
    // }
  }
}
</script>

<style>

</style>
