<script>
    import { SOCMED_ACCOUNTS } from "../utils/constants";
</script>

<div class="social-media">
    <ul class="social-media__lists">
        {#each SOCMED_ACCOUNTS as account}
            <li>
                <a
                    href="{account.href}"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="social-media__link"
                >
                    <svelte:component
                        this="{account.component}"
                        size="{account.size}"
                        className="{account.className}"
                    />
                </a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .social-media {
        padding-bottom: 4em;
    }

    .social-media__lists {
        display: flex;
        column-gap: 16px;
        list-style-type: none;
        padding: 0;
        justify-content: center;
    }

    .social-media__link {
        color: var(--primary-light);
    }
</style>