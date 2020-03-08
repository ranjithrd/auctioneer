<template>
  <div class="container">
    <div class="display-2">
      New game
    </div>
    <input type="text" v-model="gameName" placeholder="Kormangala Kingfishers">
    <input type="password" v-model="gamePasswordI">
    <input type="number" name="game Code" v-model="requestedCode">
    <input type="button" value="Create game" @click="creategame">
  </div>
</template>

<script>

  import { mapActions } from 'vuex'

export default {
  data: {
    gameName: "",
    gamePasswordI: "",
    requestedCode: ""
  },
  computed: {
    //   game () {
    //     return this.$store.state.game
    //   }
  },
  middleware: 'games',
//   methods: {
    //   async creategame() {
        //   const givenCode = 0,
        // this.$store.commit('addNewgame', {
            // name: gameName,
            // pass: gamePasswordI,
            // code: givenCode,
        // })
        // this.$store.dispatch('newgame')
    //   }
//   }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
