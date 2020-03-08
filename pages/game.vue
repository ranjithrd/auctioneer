<template>
  <div class="container" v-if="auth">
    <div class="display-2">
      {{game.name}}
    </div>
    <h4>GAME CODE (SHARE WITH FRIENDS TO INVITE THEM)</h4>
    <h2>{{game.code}}</h2>
    <div class="card" v-for="t in game.teams">
      <div class="card-body">
        <h2>{{t.name}}</h2>
        <h4>{{t.budget}} rupees left.</h4>
        <input type="button" value="PLAY THIS TEAM" @click="enteringTeam(t)">
      </div>
    </div>
  </div>
</template>

<script>

  import { mapState } from 'vuex'

export default {
  data: {
    // authenticated: true,
  },
  computed: {
      game () {
        return this.$store.state.game
      },
      auth () {
        return this.$store.state.authenticated
      }
  },
  middleware: 'games',
  methods: {
    enteringTeam(team) {
      this.$store.commit('chooseTeam', team)
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
