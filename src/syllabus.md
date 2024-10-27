---
toc: false
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.1/svg.min.js"></script>
<script src="https://unpkg.com/d3@7"></script>
<script src="https://unpkg.com/@observablehq/plot@0.2"></script>

```js
    async function loadData() {
        const response = await FileAttachment('data/dji.csv');
        const data = await response.text();
        return d3.csvParse(data, d3.autoType);
    }
    async function createPlot() {
        const dji = await loadData();
        const plot = Plot.plot({
            padding: 0,
            x: { axis: null },
            y: { tickFormat: Plot.formatWeekday("en", "narrow"), tickSize: 0 },
            fy: { tickFormat: "" },
            color: { scheme: "PiYG", legend: true, label: "Daily change", tickFormat: "+%", domain: [-0.06, 0.06] },
            marks: [
                Plot.cell(dji, {
                    x: (d) => d3.utcWeek.count(d3.utcYear(d.Date), d.Date),
                    y: (d) => d.Date.getUTCDay(),
                    fy: (d) => d.Date.getUTCFullYear(),
                    fill: (d, i) => i > 0 ? (d.Close - dji[i - 1].Close) / dji[i - 1].Close : NaN,
                    title: (d, i) => i > 0 ? ((d.Close - dji[i - 1].Close) / dji[i - 1].Close * 100).toFixed(1) : NaN,
                    inset: 0.5
                })
            ]
        });
        document.getElementById('plot').appendChild(plot);
    }
    createPlot();
```

<div class="hero">
  <!-- <img
    src="./assets/img/logo-countries.svg"
  > -->
  <img src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:bg25b502h/472,1034,6100,3722/1200,/0/default.jpg">
</div>

<div class="card" id="plot"></div>

<script
  type="module"
  src="https://unpkg.com/playhtml@latest/dist/init.es.js"
>
</script>