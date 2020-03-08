// main store
// import from 'firebase/app'
// import from 'firebase/database'
import { db } from '~/plugins/firebase.js'

export const state = () => ({
    games: [],
    players: [],
    authenticated: false,
    game: {},
    newgame: {},
    isTeamChosen: false,
    team: {},
})

export const mutations = ({
    changegames(state, payload) {
        state.games = payload
    },
    changePlayers(state, payload) {
        state.players = payload
    },
    authenticate(state, payload) {
        state.authenticated = true
        state.game = payload
    },
    addNewgame(state, payload) {
        state.newgame = payload
    },
    chooseTeam(state, payload) {
        state.isTeamChosen = true
        state.team = payload
    }
})

export const actions = ({
    async getgamesDB() {
        await db.ref('games').once('value').then((parentSnapshot) => {
            var newgames = []
            parentSnapshot.forEach(function (childSnapshot) {
                newgames.push(childSnapshot.val())
                console.log(newgames)
                console.log(childSnapshot.val())
            })
            this.commit('changegames', newgames)
            console.log(this.state.games)
        })
        console.log("after fetch")
        // return Promise((resolve, reject) => {
        //     resolve("Successfully done this stuff.")
        // })
    },
    async newgame() {
        const newRef = db.ref('games').push()
        await newRef.set(this.state.newgame)
        await this.getgamesDB()
        console.log("New game created")
    }
})