<script context="module">
  import * as slides from "./slides";

  // Doing this code inside of the "module" context ensures it only runs
  // once no matter how many times this component is mounted / dismounted.
  let activeSlideNumber = JSON.parse(
    localStorage.getItem("activeSlideNumber") || "0"
  );
  let finalSlideNumber = Object.keys(slides).length - 1;

  // Example custom store implemented using store contract -
  // NOTE: usually, you would just use readable / writable / derived.
  const subscriptions = [];
  const currentSlide = {
    subscribe: (subscription) => {
      subscriptions.push(subscription);
      subscription(activeSlideNumber);
      return () => subscriptions.remove(subscription);
    },
    set: (value) => {
      localStorage.setItem("activeSlideNumber", JSON.stringify(value));
      activeSlideNumber = value;
      subscriptions.forEach((subscription) => subscription(activeSlideNumber));
    },
  };

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && activeSlideNumber > 0) {
      currentSlide.set(activeSlideNumber - 1);
    } else if (
      event.key === "ArrowRight" &&
      activeSlideNumber < finalSlideNumber
    ) {
      currentSlide.set(activeSlideNumber + 1);
    }
  });
</script>

<script>
  $: Slide = slides[`slide${$currentSlide}`] || Slide;
</script>

<div>
  <svelte:component this={Slide} />
  <span class="footer">{$currentSlide}</span>
</div>

<style>
  .footer {
    position: absolute;
    top: 1em;
    right: 1em;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
</style>
