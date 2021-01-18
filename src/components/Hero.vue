<template>
  <div>
    <!--Hero-->
    <div class="pt-1">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight text-green-600">
            100% Quality Assured
          </h1>
          <p class="leading-normal text-xl mb-2 text-gray-400">
            FIND TOP-RATED, CERTIFIED PROS FOR YOUR PROJECT
          </p>

         

        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 py-6 text-center">
          <Form />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'Hero',
  components:{
    Form, 
  }
  
}
</script>

<style scoped>

</style>
