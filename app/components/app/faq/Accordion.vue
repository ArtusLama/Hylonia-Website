<script setup lang="ts">
const { items } = defineProps<{
    items: {
        question: string
        answer: string
    }[]
}>()
</script>

<template>
    <UiAccordion collapsible>
        <UiAccordionItem
            v-for="(item, index) in items"
            :key="index"
            :value="`item-${index}`"
            class="border-b last:border-b-0"
        >
            <UiAccordionTrigger>
                {{ item.question }}
            </UiAccordionTrigger>
            <UiAccordionContent>
                {{ item.answer }}
            </UiAccordionContent>
        </UiAccordionItem>
    </UiAccordion>
</template>
