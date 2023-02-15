import { createApp } from 'vue'
import { createStore } from 'vuex'

import './style.css'
import App from './App.vue'

const cellsInitialState = [
	{ index: 0, value: null },
	{ index: 1, value: null },
	{ index: 2, value: null },
	{ index: 3, value: null },
	{ index: 4, value: null },
	{ index: 5, value: null },
	{ index: 6, value: null },
	{ index: 7, value: null },
	{ index: 8, value: null },
]

const players = { X: '❌', O: '⭕' }

const store = createStore({
	state() {
		return {
			winnerStates: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[6, 4, 2],
			],
			cells: [...cellsInitialState],
			currentPlayer: players.X,
		}
	},
	mutations: {
		play(state, index) {
			if (
				state.cells[index].value == null &&
				store.getters.checkWinner == null
			) {
				state.cells[index] = { index: index, value: state.currentPlayer }
				store.commit('changeTurn')
			}
		},
		reset(state) {
			state.cells = [...cellsInitialState]
			state.currentPlayer = '❌'
		},
		changeTurn(state) {
			if (state.currentPlayer == players.X) {
				state.currentPlayer = players.O
			} else {
				state.currentPlayer = players.X
			}
		},
	},
	getters: {
		checkWinner(state) {
			let winner = null
			state.winnerStates.forEach((s) => {
				if (
					state.cells[s[0]].value &&
					state.cells[s[0]].value &&
					state.cells[s[0]].value == state.cells[s[1]].value &&
					state.cells[s[0]].value == state.cells[s[2]].value
				) {
					winner = state.cells[s[0]].value
				}
			})
			return winner
		},
		checkTie(state) {
			let tie = true
			state.cells.forEach((cell) => {
				if (cell.value == null) {
					tie = false
				}
			})
			return tie
		},
	},
})

const app = createApp(App)
app.use(store)
app.mount('#app')
