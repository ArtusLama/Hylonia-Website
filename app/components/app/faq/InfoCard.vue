<template>
    <UiCard>
        <UiCardHeader class="flex flex-col items-center text-center">
            <UiCardTitle>Häufig gestellte Fragen</UiCardTitle>
            <UiCardDescription class="max-w-lg">
                Finde schnell Antworten auf die wichtigsten Fragen rund um Hylonia. Nicht das Richtige gefunden? Unser Support-Team hilft dir gerne weiter!
            </UiCardDescription>
        </UiCardHeader>
        <UiCardFooter class="flex justify-center gap-x-4 gap-y-2 flex-wrap w-full">
            <UiButton
                as-child
            >
                <NuxtLinkLocale
                    to="https://discord.gg/hylonia"
                    external
                    target="_blank"
                >
                    <Icon
                        name="simple-icons:discord"
                        :size="18"
                    />
                    Discord Community
                </NuxtLinkLocale>
            </UiButton>
        </UiCardFooter>
    </UiCard>
</template>
