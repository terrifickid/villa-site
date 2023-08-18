<script>
  export let data;
  console.log(data);
</script>

<section
  class="bg-black text-white bg-cover center"
  style="background-image: url({data.picture.thumbnail});"
>
  <div style="background-color: rgba(0,0,0,0.7)">
    <div class="items-center w-full frame py-32">
      <div>
        <img class="invert" src="/logos/stripe.svg" alt="" />
        <p class="mt-16 text-2xl font-normal lg:text-5xl text-regent-900">
          {data.nickname}
        </p>
        <p class="mt-4 text-4xl text-regent-900/80">
          {data.title}
        </p>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="frame py-24">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-24">
      <div class="col-span-3">
        <main class="container mx-auto">
          <div class="mb-4 text-2xl">
            <p>{data.publicDescription.summary}</p>
          </div>

          <div class="mb-4">
            <h2 class="text-lg mb-2">Address</h2>
            <p>{data.address.city}, {data.address.country}</p>
          </div>

          <div class="mb-4">
            <h2 class="text-lg mb-2">Accommodates</h2>
            <p>{data.accommodates}</p>
          </div>

          <div class="mb-4">
            <h2 class="text-lg mb-2">Amenities</h2>
            <ul class="list-disc pl-6">
              {#each data.amenities as amenity}
                <li>{amenity}</li>
              {/each}
            </ul>
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

          <div class="mb-4">
            <h2 class="text-lg mb-2">Nickname</h2>
            <p>{data.nickname}</p>
          </div>

          <div class="mb-4">
            <h2 class="text-lg mb-2">Picture</h2>
            <img src={data.picture.thumbnail} alt="Property Thumbnail" />
          </div>

          <!-- Continue displaying other properties -->
        </main>
      </div>
      <div class="col-span-2">
        <nav
          class=" lg:sticker lg:sticky top-28 bg-black md:p-8 p-4 md:rounded-lg w-full"
          aria-label="Sidebar"
        >
          <div>
            <p class="text-2xl text-bound mb-10">Make a booking</p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="">
              <label for="location" class="flex text-white leading-6">
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>&nbsp;Check In</label
              >
              <select
                id="location"
                name="location"
                class=" mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
              >
                <option>01/02/2022</option>
              </select>
            </div>
            <div class="mb-0">
              <label for="location" class="flex text-white leading-6">
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>&nbsp;Check Out</label
              >
              <select
                id="location"
                name="location"
                class=" mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
              >
                <option>01/02/2022</option>
              </select>
            </div>
            <div class="col-span-2 mt-3 mb-12">
              <label for="location" class="flex text-white leading-6"
                ><svg
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                &nbsp;Guests</label
              >
              <select
                id="location"
                name="location"
                class="bg-black text-bound mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-bound focus:ring-2 focus:ring-bound sm:text-sm sm:leading-6"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
          </div>
          <div>
            <a
              href="/search"
              type="button"
              class="w-full inline-flex items-center justify-center w-auto lg:px-12 px-6 py-4 text-center text-bound duration-200 bg-black rounded-full focus:outline-none ring ring-bound hover:bg-bound hover:ring-bound hover:ring-1 hover:text-black"
            >
              Book Now
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</section>
