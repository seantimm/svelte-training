<script>
  import { blur } from "svelte/transition";
  export let title;
</script>

<div class="slide" in:blur>
  <h1>{title}</h1>

  <slot />
</div>

<style>
  .slide {
    margin: auto;
    width: 80%;
    height: 100%;
  }

  h1 {
    font-size: 3em;
    margin: 1em auto;
    text-align: center;
    margin-bottom: 1em;
  }
</style>
