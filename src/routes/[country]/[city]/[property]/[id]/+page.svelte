<script>
  export let data;
  console.log(data);
</script>

<section class="bg-black text-white bg-cover center shadow-xl pt-24">
  <div style="background-color: rgba(0,0,0,0.7)">
    <div class="items-center w-full frame">
      <div>
        <img class="invert" src="/logos/stripe.svg" alt="" />
        <p class="text-3xl">
          {data.nickname}
        </p>
        <p class="mt-4 text-2xl">
          {data.title}
        </p>
      </div>
    </div>
  </div>
</section>

<div class="frame bg-black py-24">
  <div
    class="picture bg-contain bg-no-repeat bg-left bg-black"
    style="width: 100%; background-image: url({data.picture
      .large}); height: 50vh;"
  />
</div>
<section class="bg-black text-white pb-24">
  <div class="text-2xl frame">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="mb-4">
        <h2 class="text-lg mb-2">Address</h2>
        <p>{data.address.city}, {data.address.country}</p>
      </div>

      <div class="mb-4">
        <h2 class="text-lg mb-2">Accommodates</h2>
        <p>{data.accommodates}</p>
      </div>

      <div class="mb-4">
        <h2 class="text-lg mb-2">Bathrooms</h2>
        <p>{data.bathrooms}</p>
      </div>

      <div class="mb-4">
        <h2 class="text-lg mb-2">Bedrooms</h2>
        <p>{data.bedrooms}</p>
      </div>

      <div class="mb-4">
        <h2 class="text-lg mb-2">Default Check-In Time</h2>
        <p>{data.defaultCheckInTime}</p>
      </div>

      <div class="mb-4">
        <h2 class="text-lg mb-2">Default Check-Out Time</h2>
        <p>{data.defaultCheckOutTime}</p>
      </div>

      <!-- Continue displaying other properties -->
    </div>
  </div>
</section>

<section class="frame bg-bound text-white py-24">
  <p class="text-3xl pb-12">Property Description</p>
  <div class="mb-4 text-lg" style="columns: 2; column-gap: 4rem;">
    <p>{data.publicDescription.summary}</p>
  </div>
</section>

<section class="bg-white text-black frame py-24">
  <div class="mb-4">
    <h2 class="mb-2 text-3xl pb-12">Amenities</h2>
    <ul class="list-none grid grid-cols-3 gap-8 text-xl">
      {#each data.amenities as amenity}
        <li>{amenity}</li>
      {/each}
    </ul>
  </div>
</section>

<section class="grid grid-cols-4">
  {#each data.pictures as picture}
    <div
      class="picture bg-cover bg-center aspect-square"
      style="width: 100%; background-image: url({picture.large})"
    />
  {/each}
</section>
