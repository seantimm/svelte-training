<script>
  let isExpanded = false;
  let isHovering = false;
</script>

<div class={$$props.class} role="article">
  <span
    on:mouseenter={() => {
      isHovering = true;
    }}
    on:mouseleave={() => {
      isHovering = false;
    }}
    on:click|once={() => {
      isExpanded = true;
    }}><slot name="header" {isHovering}>Missing Header</slot></span
  >
  <div class="content" class:isExpanded><slot>Missing Content</slot></div>
</div>

<style>
  .content {
    display: none;
  }

  .content.isExpanded {
    display: block;
  }

  .preamble {
    clear: right;
    padding: 0px 10px 0 10px;
  }
</style>
