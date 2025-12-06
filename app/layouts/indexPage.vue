<template>
    <div class="overflow-x-hidden flex flex-col items-center">
        <NavigationNavBar />
        <div class="pb-16 min-h-screen w-full">
            <slot />
        </div>
        <Footer />
    </div>
</template>
