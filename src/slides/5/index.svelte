<script>
  import Slide from "../Slide.svelte";
  const showProblems = true;
  const color = "black";
</script>

<Slide title="So about styling...">
  <div class:showProblems>
    <h1>Problems with CSS</h1>
    <ul>
      <li>Specificity</li>
      <li>Source Order</li>
      <li>Naming</li>
      <li>Dead Code</li>
      <li>Append-only Stylesheet</li>
    </ul>
  </div>
  <div class:showProblems={showProblems === false}>
    <h1>CSS things in Svelte</h1>
    <ul>
      <li>Local scope by default</li>
      <li>Global styles possible</li>
      <li>Conditional classes</li>
      <li>Flags unused styles</li>
      <li style="--the-sauce: {color}">Supports CSS variables</li>
    </ul>
  </div>
</Slide>

<style>
  h1 {
    font-style: italic;
  }
  ul {
    font-size: 3em;
    margin: 0;
  }

  li {
    color: var(--the-sauce);
  }

  div {
    display: none;
  }

  .showProblems {
    display: block;
  }

  .notUsed {
    display: hidden;
  }
</style>
