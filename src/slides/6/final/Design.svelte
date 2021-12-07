<script>
  export let title = "* Missing Title *";
  export let author;
  export let designLink;
  export let authorLink;

  console.table($$props);
</script>

<a href={designLink} class="design-name" {...$$restProps}>{@html title}</a>
by
<a href={authorLink} class="designer-name">{author}</a>
