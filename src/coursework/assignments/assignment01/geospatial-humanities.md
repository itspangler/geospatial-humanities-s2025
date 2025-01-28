<script type="module" src="../../../assets/js/script.js"></script>
<script type="module">
  const scriptUrl = new URL('_import/assets/js/script.f6e5b1ef.js', import.meta.url).href;
  import(scriptUrl).then(module => {
    module.images();
  })
</script>

# Assignment 01: Reviews in GH

##### Getting a handle on the wide world of geospatial humanities projects

<div class="intro">

[![reviews](https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:w0892t28z/78,897,2471,1301/1200,/0/default.jpg)](https://www.digitalcommonwealth.org/search/commonwealth:w0892t27p)

```js
import yaml from 'js-yaml';
const response = await FileAttachment("../../../data/assignments.yaml").text()
const data = yaml.load(response)
const d=[data[0]]
view(Inputs.table(d, {width:{subtitle:200},disabled: "true",columns: ["subtitle","assigned","due"],header: {subtitle: "Assignment",assigned: "Assigned",due: "Due"}}))
```

*This assignment introduces you the topics and problematics of this course by having you review existing projects that fall within the broad remit of "geospatial humanities," or GH. It's inspired by* **[Reviews in Digital Humanities](https://reviewsindh.pubpub.org/)***, a peer-reviewed journal that doubles as a "project registry... of digital humanities work and its outputs."*

</div>

<hr>

## Instructions

In groups of 3-4, this assignment asks you to write your own [review in digital humanities](https://reviewsindh.pubpub.org/). The caveat: your review must focus specifically on a **geospatial** project—e.g., one that includes some sort of engagement with spatial data.

I'll provide a list of suitable options below, but you're not limited to my suggestions. I encourage you to go off-list. If you do, all I ask is that your group get approval on the project you'd like to review.

Altogether, this will involve:

<ul class="circle-list">
    <li>Reading an existing digital humanities review</li>
    <li>Selecting a project to review (one that has not already been reviewed in the journal)</li>
    <li>Writing a 250-500 word reflection on the digital humanities</li>
    <li>Writing a ~1,000 word review of your group's chosen GH project</li>
</ul>

Below, I'll break down the assignment step by step.

## Step 1: Read 📖

First, pick an existing review from the *Reviews in DH* site. Read the review. Explore the project that it's reviewing. Think about what the review helps to clarify and what it leaves you still wondering about. Think about what makes sense in the review and what you found confusing. Group members do not need to all read the same review, but everybody <span class="key">must</span> read one!

## Step 2: Reflect 🪞

After everybody has read a review, reflect on the following question: **What are the digital humanities?** You can answer this however you like; it's an intentionally broad query. In answering this question, you <span class="key">must</span> reference the reviews that your group members read.

For this, you don't need to read beyond your DH reviews, but here are a few pieces which contextualize the emergence of DH in the late 2000s/early 2010s, in case you're interested:

* *[What the Digital Humanities Can't Do](https://www-chronicle-com.us1.proxy.openathens.net/article/what-the-digital-humanities-cant-do/)*, Kathryn Conrad (2014)
* *[Humanities Data: A Necessary Contradiction](https://miriamposner.com/blog/humanities-data-a-necessary-contradiction/)*, Miriam Posner (2015)
* *[A Political History of Digital Humanities](https://lareviewofbooks.org/article/neoliberal-tools-archives-political-history-digital-humanities/)*, Daniel Allington, David Golumbia, and Sarah Brouillette (2016)

## Step 3: Select 🤔

As a group, select a geospatial project to review. Here is a list of [geospatial humanities projects that would be suitable to review](review-examples). Again, you can go off-list—and I encourage you to do so!—and if you do I only ask that you let me know what project you'll be reviewing instead.

## Step 4: Review 📝

Write a review of a geospatial humanities project. Split it up however you like; everybody gets the same grade. Your review should address the following points:

1. How is this project engaged with the geospatial humanities? What is it **arguing** and what are its **themes**?
2. What are the **key datasets** associated with this project? It's okay if you don't fully have the language to describe this; just try your best.
3. What **methodologies** were used to create, analyze, and/or present the data? If the authors don't explain, make an educated guess.
4. What **areas of growth** can you find in this project? If you were in charge, what kinds of information would you add and what kinds of different design choices would you make?

Where applicable, your review <span class="key">should</span> include images/hyperlinks/etc. [Feel free to give it a "manifesto" vibe.](https://www.humanitiesblast.com/manifesto/Manifesto_V2.pdf)

## Submit

By Wednesday, 1/29 at 11:59pm, submit a `.docx` or `.pdf` of your review to Canvas. The format of your post should adhere, more or less, to [this template](https://docs.google.com/document/d/1zoMIqyPeFaeK1Sjb4wXDtFTW-w05bDUBvMXJqWztDpg/edit?usp=sharing), which is [basically formatted in MLA](https://tischlibrary.tufts.edu/what-we-have/databases/mla-handbook-plus), but you don't need to use MLA as long as your bibliography is sensible and consistent with *some* citation style.

<a class="submit" href="https://canvas.tufts.edu/courses/63026/assignments/490439">Submit Assignment 01</a>