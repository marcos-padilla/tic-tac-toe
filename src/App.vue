<template>
    <div>
        <div class="turn">
            <span v-if="checkWinner == null">Turn: {{ currentPlayer }}</span>
            <span v-else>
                Winner: {{ checkWinner }}
            </span>
        </div>
        <GameBoard />
        <div class="bottom-buttons">
            <button @click="reset">Reset</button>
        </div>
    </div>
</template>

<script>
import GameBoard from './GameBoard.vue';
export default {
    components: {
        GameBoard
    },
    data() {
        return {
        }
    },
    methods: {
        reset() {
            this.$store.commit('reset')
        }
    },
    computed: {
        currentPlayer() {
            return this.$store.state.currentPlayer
        },
        checkWinner() {
            return this.$store.getters.checkWinner
        }
    }
}
</script>

<style scoped>
.turn {
    margin-bottom: 20px;
    font-size: 3rem;
}

.bottom-buttons {
    margin-top: 20px;
}

.bottom-buttons>button {
    font-size: 2rem;
    transition: .2s;
    border: none;
    outline: none;

}

.bottom-buttons>button:hover {
    font-size: 2.2rem;
    background-color: rgb(40, 40, 40);
}
</style>