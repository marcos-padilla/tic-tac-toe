<template>
    <div class="board">
        <CellComponent v-for="cell in cells" :cell="cell" />
    </div>
</template>

<script>
import CellComponent from './CellComponent.vue';

export default {
    components: {
        CellComponent,
    },
    props: {
        cells: Array
    },
    methods: {
    }
}
</script>

<style scoped>
.board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
</style>