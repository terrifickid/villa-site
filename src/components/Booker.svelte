<script>
  export let data;
  import { PUBLIC_API_SERVER } from "$env/static/public";
  import { onMount } from "svelte";
  import axios from "axios";
  import { goto } from "$app/navigation";
  import Spinner from "../components/Spinner.svelte";
  import {
    format,
    addDays,
    eachDayOfInterval,
    isSameDay,
    parseISO,
    startOfMonth,
    endOfMonth,
  } from "date-fns";
  import { fade, slide } from "svelte/transition";

  let guests = 2;
  let isChecking = false;
  let checkInDate = null;
  let checkOutDate = null;
  let availableDates = [];
  let hoveredDate = null;
  let currentMonth = startOfMonth(new Date());
  let errorMessage = "";
  let showCalendar = false;

  // Format price (added back to fix ReferenceError)
  function formatPrice(price, currency) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(price);
  }

  function getNextFriday() {
    const today = new Date();
    const daysUntilFriday = (5 - today.getDay() + 7) % 7 || 7;
    return addDays(today, daysUntilFriday);
  }

  function getNextMondayAfterFriday() {
    return addDays(getNextFriday(), 3);
  }

  function formatDate(date) {
    if (!date) return "Select date";
    return format(date, "MMM dd, yyyy");
  }

  function formatDateForAPI(date) {
    if (!date) return "";
    return format(date, "yyyy-MM-dd");
  }

  async function fetchAvailability() {
    try {
      const response = await axios.get(`${PUBLIC_API_SERVER}/availability`, {
        params: {
          listingId: data._id,
          startDate: formatDateForAPI(startOfMonth(currentMonth)),
          endDate: formatDateForAPI(
            endOfMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
            ),
          ),
        },
      });
      availableDates = response.data.availableDates.map((date) =>
        parseISO(date),
      );
      errorMessage = "";
    } catch (error) {
      console.error("fetchAvailability", error);
      errorMessage = "Failed to load availability.";
    }
  }

  function isDateAvailable(date) {
    return availableDates.some((d) => isSameDay(d, date));
  }

  function isValidRange(start, end) {
    if (!start || !end) return false;
    const days = eachDayOfInterval({ start, end });
    return days.every((day) => isDateAvailable(day));
  }

  function selectDate(date) {
    if (!isDateAvailable(date)) return;
    if (!checkInDate) {
      checkInDate = date;
    } else if (checkInDate && !checkOutDate && date > checkInDate) {
      if (isValidRange(checkInDate, date)) {
        checkOutDate = date;
      } else {
        checkInDate = date;
      }
    } else {
      checkInDate = date;
      checkOutDate = null;
    }
  }

  function changeMonth(delta) {
    currentMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + delta,
      1,
    );
    fetchAvailability();
  }

  async function checkAvailability() {
    if (!checkInDate || !checkOutDate) {
      errorMessage = "Please select check-in and check-out dates.";
      return;
    }
    isChecking = true;
    try {
      const response = await axios.post(`${PUBLIC_API_SERVER}/quote`, {
        guestsCount: guests,
        listingId: data._id,
        checkInDateLocalized: formatDateForAPI(checkInDate),
        checkOutDateLocalized: formatDateForAPI(checkOutDate),
      });
      goto(`/book/${data._id}/${response.data._id}`);
    } catch (error) {
      console.error("checkAvailability", error);
      errorMessage =
        error.response?.data?.error?.error?.message ||
        "Failed to check availability.";
      isChecking = false;
    }
  }

  onMount(async () => {
    let urlParams = new URLSearchParams(window.location.search);
    const checkInParam = urlParams.get("checkIn");
    const checkOutParam = urlParams.get("checkOut");
    if (checkInParam) checkInDate = parseISO(checkInParam);
    if (checkOutParam) checkOutDate = parseISO(checkOutParam);
    if (!checkInDate) checkInDate = getNextFriday();
    if (!checkOutDate) checkOutDate = getNextMondayAfterFriday();
    await fetchAvailability();
  });

  function getCalendarDays(month) {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    const days = eachDayOfInterval({ start, end });
    const firstDayOfWeek = start.getDay();
    return Array(firstDayOfWeek).fill(null).concat(days);
  }
