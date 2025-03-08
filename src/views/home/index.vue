<template>
    <h1 class="text-3xl font-bold underline">
        home
    </h1>
    <a-date-picker v-model:value="pickerValue"></a-date-picker>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let pickerValue = ref('')
</script>

<style scoped></style>
