<script setup lang="ts">
defineOgImageComponent("Main")
useSeoMeta({
    title: "Animated Underline Documentation",
    description: "Complete guide to the animated underline system with Tailwind v4",
})
</script>

<template>
    <div class="container mx-auto py-12 px-4 max-w-5xl">
        <div class="mb-12">
            <h1 class="text-5xl font-bold mb-4">
                Animated Underline System
            </h1>
            <p class="text-xl text-muted-foreground">
                GPU-accelerated underline animations with full Tailwind v4 integration
            </p>
        </div>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Quick Start
            </h2>
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-medium mb-3">
                        Basic Pattern
                    </h3>
                    <p class="text-muted-foreground mb-4">
                        Every animated underline requires three classes:
                    </p>
                    <ol class="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">
                        <li>
                            <code class="text-sm bg-muted px-2 py-1 rounded">underline-base</code> - Sets up positioning and CSS variables
                        </li>
                        <li>
                            <code class="text-sm bg-muted px-2 py-1 rounded">underline-collapsed</code> - Initial hidden state
                        </li>
                        <li>
                            <code class="text-sm bg-muted px-2 py-1 rounded">[trigger]:underline-expanded</code> - Show on your trigger
                        </li>
                    </ol>
                </div>

                <div class="border rounded-lg p-6 bg-card">
                    <div class="mb-4 text-center py-4 bg-accent/20 rounded-lg border-2 border-dashed border-primary/30">
                        <p class="text-sm text-muted-foreground mb-2">
                            👇 Hover the text below
                        </p>
                        <a class="underline-base underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                            Hover me for underline
                        </a>
                    </div>
                    <code class="block bg-muted p-4 rounded text-sm font-mono overflow-x-auto">
                        &lt;a class="underline-base underline-collapsed hover:underline-expanded"&gt;Hover me&lt;/a&gt;
                    </code>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Direction Control
            </h2>
            <p class="text-muted-foreground mb-6">
                Control animation direction. Use simple bidirectional utilities or advanced independent in/out control.
            </p>

            <div class="space-y-8">
                <div>
                    <h3 class="text-xl font-medium mb-4">
                        Simple (Bidirectional)
                    </h3>
                    <p class="text-sm text-muted-foreground mb-4">
                        Same direction for both entry and exit animations.
                    </p>

                    <div class="space-y-4">
                        <div class="border rounded-lg p-6 bg-card">
                            <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                                <a class="underline-base underline-left hover:underline-expanded text-2xl cursor-pointer font-medium">
                                    Left
                                </a>
                            </div>
                            <code class="block bg-muted p-4 rounded text-sm font-mono">
                                class="underline-base underline-left hover:underline-expanded"
                            </code>
                            <p class="text-sm text-muted-foreground mt-2">
                                Default - expands and collapses left to right
                            </p>
                        </div>

                        <div class="border rounded-lg p-6 bg-card">
                            <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                                <a class="underline-base underline-right hover:underline-expanded text-2xl cursor-pointer font-medium">
                                    Right
                                </a>
                            </div>
                            <code class="block bg-muted p-4 rounded text-sm font-mono">
                                class="underline-base underline-right hover:underline-expanded"
                            </code>
                            <p class="text-sm text-muted-foreground mt-2">
                                Expands and collapses right to left
                            </p>
                        </div>

                        <div class="border rounded-lg p-6 bg-card">
                            <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                                <a class="underline-base underline-center hover:underline-expanded text-2xl cursor-pointer font-medium">
                                    Center
                                </a>
                            </div>
                            <code class="block bg-muted p-4 rounded text-sm font-mono">
                                class="underline-base underline-center hover:underline-expanded"
                            </code>
                            <p class="text-sm text-muted-foreground mt-2">
                                Expands and collapses from center outward
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-medium mb-4">
                        Advanced (Independent In/Out)
                    </h3>
                    <p class="text-sm text-muted-foreground mb-4">
                        Control entry and exit directions independently for unique animations.
                    </p>

                    <div class="space-y-4">
                        <div class="border rounded-lg p-6 bg-card">
                            <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                                <a class="underline-base underline-in-left underline-out-right hover:underline-expanded text-2xl cursor-pointer font-medium">
                                    Left In, Right Out
                                </a>
                            </div>
                            <code class="block bg-muted p-4 rounded text-sm font-mono">
                                class="underline-base underline-in-left underline-out-right hover:underline-expanded"
                            </code>
                            <p class="text-sm text-muted-foreground mt-2">
                                Enters from left, exits to right
                            </p>
                        </div>

                        <div class="border rounded-lg p-6 bg-card">
                            <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                                <a class="underline-base underline-in-right underline-out-left hover:underline-expanded text-2xl cursor-pointer font-medium">
                                    Right In, Left Out
                                </a>
                            </div>
                            <code class="block bg-muted p-4 rounded text-sm font-mono">
                                class="underline-base underline-in-right underline-out-left hover:underline-expanded"
                            </code>
                            <p class="text-sm text-muted-foreground mt-2">
                                Enters from right, exits to left
                            </p>
                        </div>

                        <div class="border rounded-lg p-6 bg-card">
                            <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                                <a class="underline-base underline-in-center underline-out-left hover:underline-expanded text-2xl cursor-pointer font-medium">
                                    Center In, Left Out
                                </a>
                            </div>
                            <code class="block bg-muted p-4 rounded text-sm font-mono">
                                class="underline-base underline-in-center underline-out-left hover:underline-expanded"
                            </code>
                            <p class="text-sm text-muted-foreground mt-2">
                                Enters from center, exits to left
                            </p>
                        </div>

                        <div class="border rounded-lg p-6 bg-card">
                            <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                                <a class="underline-base underline-in-center underline-out-right hover:underline-expanded text-2xl cursor-pointer font-medium">
                                    Center In, Right Out
                                </a>
                            </div>
                            <code class="block bg-muted p-4 rounded text-sm font-mono">
                                class="underline-base underline-in-center underline-out-right hover:underline-expanded"
                            </code>
                            <p class="text-sm text-muted-foreground mt-2">
                                Enters from center, exits to right
                            </p>
                        </div>
                    </div>

                    <div class="mt-4 p-4 bg-muted/50 rounded-lg">
                        <p class="text-sm text-muted-foreground">
                            <strong class="text-foreground">Available modifiers:</strong>
                        </p>
                        <ul class="mt-2 space-y-1 text-sm text-muted-foreground">
                            <li><code class="bg-muted px-2 py-1 rounded">underline-in-left</code> / <code class="bg-muted px-2 py-1 rounded">underline-in-right</code> / <code class="bg-muted px-2 py-1 rounded">underline-in-center</code></li>
                            <li><code class="bg-muted px-2 py-1 rounded">underline-out-left</code> / <code class="bg-muted px-2 py-1 rounded">underline-out-right</code> / <code class="bg-muted px-2 py-1 rounded">underline-out-center</code></li>
                            <li class="mt-2 text-xs">
                                Mix and match any combination for 9 total possibilities
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Thickness
            </h2>
            <p class="text-muted-foreground mb-6">
                Control underline height. Supports theme tokens, bare integers (as px), and arbitrary values.
            </p>

            <div class="space-y-8">
                <div>
                    <h3 class="text-lg font-medium mb-4">
                        Theme Tokens
                    </h3>
                    <div class="grid gap-4">
                        <div class="border rounded-lg p-6 bg-card">
                            <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                                <a class="underline-base underline-thin underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                    Thin (1px)
                                </a>
                            </div>
                            <code class="block bg-muted p-4 rounded text-sm font-mono">
                                class="underline-base underline-thin ..."
                            </code>
                        </div>

                        <div class="border rounded-lg p-6 bg-card">
                            <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                                <a class="underline-base underline-thick underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                    Thick (3px)
                                </a>
                            </div>
                            <code class="block bg-muted p-4 rounded text-sm font-mono">
                                class="underline-base underline-thick ..."
                            </code>
                        </div>

                        <div class="border rounded-lg p-6 bg-card">
                            <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                                <a class="underline-base underline-bold underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                    Bold (4px)
                                </a>
                            </div>
                            <code class="block bg-muted p-4 rounded text-sm font-mono">
                                class="underline-base underline-bold ..."
                            </code>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-medium mb-4">
                        Bare Integers (converted to px)
                    </h3>
                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4 flex gap-6 justify-center py-3 bg-accent/10 rounded">
                            <a class="underline-base underline-5 underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                5px
                            </a>
                            <a class="underline-base underline-8 underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                8px
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-5" → 5px | class="underline-8" → 8px
                        </code>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-medium mb-4">
                        Arbitrary Values
                    </h3>
                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4 flex gap-6 justify-center py-3 bg-accent/10 rounded">
                            <a class="underline-base underline-[6px] underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                6px
                            </a>
                            <a class="underline-base underline-[0.5rem] underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                0.5rem
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-[6px] ..." | class="underline-[0.5rem] ..."
                        </code>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Animation Duration
            </h2>
            <p class="text-muted-foreground mb-6">
                Control speed. Supports theme tokens, bare integers (as ms), and arbitrary time values.
            </p>

            <div class="space-y-6">
                <div class="grid gap-4">
                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4">
                            <a class="underline-base underline-duration-fast underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                Fast (150ms)
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-duration-fast ..."
                        </code>
                    </div>

                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4">
                            <a class="underline-base underline-duration-slow underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                Slow (500ms)
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-duration-slow ..."
                        </code>
                    </div>

                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4">
                            <a class="underline-base underline-duration-1000 underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                1000ms (bare integer)
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-duration-1000 ..." → 1000ms
                        </code>
                    </div>

                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4">
                            <a class="underline-base underline-duration-[1.5s] underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                1.5s (arbitrary)
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-duration-[1.5s] ..."
                        </code>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Timing Functions
            </h2>
            <p class="text-muted-foreground mb-6">
                Control the easing curve.
            </p>

            <div class="space-y-6">
                <div class="grid gap-4">
                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4">
                            <a class="underline-base underline-ease-bounce underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                Bounce (elastic)
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-ease-bounce ..."
                        </code>
                        <p class="text-sm text-muted-foreground mt-2">
                            cubic-bezier(0.68, -0.55, 0.265, 1.55)
                        </p>
                    </div>

                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4">
                            <a class="underline-base underline-ease-spring underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                Spring (overshoot)
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-ease-spring ..."
                        </code>
                        <p class="text-sm text-muted-foreground mt-2">
                            cubic-bezier(0.34, 1.56, 0.64, 1)
                        </p>
                    </div>

                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4 flex gap-6">
                            <a class="underline-base underline-timing-[linear] underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                Linear
                            </a>
                            <a class="underline-base underline-timing-[ease-in] underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                Ease In
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-timing-[linear] ..." | class="underline-timing-[ease-in] ..."
                        </code>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Vertical Offset
            </h2>
            <p class="text-muted-foreground mb-6">
                Control vertical position. Positive values move the underline down (away from text), negative values move it up (closer to text).
            </p>

            <div class="space-y-6">
                <div class="grid gap-4">
                    <div class="border rounded-lg p-6 bg-card">
                        <h3 class="text-lg font-medium mb-4">
                            Spacing Scale
                        </h3>
                        <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                            <a class="underline-base underline-offset-4 underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                Offset 4 (1rem down)
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-offset-4 ..." → -1rem (4 × 0.25rem)
                        </code>
                    </div>

                    <div class="border rounded-lg p-6 bg-card">
                        <h3 class="text-lg font-medium mb-4">
                            Arbitrary Values
                        </h3>
                        <div class="mb-4 flex gap-6 justify-center py-3 bg-accent/10 rounded">
                            <a class="underline-base underline-offset-[3px] underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                3px down
                            </a>
                            <a class="underline-base underline-offset-[-2px] underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                2px up
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-offset-[3px] ..." | class="underline-offset-[-2px] ..."
                        </code>
                        <p class="text-sm text-muted-foreground mt-2">
                            Include the sign in the bracket: [3px] = down, [-2px] = up
                        </p>
                    </div>

                    <div class="border rounded-lg p-6 bg-card">
                        <h3 class="text-lg font-medium mb-4">
                            Negative Prefix (for spacing scale)
                        </h3>
                        <div class="mb-4 text-center py-3 bg-accent/10 rounded">
                            <a class="underline-base -underline-offset-2 underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-medium">
                                -offset-2 (0.5rem up)
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="-underline-offset-2 ..." → 0.5rem (inverts spacing scale)
                        </code>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Color
            </h2>
            <p class="text-muted-foreground mb-6">
                Control color. Defaults to currentColor (inherits text color).
            </p>

            <div class="space-y-6">
                <div class="grid gap-4">
                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4">
                            <a class="underline-base underline-color-[red] underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                Red
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-color-[red] ..."
                        </code>
                    </div>

                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4">
                            <a class="underline-base underline-color-[#3b82f6] underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                Blue (#3b82f6)
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-color-[#3b82f6] ..."
                        </code>
                    </div>

                    <div class="border rounded-lg p-6 bg-card">
                        <div class="mb-4">
                            <a class="underline-base underline-color-[oklch(0.7_0.2_150)] underline-collapsed hover:underline-expanded text-2xl cursor-pointer">
                                Green (OKLCH)
                            </a>
                        </div>
                        <code class="block bg-muted p-4 rounded text-sm font-mono">
                            class="underline-color-[oklch(0.7_0.2_150)] ..."
                        </code>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Triggers
            </h2>
            <p class="text-muted-foreground mb-6">
                Works with any Tailwind variant.
            </p>

            <div class="space-y-6">
                <div class="border rounded-lg p-6 bg-card">
                    <h3 class="text-lg font-medium mb-4">
                        Hover
                    </h3>
                    <div class="mb-4">
                        <a class="underline-base underline-collapsed hover:underline-expanded text-xl cursor-pointer">
                            Hover me
                        </a>
                    </div>
                    <code class="block bg-muted p-4 rounded text-sm font-mono">
                        class="underline-base underline-collapsed hover:underline-expanded"
                    </code>
                </div>

                <div class="border rounded-lg p-6 bg-card">
                    <h3 class="text-lg font-medium mb-4">
                        Group Hover
                    </h3>
                    <div class="mb-4">
                        <div class="group p-6 border-2 rounded-lg cursor-pointer hover:bg-accent/30 transition-colors">
                            <p class="text-lg font-medium mb-2">
                                Hover this card
                            </p>
                            <p class="underline-base underline-from-center underline-collapsed group-hover:underline-expanded">
                                Underline appears when parent is hovered
                            </p>
                        </div>
                    </div>
                    <code class="block bg-muted p-4 rounded text-sm font-mono overflow-x-auto">
                        &lt;div class="group"&gt;&lt;p class="underline-base underline-collapsed group-hover:underline-expanded"&gt;...&lt;/p&gt;&lt;/div&gt;
                    </code>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Customization
            </h2>
            <p class="text-muted-foreground mb-6">
                Extend with your own theme tokens.
            </p>

            <div class="space-y-6">
                <div class="bg-muted p-6 rounded font-mono text-sm overflow-x-auto">
                    <pre>@theme {
  --underline-thickness-hairline: 0.5px;
  --underline-duration-ultra-fast: 75ms;
  --underline-ease-elastic: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}</pre>
                </div>
                <p class="text-muted-foreground">
                    Then use: <code class="bg-muted px-2 py-1 rounded text-sm">class="underline-hairline underline-duration-ultra-fast underline-ease-elastic"</code>
                </p>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Real World Examples
            </h2>

            <div class="space-y-6">
                <div class="border rounded-lg p-6 bg-card">
                    <h3 class="text-lg font-medium mb-4">
                        Navigation Links
                    </h3>
                    <div class="mb-4">
                        <nav class="flex gap-6">
                            <a class="underline-base underline-from-center underline-duration-fast underline-collapsed hover:underline-expanded text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                                Home
                            </a>
                            <a class="underline-base underline-from-center underline-duration-fast underline-expanded text-primary cursor-pointer">
                                Current
                            </a>
                        </nav>
                    </div>
                    <code class="block bg-muted p-4 rounded text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                        class="underline-base underline-from-center underline-duration-fast underline-collapsed hover:underline-expanded"
                    </code>
                </div>

                <div class="border rounded-lg p-6 bg-card">
                    <h3 class="text-lg font-medium mb-4">
                        Interactive Cards
                    </h3>
                    <div class="mb-4 grid grid-cols-2 gap-4">
                        <div class="group p-4 border rounded-lg cursor-pointer hover:border-primary transition-all">
                            <div class="w-full h-16 bg-muted rounded mb-2" />
                            <h4 class="underline-base underline-thick underline-from-center underline-collapsed group-hover:underline-expanded text-base font-semibold group-hover:text-primary transition-colors">
                                Card Title
                            </h4>
                        </div>
                        <div class="group p-4 border rounded-lg cursor-pointer hover:border-primary transition-all">
                            <div class="w-full h-16 bg-muted rounded mb-2" />
                            <h4 class="underline-base underline-thick underline-from-center underline-collapsed group-hover:underline-expanded text-base font-semibold group-hover:text-primary transition-colors">
                                Card Title
                            </h4>
                        </div>
                    </div>
                    <code class="block bg-muted p-4 rounded text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                        &lt;div class="group"&gt;&lt;h4 class="underline-base underline-thick underline-from-center underline-collapsed group-hover:underline-expanded"&gt;...&lt;/h4&gt;&lt;/div&gt;
                    </code>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Complex Combinations
            </h2>

            <div class="space-y-6">
                <div class="border rounded-lg p-6 bg-card">
                    <div class="mb-4">
                        <a class="underline-base underline-bold underline-from-center underline-duration-slow underline-ease-bounce underline-collapsed hover:underline-expanded text-2xl cursor-pointer text-primary font-semibold">
                            Bold + Center + Slow + Bounce
                        </a>
                    </div>
                    <code class="block bg-muted p-4 rounded text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                        class="underline-base underline-bold underline-from-center underline-duration-slow underline-ease-bounce underline-collapsed hover:underline-expanded"
                    </code>
                </div>

                <div class="border rounded-lg p-6 bg-card">
                    <div class="mb-4">
                        <a class="underline-base underline-[8px] underline-duration-[2s] underline-color-[#10b981] underline-from-right underline-collapsed hover:underline-expanded text-2xl cursor-pointer font-semibold">
                            8px + 2s + Green + Right-to-Left
                        </a>
                    </div>
                    <code class="block bg-muted p-4 rounded text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                        class="underline-base underline-[8px] underline-duration-[2s] underline-color-[#10b981] underline-from-right underline-collapsed hover:underline-expanded"
                    </code>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold mb-6 border-b pb-2">
                Performance
            </h2>
            <div class="space-y-4 text-muted-foreground">
                <p>
                    ✅ <strong class="text-foreground">GPU-accelerated:</strong> Uses <code class="bg-muted px-2 py-1 rounded text-sm">transform: scaleX()</code> for 60fps animations
                </p>
                <p>
                    ✅ <strong class="text-foreground">CSS Variables:</strong> Runtime customization without recompiling
                </p>
                <p>
                    ✅ <strong class="text-foreground">No JavaScript:</strong> Pure CSS with zero runtime overhead
                </p>
                <p>
                    ✅ <strong class="text-foreground">Tree-shakeable:</strong> Only used classes in final CSS
                </p>
            </div>
        </section>
    </div>
</template>
