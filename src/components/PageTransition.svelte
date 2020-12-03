<script lang="ts">
    import { cubicInOut } from "svelte/easing";
    import { fade, fly } from "svelte/transition";

    let duration = 250;
    let delay = duration;

    const transitionIn = () => ({
        duration,
        delay,
        easing: cubicInOut,
        css: (t) => `opacity: ${t}`,
    });

    const transitionOut = () => ({
        duration,
        delay: 0,
        easing: cubicInOut,
        css: (t) => `opacity: ${t}`,
    });
</script>

<div in:fly|local="{{ x: 2000, duration: 2000 }}" out:fade|local>
    <slot />
</div>
