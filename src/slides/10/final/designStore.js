import { readable } from "svelte/store";

let designArray = [
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
  ]

let designs = readable(designArray, set => {
    set(designArray)
    const items = [{}, ...designArray]
    const designTimeout = setTimeout(() => set(items), 2000);

    return () => { 
      clearTimeout(designTimeout)
    }
  });

export default designs;