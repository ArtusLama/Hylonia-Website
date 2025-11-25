<script setup lang="ts">
const faqItems = [
    {
        question: "Example Question 1?",
        answer: "Answer to the example question 1. And random additional text to make it longer.",
    },
    {
        question: "Example Question 2?",
        answer: "Answer to the example question 2. And random additional text to make it longer.",
    },
    {
        question: "Example Question 3?",
        answer: "Answer to the example question 3. And random additional text to make it longer.",
    },
    {
        question: "Example Question 4?",
        answer: "Answer to the example question 4. And random additional text to make it longer.",
    },
]
</script>

<template>
    <div class="w-full">
        <AppFaqAccordion :items="faqItems" />
    </div>
</template>
