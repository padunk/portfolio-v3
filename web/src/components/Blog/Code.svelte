<script lang="ts">
    import { afterUpdate, tick } from "svelte";
    import Prism from "../../utils/prism";

    export let code: string;
    export let language: string;

    language === 'sh' ? 'shell': language;

    afterUpdate(async () => {
        await tick();
        Prism.highlightAll();
    });
</script>

<pre data-language="{language}" class="language-{language}">
    <code
        class="language-{language}"
    >
        {code}
    </code>
</pre>

<style>
    pre {
        position: relative;
    }

    [data-language]:after {
        content: attr(data-language);
        top: 0;
        position: absolute;
        right: 0;
        background: var(--tangerine);
        color: #2d2d2d;
        padding: 2px;
        border-radius: 2px;
        display: none;
    }

    @media only screen and (min-width: 450px) {
        [data-language]:after {
            display: block;
        }
    }
</style>
