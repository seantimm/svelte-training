<script>
</script>

<div class={$$props.class} role="article">
  <slot name="header">Missing Header</slot>
  <div class="content"><slot>Missing Content</slot></div>
</div>

<style>
  .content {
    display: none;
  }

  .preamble {
    clear: right;
    padding: 0px 10px 0 10px;
  }
</style>
