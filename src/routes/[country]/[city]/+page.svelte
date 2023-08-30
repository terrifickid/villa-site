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

<section class=" ">
  <div class="frame pt-40 pb-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 items-end">
      <div>
        <p
          class="text-2xl md:text-5xl tracking-tighter font-medium text-regent-900"
        >
          {decodeURI(data.destination)}
        </p>
      </div>
    </div>
  </div>
</section>

<section class="frame">
  <div>
    <div class="grid grid-cols-2 lg:grid-cols-3 flex items-center gap-8">
      {#each data.results as item}
        <a
          href={"/" +
            item.address.country.replace(/\s+/g, "-").toLowerCase() +
            "/" +
            item.address.city.replace(/\s+/g, "-").toLowerCase() +
            "/" +
            (item.title
              ? item.title.replace(/\s+/g, "-").toLowerCase()
              : "property") +
            "/" +
            item._id}
          class=" relative bg-regent-500 overflow-hidden"
        >
          <div class="overflow-hidden h-full">
            <img
              class="aspect-square object-cover h-full rounded"
              src={item.picture.large}
              alt="The Power of Positive Thinking"
            />
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
