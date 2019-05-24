<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ homeVal }}</div>
    <button @click="clickI('home')">increase</button>
    <button @click="clickD()">decrease</button>
    <div>{{ aboutVal }}</div>
    <button @click="clickIH('about')">increase</button>
    <button @click="clickDH()">decrease</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    homeVal () {
      return  this.$store.state.home.homeState
    },
    aboutVal () {
      return this.$store.state.about.aboutState
    }
  },
  methods: {
    clickI (num) {
      this.$store.dispatch('home/homeI', num)
    },
    clickD (num) {
      this.$store.dispatch('home/homeD', num)
    },
    clickIH (num) {
      this.$store.dispatch('about/aboutI', num)
    },
    clickDH (num) {
      this.$store.dispatch('about/aboutD', num)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
