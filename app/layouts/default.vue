<template>
    <div class="overflow-x-hidden flex flex-col items-center">
        <NavigationNavBar />
        <div class="pt-32 pb-16 px-8 md:px-32 flex justify-center min-h-screen max-w-7xl w-full">
            <slot />
        </div>
        <Footer />
    </div>
</template>
