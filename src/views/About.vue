<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <input type="checkbox" v-model="contentArr" value="a" />
      <label>a</label>
      <input type="checkbox" v-model="contentArr" value="b" />
      <label>b</label>
      <input type="checkbox" v-model="contentArr" value="c" />
      <label>c</label>
      <input type="checkbox" v-model="contentArr" value="d" />
      <label>d</label>
    </div>
    <div>{{contentArr}}</div>
    <button v-on:click.prevent='psotss'>add</button>

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
    data(){
      return {
        contentArr: []
      }
    },
    computed: {
      homeVal () {
        return this.$store.state.home.homeState
      },
      aboutVal () {
        return this.$store.state.about.aboutState
      }
    },
    methods: {
      psotss: function () {
        console.log("psotss")
      },
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
