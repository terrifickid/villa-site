<script>
  let open = false;
</script>

<section
  class="fixed bg-black text-white overflow-hidden w-screen z-50 border-b border-black/5"
>
  <div class="relative">
    <div
      class="relative flex flex-col w-full p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-16"
    >
      <div
        class="flex flex-row items-center justify-between text-regent-900 text-sm lg:justify-start"
      >
        <div class="text-xl inline-flex items-center">
          <span><img src="/vb.png" class="h-6 md:h-7" /></span>
        </div>

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
      <nav
        class:flex={open}
        class:hidden={!open}
        class="flex-col items-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row"
      >
        <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
          <a
            href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/e2d91f04-5944-495e-a679-b3df5c08b196"
            class="inline-flex items-center justify-center px-4 py-2 text-sm text-regent-900 bg-regent-300 rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white/5 active:bg-fuchsia-50 active:text-[#0c1824] focus-visible:outline-fuchsia-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  </div>
</section>
