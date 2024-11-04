---
toc: true
---

# Schedule

---

<body>

## Part I: Foundations

*Familiarizing ourselves with the course problematic. Key concepts in geohumanities, geography, cartography. Understanding spatial data. Basics of ArcGIS Pro. How to make a map. The bread and butter stuff.*

  <div id="i"></div>

---

## Part II: Approaches

*Different techniques and methods for approaching the course problematic. Getting into vector and raster analysis, including table joins, basic spatial statistics, georeferencing, and more.*

  <div id="ii"></div>

---

## Part III: Experiments

*Experimenting with concepts and methods.*

  <div id="iii"></div>

---

## Part IV: Final Projects

*Last three weeks of class are not content driven. Focus on final projects. Keep your head above water.*

  <div id="iv"></div>

```js

import yaml from 'js-yaml';

const foundations = await FileAttachment('data/foundations.yaml').text();
const applications = await FileAttachment('data/applications.yaml').text();
const experimentations = await FileAttachment('data/experimentations.yaml').text();
const final = await FileAttachment('data/final.yaml').text();

async function schedule(response, part) {
  try {
    const data = yaml.load(response);
    renderSched(data, part)
  } catch (error) {
    console.error('Error loading YAML file:', error);
  }
}

function renderSched(data, part) {
  const schedContainer = document.getElementById(part);
  schedContainer.innerHTML = '';
  data.forEach(item => {

      const sched = document.createElement('div');
      const act =
        item.act ? `<a style="color:#101656 !important;" href="${item.act_path}"><p>${item.act}</p></a>` : '';
      const lab =
        item.lab ? `<a style="color:#101656 !important;"href="${item.lab_path}"><p>${item.lab}</p></a>` : '';
      const ass =
        item.ass ? `<a style="color:#101656 !important;"href="${item.ass_path}"><p>${item.ass}</p></a>` : '';
      const read =
        item.read ? `<a style="color:#101656 !important;"href="${item.read_path}"><p>${item.read}</p></a>` : '';

      const slides =
        item.slides_path ? `<a style="color:#101656 !important;" href="${item.slides_path}"><p>View this week's slides</p></a>` : '';

      const gis=act+lab+ass

      const cards = [read,slides,gis]
      const headers = ["— READ —","— REVIEW —","— COMPLETE —"]
      const modifiers = ["No readings due before class","Slides not yet posted","No labs due before class"]
      const colors = ["#f8f8e4","#e4f5f8","#f8e4f2"]
    
      let work = ''
      let count = 0
      
      if (item.skip) {
        console.log(item.skip)
        work = `<div><p class="abstract">${item.skip}</p></div>`
      } else {
          cards.forEach(item => {
          if (item != '') {
            work+=`<div class="bottom"><p class="sched-ass-due smaller">${headers[count]}</p><div class="work-avail smaller" style="background-color:${colors[count]}">${item}</div></div>`
          } else {
            work+=`<div class="bottom"><p class="sched-ass-due smaller">${headers[count]}</p><div class="work-unavail smaller gray" style="background-color:${colors[count]};">${modifiers[count]}</div></div>`
          }
          count+=1
        })
        work = `
          <div class="grid grid-cols-3 block">
            ${work}
          </div>
        `
      }

      sched.innerHTML = `
      <div class="sched-header grid grid-cols-2">
        <div>
          <span id="${item.id}" tabindex="-1" class="week smaller"><a class="observablehq-header-anchor" href="#${item.id}">${item.week}</a> • ${item.date}</span>
        </div>
        <div>
          <b class="bigger disappear">${item.title}: </b> <i class="bigger disappear">${item.subtitle}</i>
        </div>
      </div>
      
      <input type="checkbox" id="toggle-${item.id}" style="display: none;">
      <div class="sched-img-container" onclick="document.getElementById('toggle-${item.id}').click();">
        <img class="sched-img" src="${item.image}">
      </div>
      <div class="schedule">
        <div class="abstract">
          <p>${item.abstract}</p>
        </div>
        ${work}
      </div>
      `;
      schedContainer.appendChild(sched);
  });
}

schedule(foundations, 'i')
schedule(applications, 'ii')
schedule(experimentations, 'iii')
schedule(final, 'iv')
```

</body>