<script>
    export let href;
    export let text;
</script>

<a
    href="{href}"
    class="link-gradient"
    target="_blank"
    rel="noopener noreferrer"
>
    {text}
</a>

<style>
    .link-gradient:link,
    .link-gradient:visited {
        color: var(--primary-light);
        transition: all 200ms ease-in-out;
        font-weight: 600;
    }

    .link-gradient:hover,
    .link-gradient:active {
        background: linear-gradient(
            90deg,
            var(--tertiary),
            var(--secondary-bright)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        background-clip: text;
        box-decoration-break: clone;
        text-shadow: none;
    }
</style>