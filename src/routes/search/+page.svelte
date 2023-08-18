<script>
  export let data;
  console.log(data);

  function formatPrice(price, currency) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(price);
  }
</script>

<section class="bg-black text-white">
  <div class="relative w-full mx-auto max-w-7xl items-center py-10 lg:px-16">
    <div>
      <div class="text-left" />
    </div>
  </div>
</section>

<section>
  <div
    class="items-center w-full px-8 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl"
  >
    <p class="mb-4 text-xl">{data.results.length} Listings</p>
    <div
      class="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-y-12 gap-x-6"
    >
      {#each data.results as item}
        <a
          href={"/" +
            item.address.country.replace(/\s+/g, "-").toLowerCase() +
            "/" +
            item.address.city.replace(/\s+/g, "-").toLowerCase() +
            "/" +
            item.title.replace(/\s+/g, "-").toLowerCase() +
            "/" +
            item._id}
          title="The Power of Positive Thinking"
          class="group"
        >
          <article class="flex-1 h-full flex flex-col">
            <div class="block w-full lg:col-span-2">
              <img
                class="aspect-[384/246] object-cover bg-center h-full rounded"
                src={item.picture.thumbnail}
                alt="The Power of Positive Thinking"
              />
            </div>
            <div
              class="flex flex-col items-start justify-between flex-1 w-full mt-4 px-2"
            >
              <div class="w-full flex flex-col items-start justify-center">
                <p class="text-regent-900 font-medium lg:text-xl text-lg">
                  {item.nickname}<br />
                </p>
                <div class="grid grid-cols-2 w-full">
                  <div>
                    <p class="mb-1">
                      {formatPrice(item.prices.basePrice, item.prices.currency)}
                      Per Night
                    </p>
                    <p class="text-sm mt-2">
                      {item.address.city}, {item.address.country}<br />
                    </p>
                  </div>
                  <p class="text-right">
                    {item.bedrooms} Beds<br />
                    {item.bathrooms} Bath
                  </p>
                </div>
              </div>
            </div>
          </article>
        </a>
      {/each}
    </div>
  </div>
</section>
