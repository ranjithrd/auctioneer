<template>
  <div class="container">
    <div class="display-2">
      Auctioneer.
    </div>
    <br>
    <input type="text" v-model="gameCode">
    <input type="password" v-model="gamePass">
    <input type="button" value="Enter" @click="submitDetails">
    <p class="error" v-html="error">{{error}}</p>
    <!-- <div>
      <div class="card" v-for="game in this.games">
        <h1>{{game.name}}</h1>
        <h3>{{game.code}}</h3>
      </div>
    </div> -->
  </div>
</template>

<script>

  import { mapState } from 'vuex'
  import { Cookies } from 'js-cookie'

export default {
  middleware: ['games'],
  mounted: () => {
    const c = Cookies.get('auctioneerxr946')
    print(c)
    if (c === undefined) {
      return
    } else {
      this.$store.commit('authenticate', JSON.parse(c))
      this.$router.replace({path:'game'})
    }
  },
  data: {
    gameCode: "",
    gamePass: "",
    // error: "",
    authenticated: true,
  },
  computed: {
      games () {
        return this.$store.state.games
      }
  },
  methods: {
    async submitDetails() {
      var exists = false
      for (const game of this.games) {
        console.log("game.name")
        console.log(game.name)
        console.log("game")
        console.log(game)
        console.log("entered gameCode")
        console.log(this.gameCode)
        console.log("game.code")
        console.log(game.code)
        console.log("game.pass")
        console.log(game.pass)
        console.log("this.gamePass")
        console.log(this.gamePass)
        if (game.code == this.gameCode) {
          exists = true
          console.log("game exists")
          if (game.pass == this.gamePass) {
            console.log("password is right. authenticated~")
            this.authenticated = true
            this.$store.commit('authenticate', game)
            Cookies.set('auctioneerxr946', JSON.stringify(this.$store.game))
            this.$router.replace({path:'game'})
            return
          } else {
            alert("The game password that you have entered is wrong.")
            console.log("password is wrong")
          }
          break
        } else {
          console.log("game does not exist")
          exists = false
        }
      }
      if (!exists) {
        alert("The game code that you have entered is wrong.")
      }
    },
    creategame() {
      this.$router.replace({path:'newgame'})
    }
  }
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
