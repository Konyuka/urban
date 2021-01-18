<template>
  <div class="">
    <Nav />
    <div class="bg-green-50">
    <Services />
    <Hero />
    </div>
    <Adverts />
    <Featured />
    <Posts />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Hero from '@/components/Hero.vue'
import Services from '@/components/Services.vue'
import Featured from '@/components/Featured.vue'
import Adverts from '@/components/Adverts.vue'
import Posts from '@/components/Posts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Hero,
    Services,
    Featured,
    Adverts,
    Posts,
    Footer,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
