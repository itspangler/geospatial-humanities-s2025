---
toc: true
---
<head>
    <script src="https://kit.fontawesome.com/cd46d92837.js" crossorigin="anonymous"></script>
</head>

# Schedule

Each week is comprised of up to five kinds of materials. Unless otherwise noted, coursework and readings are due on the week that they are listed in the syllabus.

## Course content

<div class="aside">

Note that presentation/due dates for the required [curatorial introduction activity](curations) and the [final project](final) are not represented in this schedule.

</div>

* **[Readings](#course-bibliography)** (<i class="fa-solid fa-book smaller"></i>): You should read any assigned reading *before* we meet for class that week.

* **[Slides](#detailed-course-outline)** (<i class="fa-solid fa-person-chalkboard smaller"></i>): Slides will be posted after class each week.

* **[Activity](coursework#activities)** (<i class="fa-solid fa-pen smaller"></i>): Activities are small exercises meant to elaborate on material covered in lecture in a more hands-on format. There are 6 graded activities, and there will be numerous [ungraded in-class activities](coursework#in-class) as well.

* **[Lab](coursework#labs)** (<i class="fa-solid fa-computer smaller"></i>): Labs provide deeper, step-by-step instructions on specific methods or workflows in geospatial humanities.

* **[Assignment](coursework#assignments)** (<i class="fa-solid fa-compass-drafting smaller"></i>): Assignments prompt self-guided engagement with course material.

## Coursework submission pattern

In general, coursework and readings will follow a weekly submission pattern that resembles the following:

```js
const data = await FileAttachment("data/schedule.csv").csv()
console.log(data)
view(Inputs.table(data, {
    width:"640px",
    disabled: "true"
    }))
```

## Detailed course outline

A detailed outline of the entire course is below. It's subject to change as the semester progresses. Some weeks are heavy with content. Others are light. The front half of the term (pre-spring recess) is heavier with readings and labs, while the second half of the term reserves more space for final projects. Use the schedule to plan accordingly:

<div class="headless noselect">
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Topic</th>
                <th>Reading</th>
                <th>Slides</th>
                <th>Activity</th>
                <th>Lab</th>
                <th>Assignment</th>
            </tr>
        </thead>
        <tbody id="tablecontainer">
        </tbody>
    </table>
</div>

```js

import yaml from 'js-yaml';
const fullsched = await FileAttachment('data/schedule-full.yaml').text();

async function maketable(response, part) {
  try {
    const data = yaml.load(response);
    rendertable(data, part)
  } catch (error) {
    console.error('Error loading YAML file:', error);
  }
}

function rendertable(data, part) {
  const tablecontainer = document.getElementById(part);
  tablecontainer.innerHTML = `
  `;
    data.forEach(item => {

        const sched = document.createElement('tr');

        const act =
            item.act ?
            `<b class="abstract "><a href="${item.act}" target="blank" class="fa-solid fa-pen icon"></a></b>` : `<b class="abstract gray"><i class="fa-solid fa-pen"></i></b>`;
        const lab =
            item.lab ?
            `<b class="abstract"><a href="${item.lab}" target="blank" class="fa-solid fa-computer icon"></a></b>` : `<b class="abstract gray"><i class="fa-solid fa-computer"></i></b>`;
        const ass =
            item.ass ?
            `<b class="abstract"><a href="${item.ass}" target="blank" class="fa-solid fa-compass-drafting icon"></a></b>` : `<b class="abstract gray"><i class="fa-solid fa-compass-drafting"></i></b>`;
        const read =
            item.read ?
            `<span class="abstract"><a href="${item.read}" target="blank" class="fa-solid fa-book icon"></a></span>` : `<span class="abstract"><i class="gray fa-solid fa-book"></i></span>`;
        const slides =
            item.slides_path ?
            `<span class="abstract"><a href="${item.slides}" target="blank" class="fa-solid fa-person-chalkboard"></a></span>` : `<span class="abstract"><i class="gray fa-solid fa-person-chalkboard"></i></span>`;
        
        sched.innerHTML = `
        <td class="abstract smaller">
            <span id="${item.id}" tabindex="-1" class="week"><a class="observablehq-header-anchor" href="#${item.id}">${item.week}</a> • ${item.date}</span>
        </td>
        <td>
            <input type="checkbox" id="toggle-${item.id}" style="display: none;">
            <div class="sched-container bigger" onclick="document.getElementById('toggle-${item.id}').click();">
                <b>${item.title}</b>
            </div>
            <div class="schedule">
                <span style="font-style:oblique;">${item.subtitle}</span>
                <div class="abstract bordertop">
                    <p>${item.abstract}</p>
                </div>
            </div>
        </td>
        <td>
            ${read}
        </td>
        <td>
            ${slides}
        </td>
        <td>
            ${act}
        </td>
        <td>
            ${lab}
        </td>
        <td>
            ${ass}
        </td>
        `;
        tablecontainer.appendChild(sched);
  });
}

maketable(fullsched, "tablecontainer");

```

## Course bibliography

Readings for class, as well as content that appears in lectures, labs, and other assignments, are listed below.

```js
import yaml from 'js-yaml';

const bib = await FileAttachment('data/bib.yaml').text();

const data=yaml.load(bib);

const search = view(Inputs.search(
    data, {placeholder: "Search `Bouie`…"}, {width:"640px"}
    ));
```

```js
const table = view(Inputs.table(search, {
        columns: ["path","authors","date","title","due"],
        header: {authors: "Author(s)", date: "Date", due:"Due", title:"Title", path:""},
        width: {authors: 100, date: 25, title:250, due:25, path:10},
        format: {
            path: path => htl.html`<a href=${path} target=_blank><i class="fa-solid fa-book smaller"></i></a>`
        },
    },
))
```

<!-- ```js
console.log(window.location.hash)
const hash = document.getElementById(window.location.hash.substring(1));
console.log(hash)
hash.style.backgroundColor = 'black';
``` -->