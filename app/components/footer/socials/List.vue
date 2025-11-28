<template>
    <div class="flex gap-2">
        <FooterSocialsIcon
            v-for="i in 5"
            :key="i"
            to="test"
        />
    </div>
</template>
