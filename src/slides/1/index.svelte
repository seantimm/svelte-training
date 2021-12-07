<script>
  import Slide from "../Slide.svelte";
</script>

<Slide title="Why Svelte?">
  <div class="container">
    <iframe
      src="https://www.youtube.com/embed/AdNJ3fydeao"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
    />
  </div>
</Slide>

<style>
  .container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
