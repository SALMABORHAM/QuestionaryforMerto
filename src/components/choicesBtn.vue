<template>
    <v-btn @click="doSomething" class="choicesBtn">

        <slot></slot>
    </v-btn>
</template>

<script setup lang="ts">
const doSomething = () => {
    console.log('do something')
}

</script>
