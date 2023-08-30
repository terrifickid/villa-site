<script>
  let open = false;
</script>

<section
  class="fixed bg-black text-white overflow-hidden w-screen z-50 py-7 shadow bg-contain"
>
  <div class="mx-auto flex items-center grid grid-cols-2 frame">
    <div>
      <span><a href="/"><img src="/vb.png" class="h-6 md:h-7" /></a></span>
    </div>
    <div class="text-right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 inline"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
    <div>
      <button
        on:click={() => (open = !open)}
        class="hidden inline-flex items-center justify-center p-2 text-regent-900 hover:text-regent-900 focus:outline-none focus:text-regent-900 lg:hidden"
      >
        <svg
          class="w-6 h-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            class:hidden={open}
            class:inline-flex={!open}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            class:hidden={!open}
            class:inline-flex={open}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</section>
