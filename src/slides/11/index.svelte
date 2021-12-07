<script>
  import Slide from "../Slide.svelte";
</script>

<Slide title="And more...">
  <ul>
    <li>
      Svelte Tutorial: <a href="https://svelte.dev/tutorial/basics"
        >https://svelte.dev/tutorial/basics</a
      >
    </li>
    <li>
      Svelte Docs: <a href="https://svelte.dev/docs">https://svelte.dev/docs</a>
    </li>
    <li>
      Presentation Code: <a href="https://github.com/seantimm/svelte-training"
        >https://github.com/seantimm/svelte-training</a
      >
    </li>
    <li>Related things: SvelteKit, Routify, Vite, PostCSS, Tailwind</li>
  </ul>
</Slide>

<style>
  li {
    font-size: 2em;
    margin: 0.5em auto;
  }

  li a {
    display: block;
  }
</style>
