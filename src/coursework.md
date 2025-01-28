<head>
    <script src="https://kit.fontawesome.com/cd46d92837.js" crossorigin="anonymous"></script>
</head>

# Coursework directory

The semester's activities, assignments, and labs are posted below. To find readings (<span class="fa-solid fa-book smaller"></span>) and slides (<span class="fa-solid fa-person-chalkboard smaller"></span>), see the [schedule](schedule). The timeline and instructions for your [final projects are posted elsewhere](final).

## Activities

Activities are smaller instructional exercises, started (and sometimes completed) during class time, focused on material covered in lecture.


<div class="headless">
<table>
    <thead>
        <tr>
            <th></th>
            <th>Topic</th>
            <th>Link</th>
            <th>Submit</th>
        </tr>
    </thead>
    <tbody id="actcontainer">
    </tbody>
</table>
</div>

## Labs

Labs provide deep, step-by-step instructions on specific methods, concepts, and workflows in geospatial humanities.

<div class="headless">
<table>
    <thead>
        <tr>
            <th></th>
            <th>Topic</th>
            <th>Link</th>
            <th>Submit</th>
        </tr>
    </thead>
    <tbody id="labcontainer">
    </tbody>
</table>
</div>

## Assignments

Assignments prompt self-guided engagement with course material, usually leading to fully realized, creatively designed maps as their deliverable.


<div class="headless">
<table>
    <thead>
        <tr>
            <th></th>
            <th>Topic</th>
            <th>Link</th>
            <th>Submit</th>
        </tr>
    </thead>
    <tbody id="asscontainer">
    </tbody>
</table>
</div>

## In-class

As they come up, we'll post ungraded, in-class activities in this section.

<div class="headless">

```js
import yaml from 'js-yaml';
const inclass = await FileAttachment('data/in-class.yaml').text();
const data=yaml.load(inclass);
view(Inputs.table(data, {
    width:"640px",
    format: {
        path: id => htl.html`<a href=.${id} target=_blank>${id}</a>`
    },
    header: {
      title: "Activity"
    }
}))
```

</div>

```js

import yaml from 'js-yaml';
const activities = await FileAttachment('data/activities.yaml').text();
const labs = await FileAttachment('data/labs.yaml').text();
const assignments = await FileAttachment('data/assignments.yaml').text();
const inclass = await FileAttachment('data/in-class.yaml').text();

async function maketable(response, part) {
  try {
    const data = yaml.load(response);
    rendertable(data, part)
  } catch (error) {
    console.error('Error loading YAML file:', error);
  }
}

function rendertable(data, part) {
  const container = document.getElementById(part);
  container.innerHTML = `
  `;
    data.forEach(item => {

      const table = document.createElement('tr');

      let icon;

      function iconify() {
        if (item.actpath) {
          const icon = item.status ?
          `<b><a href="${item.actpath}" target="blank" class="fa-solid fa-pen icon"></a></b>` :
          `<b class="gray"><i class="fa-solid fa-pen"></i></b>`;
          return icon;
        } else if (item.labpath) {
          const icon = item.status ?
          `<b"><a href="${item.labpath}" target="blank" class="fa-solid fa-computer icon"></a></b>` : `<b class="gray"><i class="fa-solid fa-computer"></i></b>`;
          return icon;
        } else if (item.asspath) {
          const icon = item.status ?
          `<b><a href="${item.asspath}" target="blank" class="fa-solid fa-compass-drafting icon"></a></b>`: `<b class="gray"><i class="fa-solid fa-compass-drafting"></i></b>`;
          return icon;
        } else if (item.classpath) {
          const icon = item.status ?
          `<b><a href="${item.classpath}" target="blank" class="fa-solid fa-scroll icon"></a></b>` : `<b class="gray"><i class="fa-solid fa-scroll"></i></b>`;
          return icon;
        }
      }

      const submit = item.submit ?
      `<b><a href="${item.submit}" target="blank" class="fa-solid fa-upload icon"></a></b>` :
      `<b class="fa-solid gray fa-upload"></b>`
        
        table.innerHTML = `
        <td width="160">
            <img src="https://img.shields.io/badge/Assigned%20${item.assigned}-Due%20${item.due}-C552B5?labelColor=101656" width="160";>
        </td>
        <td class="noselect">
            <input type="checkbox" id="toggle-${item.id}" style="display: none;">
        <div class="coursework-container bigger" onclick="document.getElementById('toggle-${item.id}').click();">
                <b>${item.title}</b>: <i>${item.subtitle}</i>
            </div>
            <div class="coursework bordertop">
                <p class="abstract" style="font-style:oblique;">${item.description}</p>
            </div>
        </td>
        <td>
            ${iconify()}
        </td>
        <td>
            ${submit}
        </td>
        `;
        container.appendChild(table);
  });

}

maketable(activities, "actcontainer");
maketable(labs, "labcontainer");
maketable(assignments, "asscontainer");

```

<body>