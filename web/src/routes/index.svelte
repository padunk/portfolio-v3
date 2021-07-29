<script context='module'>
    export function preload({ params, query }) {
        return this.fetch('rss.xml').then(() => {
            console.log('success create route: /rss.xml')
            // return this.fetch('rss.xml')
        }).catch(err => console.log(err));
    }
</script>
<script>
    import MainNav from "../components/MainNav.svelte";
</script>

<svelte:head>
    <title>Abraham Anak Agung: Experienced React Developer</title>
</svelte:head>

<section id="main">
    <MainNav />
</section>

<style>
    #main {
        /* display: grid;
    	place-items: center; */
        min-height: 100vh;
    }
</style>