</script>

<div
  class="bg-white border-t border-black fixed lg:hidden bottom-0 left-0 right-0 py-4 grid grid-cols-2 items-center z-50"
>
  <div>
    <p>{data.nickname}</p>
    <span class="font-medium"
      >{formatPrice(data.prices.basePrice, data.prices.currency)}</span
    > / night
  </div>
  <div class="text-right">
    <button
      on:click={() => (showCalendar = !showCalendar)}
      class="text-base px-12 py-4 bg-black text-white rounded-full hover:bg-gray-800 ring-1 ring-white"
      aria-expanded={showCalendar}
      aria-controls="mobile-calendar"
    >
      {checkInDate ? formatDate(checkInDate) : "Check-in"} - {checkOutDate
        ? formatDate(checkOutDate)
        : "Check-out"}
    </button>
    {#if showCalendar}
      <div
        id="mobile-calendar"
        class="absolute bottom-16 left-0 right-0 bg-white p-4 shadow-xl rounded-t-xl z-50"
        transition:slide={{ duration: 300 }}
      >
        <div class="flex justify-between mb-4">
          <button
            on:click={() => changeMonth(-1)}
            class="text-gray-600 hover:text-black">← Prev</button
          >
          <span class="font-medium">{format(currentMonth, "MMMM yyyy")}</span>
          <button
            on:click={() => changeMonth(1)}
            class="text-gray-600 hover:text-black">Next →</button
          >
        </div>
        <div class="grid grid-cols-7 gap-1 text-center">
          {#each ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as day}
            <div class="font-medium text-xs text-gray-500">{day}</div>
          {/each}
          {#each getCalendarDays(currentMonth) as day}
            {#if day}
              <button
                class="relative p-2 text-sm rounded-full transition-colors
                  {isDateAvailable(day)
                  ? 'bg-green-100 hover:bg-green-200'
                  : 'bg-gray-200 cursor-not-allowed'}
                  {checkInDate && isSameDay(day, checkInDate)
                  ? 'bg-blue-500 text-white'
                  : ''}
                  {checkOutDate && isSameDay(day, checkOutDate)
                  ? 'bg-blue-500 text-white'
                  : ''}
                  {checkInDate &&
                hoveredDate &&
                day > checkInDate &&
                day <= hoveredDate &&
                isValidRange(checkInDate, day)
                  ? 'bg-blue-100'
                  : ''}"
                disabled={!isDateAvailable(day)}
                on:click={() => selectDate(day)}
                on:mouseover={() => {
                  if (checkInDate && !checkOutDate) hoveredDate = day;
                }}
                on:mouseout={() => (hoveredDate = null)}
                aria-label="{formatDate(day)} {isDateAvailable(day)
                  ? 'available'
                  : 'unavailable'}"
              >
                {day.getDate()}
                {#if checkInDate && checkOutDate && (isSameDay(day, checkInDate) || isSameDay(day, checkOutDate))}
                  <span
                    class="absolute -top-1 -right-1 text-xs text-white bg-blue-600 rounded-full px-1"
                  >
                    {isSameDay(day, checkInDate) ? "In" : "Out"}
                  </span>
                {/if}
              </button>
            {:else}
              <div></div>
            {/if}
          {/each}
        </div>
        {#if errorMessage}
          <p class="text-red-500 text-sm mt-2">{errorMessage}</p>
        {/if}
        <div class="mt-4 flex justify-end">
          <button
            on:click={() => (showCalendar = false)}
            class="text-sm text-gray-500 hover:text-black"
          >
            Done
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<div class="hidden lg:block">
  <div class="border border-black p-6 rounded-xl shadow sticky top-32">
    <p>{data.nickname}</p>
    <p class="font-medium pb-4">
      {formatPrice(data.prices.basePrice, data.prices.currency)} / night
    </p>
    {#if errorMessage}
      <p class="text-red-500 text-sm mb-4">{errorMessage}</p>
    {/if}
    <div class="mb-4">
      <button
        on:click={() => (showCalendar = !showCalendar)}
        class="text-sm px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200"
        aria-expanded={showCalendar}
        aria-controls="desktop-calendar"
      >
        Check-in: {formatDate(checkInDate)} - Check-out: {formatDate(
          checkOutDate,
        )}
      </button>
    </div>
    {#if showCalendar}
      <div
        id="desktop-calendar"
        class="grid grid-cols-2 gap-4 mb-4"
        transition:fade={{ duration: 200 }}
      >
        {#each [0, 1] as offset}
          <div class="border rounded-lg p-4">
            <div class="flex justify-between mb-2">
              <button
                on:click={() => changeMonth(offset - 1)}
                class="text-gray-600 hover:text-black">←</button
              >
              <span class="font-medium"
                >{format(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() + offset,
                    1,
                  ),
                  "MMMM yyyy",
                )}</span
              >
              <button
                on:click={() => changeMonth(offset + 1)}
                class="text-gray-600 hover:text-black">→</button
              >
            </div>
            <div class="grid grid-cols-7 gap-1 text-center">
              {#each ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as day}
                <div class="font-medium text-xs text-gray-500">{day}</div>
              {/each}
              {#each getCalendarDays(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1)) as day}
                {#if day}
                  <button
                    class="relative p-2 text-sm rounded-full transition-colors
                      {isDateAvailable(day)
                      ? 'bg-green-100 hover:bg-green-200'
                      : 'bg-gray-200 cursor-not-allowed'}
                      {checkInDate && isSameDay(day, checkInDate)
                      ? 'bg-blue-500 text-white'
                      : ''}
                      {checkOutDate && isSameDay(day, checkOutDate)
                      ? 'bg-blue-500 text-white'
                      : ''}
                      {checkInDate &&
                    hoveredDate &&
                    day > checkInDate &&
                    day <= hoveredDate &&
                    isValidRange(checkInDate, day)
                      ? 'bg-blue-100'
                      : ''}"
                    disabled={!isDateAvailable(day)}
                    on:click={() => selectDate(day)}
                    on:mouseover={() => {
                      if (checkInDate && !checkOutDate) hoveredDate = day;
                    }}
                    on:mouseout={() => (hoveredDate = null)}
                    aria-label="{formatDate(day)} {isDateAvailable(day)
                      ? 'available'
                      : 'unavailable'}"
                  >
                    {day.getDate()}
                    {#if checkInDate && checkOutDate && (isSameDay(day, checkInDate) || isSameDay(day, checkOutDate))}
                      <span
                        class="absolute -top-1 -right-1 text-xs text-white bg-blue-600 rounded-full px-1"
                      >
                        {isSameDay(day, checkInDate) ? "In" : "Out"}
                      </span>
                    {/if}
                  </button>
                {:else}
                  <div></div>
                {/if}
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {/if}
    <p class="mt-4"><label class="font-medium text-sm">Guests</label></p>
    <div class="flex items-center grid grid-cols-5">
      <div class="mr-5 col-span-2">{guests}</div>
      <button
        class="mr-2"
        on:click={() => {
          if (guests < data.accommodates) guests++;
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <button
        on:click={() => {
          if (guests > 1) guests--;
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
            d="M19.5 12h-15"
          />
        </svg>
      </button>
    </div>
    <hr class="mt-6 mb-4" />
    <button
      on:click={checkAvailability}
      class="text-lg w-full px-12 py-4 bg-black text-white rounded-full hover:bg-gray-800 ring-1 ring-white"
      disabled={isChecking}
    >
      {#if isChecking}
        <Spinner />
      {:else}
        Reserve
      {/if}
    </button>
  </div>
</div>

<style>
  button {
    transition:
      background-color 0.2s ease,
      transform 0.1s ease;
  }
  button:hover:not(:disabled) {
    transform: scale(1.1);
  }
  #mobile-calendar {
    max-height: 80vh;
    overflow-y: auto;
  }
</style>
