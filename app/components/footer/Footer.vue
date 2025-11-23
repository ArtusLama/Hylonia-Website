<template>
    <footer class="w-full bg-footer text-footer-foreground flex justify-center py-12">
        <div class="w-full max-w-400 px-48 space-y-4">
            <FooterHeader />
            <div class="h-[0.5px] bg-footer-muted-foreground/35" />
            <div class="flex gap-8">
                <div class="shrink-0">
                    <NuxtImg
                        src="/img/logo.png"
                        alt="Hylonia Logo"
                        :width="100"
                        :height="100"
                    />
                </div>
                <FooterSectionAbout />
            </div>
        </div>
    </footer>
</template>
