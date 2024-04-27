<script>
  import { PUBLIC_BARBADOS_MODE } from "$env/static/public";
  import Hero from "../components/Hero.svelte";
  import About from "../components/About.svelte";
  import Destinations from "../components/Destinations.svelte";
  export let data;
</script>

<Hero {data} />

{#if PUBLIC_BARBADOS_MODE !== "true"}
  <Destinations {data} />
{/if}
<About />
