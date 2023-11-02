<script>
  export let reservation;

  import Spinner from "$components/Spinner.svelte";
  import { loadStripe } from "@stripe/stripe-js";
  import { onMount } from "svelte";

  let loading = false;
  let stripe = null;
  let cardElement = null;
  let elements = null;

  onMount(async () => {
    stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
    elements = stripe.elements();
    cardElement = elements.create("card");
    cardElement.mount("#card-element");
  });

  async function handleSubmit() {
    event.preventDefault();
    try {
      loading = true;
      let card = await stripe.createToken(cardElement);
      console.log(card);
    } catch (err) {
      console.log(err);
    }
  }
</script>

<form on:submit={handleSubmit}>
  <div class="mb-4">
    <label for="location" class="flex text-sm leading-6"> &nbsp;Name</label>
    <input
      required
      type="Text"
      name="location"
      class="mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
    />
  </div>
  <div class="grid grid-cols-2 gap-6 mb-8">
    <div>
      <label for="location" class="flex text-sm leading-6"> &nbsp;Email</label>
      <input
        required
        type="Text"
        name="location"
        class=" mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
      />
    </div>
    <div>
      <label for="location" class="flex text-sm leading-6"> &nbsp;Phone</label>
      <input
        required
        type="Text"
        name="location"
        class="mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  <hr class="mb-8" />
  <div>
    <p class="text-xl font-medium">Pay with Credit Card</p>
    <div class="rounded-md bg-gray-100 p-3 my-4">
      <div id="card-element" />
    </div>
    <button
      type="submit"
      class="my-5 inline-flex w-full cursor-pointer items-center justify-center w-auto lg:px-12 px-6 py-4 text-center duration-200 bg-black text-white rounded-full focus:outline-none hover:bg-black ring-white hover:ring-bound ring-1 hover:text-white hover:bg-black"
    >
      {#if loading}
        <Spinner />
      {:else}
        Continue
      {/if}
    </button>
  </div>
</form>
