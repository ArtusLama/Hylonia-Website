<template>
    <div class="overflow-x-hidden flex flex-col items-center">
        <NavigationNavBar />
        <div class="pt-32 mx-32 flex justify-center min-h-screen w-7xl">
            <slot />
        </div>
        <Footer />
    </div>
</template>
