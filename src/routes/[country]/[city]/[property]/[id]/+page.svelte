<script>
  export let data;
  console.log(data);
</script>

<section class="bg-black text-white bg-cover center shadow-xl pt-40 pb-24">
  <div>
    <div class="items-center w-full frame">
      <div>
        <img class="invert" src="/logos/stripe.svg" alt="" />
        <p class="text-3xl font-medium">
          {data.nickname}
        </p>
        <p class="mt-4 text-3xl">
          {data.title}
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="bg-black">
    <img class="w-full" src={data.picture.large} />
  </div>
</section>

<section class="bg-white text-black cframe">
  <div class=" text-3xl">
    <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
      <div class="mb-4">
        <h2 class=" mb-2">Accommodates</h2>
        <p>{data.accommodates}</p>
      </div>

      <div class="mb-4">
        <h2 class="mb-2">Bathrooms</h2>
        <p>{data.bathrooms}</p>
      </div>

      <div class="mb-4">
        <h2 class=" mb-2">Bedrooms</h2>
        <p>{data.bedrooms}</p>
      </div>

      <!-- Continue displaying other properties -->
    </div>
  </div>
</section>

<div class="grid grid-cols-1 frame">
  <section class=" bg-white text-black">
    <div>
      <div class="pb-24 text-lg">
        <p>{data.publicDescription.summary}</p>
      </div>
    </div>
  </section>

  <section class=" col-span-2 grid grid-cols-4 gap-4">
    {#each data.pictures as picture}
      <div
        class="picture bg-cover bg-center aspect-square"
        style="width: 100%; background-image: url({picture.large})"
      />
    {/each}
  </section>
</div>

<section class="bg-white text-black">
  <div class="mb-4 cframe">
    <h2 class="mb-2 text-3xl pb-12">Amenities</h2>
    <ul class="list-none grid grid-cols-2 gap-8 text-3xl">
      {#each data.amenities as amenity}
        <li>{amenity}</li>
      {/each}
    </ul>
  </div>
</section>
