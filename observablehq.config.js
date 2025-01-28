// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Geospatial Humanities",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {name: "Syllabus", path: "syllabus"},
    {name: "Schedule", path: "schedule"},
    {name: "Coursework", path: "coursework"},
    // {name: "Curations", path: "curations"},
    {name: "Final Project", path: "final"},
    {name: "Canvas", path: "https://canvas.tufts.edu/courses/63026"}
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  style: "assets/custom-style.css",

  // Some additional configuration options and their defaults:
  // theme: "slate", // try "light", "dark", "slate", etc.
  // header: "CLS 125: Introduction to Geospatial Humanities", // what to show in the header (HTML)
  footer: "Built with <a href='https://observablehq.com/framework/getting-started'>Observable Framework</a>. Some inspiration drawn from <a href='https://mptc.io/'>Kieran Healy</a> and <a href='https://openmapsmeeting.nl/' target='blank' >Jules Schoonman</a>. This site published under <a href='https://creativecommons.org/licenses/by/4.0/deed.en' target='blank'>CC-BY 4.0</a>.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  typographer: true, // smart quotes and other typographic improvements
  cleanUrls: true, // drop .html from URLs
};
