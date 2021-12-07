<script>
  import Design from "./Design.svelte";
  let designs = [
    {
      title: "<em>Mid-Century</em> Modern",
      author: "Andrew Lohman",
      designLink: "/221/",
      authorLink: "http://andrewlohman.com/",
    },
    {
      title: "Garments",
      author: "Dan Mall",
      designLink: "/220/",
      authorLink: "http://danielmall.com/",
      "data-foo": false,
    },
    {
      title: "Steel",
      author: "Steffen Knoeller",
      designLink: "/219/",
      authorLink: "http://steffen-knoeller.de",
    },
    {
      title: "Apothecary",
      author: "Trent Walton",
      designLink: "/218/",
      authorLink: "http://trentwalton.com",
    },
    {
      title: "Screen Filler",
      author: "Elliot Jay Stocks",
      designLink: "/217/",
      authorLink: "http://elliotjaystocks.com/",
    },
    {
      title: "Fountain Kiss",
      author: "Jeremy Carlson",
      designLink: "/216/",
      authorLink: "http://jeremycarlson.com",
    },
    {
      title: "A Robot Named Jimmy",
      author: "meltmedia",
      designLink: "/215/",
      authorLink: "http://meltmedia.com/",
    },
    {
      title: "Verde Moderna",
      author: "Dave Shea",
      designLink: "/214/",
      authorLink: "http://www.mezzoblue.com/",
    },
  ];

  $: designCount = designs.length;

  setTimeout(() => (designs = [{}, ...designs]), 2000);
</script>

<aside class="sidebar" role="complementary">
  <div class="wrapper">
    <div class="design-selection" id="design-selection">
      Designs: {designCount}
      <h3 class="select">Select a Design:</h3>
      <nav role="navigation">
        <ul>
          {#each designs as design (design.title)}
            <li>
              <Design {...design} />
            </li>
          {/each}
        </ul>
      </nav>
    </div>

    <div class="design-archives" id="design-archives">
      <h3 class="archives">Archives:</h3>
      <nav role="navigation">
        <ul>
          <li class="next">
            <a href="/214/page1">
              Next Designs <span class="indicator">&rsaquo;</span>
            </a>
          </li>
          <li class="viewall">
            <a
              href="http://www.mezzoblue.com/zengarden/alldesigns/"
              title="View every submission to the Zen Garden."
            >
              View All Designs
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="zen-resources" id="zen-resources">
      <h3 class="resources">Resources:</h3>
      <ul>
        <li class="view-css">
          <a
            href="style.css"
            title="View the source CSS file of the currently-viewed design."
          >
            View This Design&#8217;s <abbr title="Cascading Style Sheets"
              >CSS</abbr
            >
          </a>
        </li>
        <li class="css-resources">
          <a
            href="http://www.mezzoblue.com/zengarden/resources/"
            title="Links to great sites with information on using CSS."
          >
            <abbr title="Cascading Style Sheets">CSS</abbr> Resources
          </a>
        </li>
        <li class="zen-faq">
          <a
            href="http://www.mezzoblue.com/zengarden/faq/"
            title="A list of Frequently Asked Questions about the Zen Garden."
          >
            <abbr title="Frequently Asked Questions">FAQ</abbr>
          </a>
        </li>
        <li class="zen-submit">
          <a
            href="http://www.mezzoblue.com/zengarden/submit/"
            title="Send in your own CSS file."
          >
            Submit a Design
          </a>
        </li>
        <li class="zen-translations">
          <a
            href="http://www.mezzoblue.com/zengarden/translations/"
            title="View translated versions of this page."
          >
            Translations
          </a>
        </li>
      </ul>
    </div>
  </div>
</aside>

<style>
  .sidebar {
    margin-left: 600px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .sidebar .wrapper {
    font: 10px verdana, sans-serif;
    background: transparent url(http://csszengarden.com/001/paper-bg.jpg) top
      left repeat-y;
    padding: 10px;
    margin-top: 150px;
    width: 130px;
  }
  .sidebar h3.select {
    background: transparent url(http://csszengarden.com/001/h3.gif) no-repeat
      top left;
    margin: 10px 0 5px 0;
    width: 97px;
    height: 16px;

    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  .sidebar h3.archives {
    background: transparent url(http://csszengarden.com/001/h5.gif) no-repeat
      top left;
    margin: 25px 0 5px 0;
    width: 57px;
    height: 14px;

    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  .sidebar h3.resources {
    background: transparent url(http://csszengarden.com/001/h6.gif) no-repeat
      top left;
    margin: 25px 0 5px 0;
    width: 63px;
    height: 10px;

    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  .sidebar ul {
    margin: 0;
    padding: 0;
  }
  .sidebar li {
    line-height: 1.3em;
    background: transparent url(http://csszengarden.com/001/cr1.gif) no-repeat
      top center;
    display: block;
    padding-top: 5px;
    margin-bottom: 5px;
    list-style-type: none;
  }
  .sidebar li :global(a:link) {
    color: #988f5e;
  }
  .sidebar li :global(a:visited) {
    color: #b3ae94;
  }
</style>
