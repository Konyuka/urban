<template>

<div class="shadow-2xl">
<form class="px-16">
  <div class="">

    <div class="pt-8">
      <div>
        <p class="leading-normal text-xl font-medium text-gray-400">
          Filter Options
        </p>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      

        <div class="sm:col-span-3 px-6">
          <label for="country" class="block text-sm font-medium text-gray-400">
            Profession
          </label>
          <div class="shadow-xl  px-3">
            <select id="country" name="country" autocomplete="country" class="bg-green-50 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              <option>Plumbing</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div class="sm:col-span-3 px-6">
          <label for="country" class="block text-sm font-medium text-gray-400">
            Location
          </label>
          <div class="shadow-xl  px-3">
            <select id="country" name="country" autocomplete="country" class="bg-green-50 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              <option>Nairobi</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div class="sm:col-span-3 px-6">
          <label for="country" class="block text-sm font-medium text-gray-400">
            Pricing
          </label>
          <div class="shadow-xl  px-3">
            <select id="country" name="country" autocomplete="country" class="bg-green-50 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              <option>500 KES</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div class="sm:col-span-3 px-6">
          <label for="country" class="block text-sm font-medium text-gray-400">
            Rating
          </label>
          <div class="shadow-xl  px-3">
            <select id="country" name="country" autocomplete="country" class="bg-green-50 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              <option>Verified</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

      </div>
    </div>

  </div>

  <div class="pt-2">
    <div class="flex ml-6">
      <button class="mb-4 bg-gradient-to-r from-green-400 via-green-600 to-green-900 mx-auto lg:mx-0 text-gray-800 hover:text-white hover:bg-green-600 font-bold rounded-md my-2 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        <div class="flex justify-around">
        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        Search
        </div>
      </button>
    </div>
  </div>
</form>
</div>

</template>

<script>
export default {
  name: 'Form',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
