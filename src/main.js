import { createApp } from 'vue'
import { createStore } from 'vuex'

import './style.css'
import App from './App.vue'

const store = createStore({
	state() {
		return {
			cells: Array(9).fill(null),
			players: ['❌', '⭕'],
			currentPlayer: '❌',
		}
	},
	mutations: {
		changeTurn(state) {
			if (state.currentPlayer == '❌') {
				state.currentPlayer = '⭕'
			} else {
				state.currentPlayer = '❌'
			}
		},
	},
})

const app = createApp(App)
app.use(store)
app.mount('#app')
