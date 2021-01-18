<template>

<div class="min-h-screen bg-white flex">
  <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
              
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-sm text-gray-600 max-w">
          <router-link to="/register/buyer">
          <a href="#" class="font-medium text-green-600 hover:text-green-500">
            Register as Client 
          </a>
          </router-link>
          Or
          <router-link to="/register/seller">
          <a href="#" class="font-medium text-green-600 hover:text-green-500">
            Register as Pro
          </a>
          </router-link>
        </p>
      </div>

      <div class="mt-8">
        <div>
          
          <div class="mt-6 relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Welcome Back                
              </span>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <form @submit.prevent="submit" action="#" method="POST" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div class="mt-1">
                <input v-model="email" id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
              </div>
            </div>

            <div class="space-y-1">
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div class="mt-1">
                <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded">
                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-green-600 hover:text-green-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button @click="submit" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:block relative w-0 flex-1 css-selector">
    <!-- <img class="px-36  py-36 absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt=""> -->
  </div>
</div>

</template>

<script>
import firebase from '@/firebase'

export default {
  name: 'Login',
  data(){
   return{
    email: 'michaelsaiba84@gmail.com',
    password: 'password'
   }
  },
  methods:{
    submit() {
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(data => {
        this.$router.replace({ name: "dashboard" })
        this.$store.dispatch('setUser', data.user)
        // console.log(data)
      })
      .catch(err => {
        this.error = err.message;
      });
  }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.css-selector {
    background: linear-gradient(95deg, #3fd458, #12a787, #1f856a);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 54s ease infinite;
    -moz-animation: AnimationName 54s ease infinite;
    animation: AnimationName 54s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:90% 0%}
    50%{background-position:11% 100%}
    100%{background-position:90% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:90% 0%}
    50%{background-position:11% 100%}
    100%{background-position:90% 0%}
}
@keyframes AnimationName {
    0%{background-position:90% 0%}
    50%{background-position:11% 100%}
    100%{background-position:90% 0%}
}
</style>
