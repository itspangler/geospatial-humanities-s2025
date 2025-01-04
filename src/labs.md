---
toc: false
---

# Labs

<body>
  <!-- <img src="../assets/convening.svg"> -->
  <div id="card-container"></div>

```js
import yaml from 'js-yaml';

let today = new Date();

async function labs() {
  try {
    const response = await FileAttachment("data/labs.yaml").text();
    const data = yaml.load(response);
    const sortedData = data.sort((b, a) => new Date(b.date) - new Date(a.date));
    renderCards(sortedData);
  } catch (error) {
    console.error('Error loading YAML file:', error);
  }
}

function renderCards(data) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  data.forEach(item => {
    if (item.status == 'available') {
        const card = document.createElement('div');
        console.log(item.path)
        card.className = 'card-available';
        card.innerHTML = `
        <a href="${item.path}"><h2 class="card-title">${item.title}</h2></a>
        <h4>${item.subtitle}</h4>
        <a href="${item.path}">
            <div class="img-container">
                <img src="${item.image}" alt="${item.title}" class="card-img">
            </div>
        </a>
        <div class="grid grid-cols-2">
            <div class="assigned">Assigned: ${new Date(item.assigned).toLocaleDateString()}</div>
            <div class="due">Due: ${new Date(item.due).toLocaleDateString()}</div>
        </div>
        <p class="card-description"><i>${item.description}</i></p>
        `;
        cardContainer.appendChild(card);
    }
    if (item.status == 'unavailable') {
        const card = document.createElement('div');
        console.log(item.path)
        card.className = 'card-unavailable';
        card.innerHTML = `
        <h2 class="card-title">${item.title}</h2>
          <h4 class="blur">${item.subtitle}</h4>
          <div class="img-container blur">
              <img src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:tm70s0959/2962,3554,381,259/800,/0/default.jpg" alt="${item.title}" class="card-img">
          </div>
          <div class="blur grid grid-cols-2">
              <div class="assigned">Assigned: ${new Date(item.assigned).toLocaleDateString()}</div>
              <div class="due">Due: ${new Date(item.due).toLocaleDateString()}</div>
          </div>
          <p class="blur card-description"><i>${item.description}</i></p>
        `;
        cardContainer.appendChild(card);
    }
  });
}

labs();
```

</body>

---