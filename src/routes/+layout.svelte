<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  //import Footer from "../components/Footer.svelte";
  import Newsletter from "../components/Newsletter.svelte";
  import About from "../components/About.svelte";
</script>

<div class="font-general">
  <Header />

  <slot />
  <About />
  <Newsletter />
</div>
