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

const store = createStore({
	state() {
		return {
			/* cells: [
				...Array(9).map((el, index) => {
					return { index: index, value: null }
				}),
			], */
			cells: [...cellsInitialState],
			players: ['❌', '⭕'],
			currentPlayer: '❌',
		}
	},
	mutations: {
		play(state, index) {
			if (state.cells[index].value == null) {
				state.cells[index] = { index: index, value: state.currentPlayer }
				if (state.currentPlayer == '❌') {
					state.currentPlayer = '⭕'
				} else {
					state.currentPlayer = '❌'
				}
			}
		},
		reset(state) {
			state.cells = [...cellsInitialState]
			state.currentPlayer = '❌'
		},
	},
})

const app = createApp(App)
app.use(store)
app.mount('#app')
