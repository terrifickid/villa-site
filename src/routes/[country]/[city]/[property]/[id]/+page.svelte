<script>
  export let data;
  console.log(data);
  function formatPrice(price, currency) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(price);
  }

  function getMainImage() {
    var p = "/p.svg";
    if (!data?.pictures.length) return p;
    if (data?.pictures[0]?.original) p = data?.pictures[0]?.original;
    if (data?.picture?.large) p = data?.picture?.large;
    return p;
  }
</script>

<section class="bg-cover center pt-32 md:pt-40 pb-6">
  <div>
    <div class="items-center w-full frame">
      <div class="grid grid-cols-2 flex items-center">
        <div>
          <p class="v_heading">
            {data.nickname}
          </p>
          <p class="text-2xl lg:text-3xl">
            {formatPrice(data.prices.basePrice, data.prices.currency)}
            Per Night
          </p>
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            class="p-5 flex items-center text-lg md:p-6 md:px-8 md:text-2xl text-center text-white duration-200 bg-black font-medium rounded-full text-base focus:outline-none hover:bg-white hover:ring-bound hover:ring-1 hover:text-black"
            ><div style="position:relative" />

            Make a Booking
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<p class="mb-1" />

<section class="bg-white text-black frame">
  <div class="text-2xl lg:text-3xl">
    <div class="grid grid-cols-3 lg:grid-cols-3 gap-4">
      <div class="mb-4">
        <p>Guests<br />{data.accommodates}</p>
      </div>

      <div>
        <p>Beds<br />{data.bedrooms}</p>
      </div>

      <div>
        <p>Baths<br />{data.bathrooms}</p>
      </div>

      <!-- Continue displaying other properties -->
    </div>
  </div>
</section>

<section class="frame my-12">
  <div>
    <img class="w-full rounded" src={getMainImage()} />
  </div>
</section>

{#if data.publicDescription.summary}
  <section class=" frame bg-white text-black">
    <div>
      <div class="pb-24 text-lg pt-4">
        <p>{data.publicDescription.summary}</p>
      </div>
    </div>
  </section>
{/if}

<section
  class="col-span-2 frame grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
>
  {#each data.pictures as picture}
    <div
      class="picture bg-cover bg-center aspect-square rounded"
      style="width: 100%; background-image: url({picture.original})"
    />
  {/each}
</section>

{#if data.amenities.length}
  <section class="bg-white text-black">
    <div class="mb-4 frame">
      <ul class="list-none grid md:grid-cols-2 gap-8 text-2xl mb-24">
        {#each data.amenities as amenity}
          <li>{amenity}</li>
        {/each}
      </ul>
    </div>
  </section>
{/if}
