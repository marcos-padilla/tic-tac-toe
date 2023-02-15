<template>
    <div>
        <GameBoard :cells="cells" />
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
            cells: Array(9).fill(null),
        }
    }
}
</script>