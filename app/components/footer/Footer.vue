<template>
    <footer class="w-full bg-footer text-footer-foreground flex flex-col justify-center items-center gap-16 pt-12 pb-6">
        <div class="w-full max-w-400 px-10 xl:px-48 space-y-8">
            <FooterHeader />
            <div class="h-[0.5px] bg-footer-muted-foreground/20" />
            <div class="flex flex-col items-center justify-between lg:flex-row lg:items-start gap-y-12">
                <div class="flex flex-col md:flex-row items-center md:items-start gap-4 xl:gap-12">
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
                <div class="flex flex-col sm:flex-row gap-8 lg:gap-12">
                    <FooterSectionQuickLinks />
                    <FooterSectionSupport />
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center gap-2">
            <FooterCopyright />
            <FooterLegalLinks />
        </div>
    </footer>
</template>
