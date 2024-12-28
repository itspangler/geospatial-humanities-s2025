---
toc: true
---
<head>
    <script src="https://kit.fontawesome.com/cd46d92837.js" crossorigin="anonymous"></script>
</head>

# Schedule

The basic outline below is subject to change over the course of the semester. Each week is comprised of up to five kinds of materials. With the exception of Week 1, **all coursework and readings are due on the week that they are listed in the syllabus** (unless otherwise noted).

* **[Readings]()** (<i class="fa-solid fa-book smaller"></i>): You should read any assigned reading *before* we meet for class that week.

* **[Slides]()** (<i class="fa-solid fa-person-chalkboard smaller"></i>): Slides will be posted after class each week.

* **[Activity](activities)** (<i class="fa-solid fa-pen smaller"></i>): Activities are small exercises, often completed during class time, focused on material covered in lecture.

* **[Lab](labs)** (<i class="fa-solid fa-computer smaller"></i>): Labs provide deeper, step-by-step instructions on specific methods or workflows in geospatial humanities.

* **[Assignment](assignments)** (<i class="fa-solid fa-compass-drafting smaller"></i>): Assignments prompt self-guided engagement with course material.

Some weeks are heavy with content. Others are light. Things are subject to change, but use the schedule below to plan accordingly.

<div class="headless">
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
        const work=[]
        const reading=[]
        
        sched.innerHTML = `
        <td class="abstract">
            <span id="${item.id}" tabindex="-1" class="week smaller"><a class="observablehq-header-anchor" href="#${item.id}">${item.week}</a> • ${item.date}</span>
        </td>
        <td>
            <input type="checkbox" id="toggle-${item.id}" style="display: none;">
            <div class="sched-img-container" onclick="document.getElementById('toggle-${item.id}').click();">
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

<div class="callout">

Note that the required [curatorial introduction activity](curations) is not represented in this schedule. We will choose groups and determine a presentation schedule for curations by Week 4. 

</div>