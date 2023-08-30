<script>
  export let data;
  console.log(data);
</script>

<section class="  bg-cover center pt-40 pb-14">
  <div>
    <div class="items-center w-full frame">
      <div>
        <p
          class="text-2xl md:text-5xl tracking-tighter font-medium text-regent-900"
        >
          {data.nickname}
        </p>
      </div>
    </div>
  </div>
</section>

<section class="frame">
  <div>
    <img class="w-full rounded" src={data.picture.large} />
  </div>
</section>

<section class="bg-white text-black frame">
  <div class="pt-14 pb-12 text-3xl">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="mb-4">
        <h2 class=" mb-2">Accommodates</h2>
        <p>{data.accommodates}</p>
      </div>

      <div class="mb-4">
        <h2 class=" mb-2">Bedrooms</h2>
        <p>{data.bedrooms}</p>
      </div>

      <div class="mb-4">
        <h2 class="mb-2">Bathrooms</h2>
        <p>{data.bathrooms}</p>
      </div>

      <!-- Continue displaying other properties -->
    </div>
  </div>
</section>

<section class=" frame bg-white text-black">
  <div>
    <div class="pb-24 text-lg pt-4">
      <p>{data.publicDescription.summary}</p>
    </div>
  </div>
</section>

<section
  class="col-span-2 frame grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
>
  {#each data.pictures as picture}
    <div
      class="picture bg-cover bg-center aspect-square rounded"
      style="width: 100%; background-image: url({picture.large})"
    />
  {/each}
</section>

<section class="bg-white text-black">
  <div class="mb-4 frame">
    <h2 class="mb-2 text-3xl pb-12 py-12">Amenities</h2>
    <ul class="list-none grid md:grid-cols-2 gap-8 text-3xl mb-24">
      {#each data.amenities as amenity}
        <li>{amenity}</li>
      {/each}
    </ul>
  </div>
</section>
