<template>
    <div class="cell" @click="play">
        <span v-if="cell.value">
            {{ cell.value }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        cell: Object,
    },
    methods: {
        play() {
            this.$store.commit('play', this.cell.index)
        }
    }
}
</script>

<style scope>
.cell {
    width: 150px;
    height: 150px;
    background-color: rgb(80, 80, 80);
    border-radius: 10px;
    transition: .5s ease-out;
    cursor: pointer;
    display: grid;
    place-items: center;
    user-select: none;
}

.cell:hover {
    background-color: rgb(100, 100, 100);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .5);
}

span {
    font-size: 4rem;
    transition: .2s ease
}

.cell:hover>span {
    font-size: 5rem;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, .8);
}
</style>