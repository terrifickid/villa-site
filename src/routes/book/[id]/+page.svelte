<script>
  export let data;
  import BookingSummary from "$components/BookingSummary.svelte";
  import { onMount } from "svelte";
  let stripeReady = false;
  let mounted = false;

  onMount(() => {
    var stripe = Stripe("pk_live_ifI6zGqmmINgBCUQmIKeZqIT");
    var elements = stripe.elements({
      mode: "payment",
      currency: "usd",
      amount: 1099,
    });
    var expressCheckoutElement = elements.create("expressCheckout");
    expressCheckoutElement.mount("#villa-form");
  });
</script>

<svelte:head>
  <script src="https://js.stripe.com/v3/"></script>
</svelte:head>

<section class=" frame pt-32 md:pt-40 pb-6">
  <div>
    <h1 class="v_heading flex items-center">
      <button
        on:click={() => {
          window.history.back();
        }}
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div class="pl-3">Confirm & Pay</div>
    </h1>
    <div class="grid grid-cols-2">
      <div>
        Payment FOrm
        <div id="villa-form" />
      </div>
      <BookingSummary {data} />
    </div>
  </div>
</section>
