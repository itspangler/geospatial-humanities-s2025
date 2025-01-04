<div class="fullwidth hero">

<h1>CLS 125: Introduction to Geospatial Humanities</h1>

*This is the website for the Spring 2025 course CLS 125: Introduction to Geospatial Humanities, taught at [Tufts University](https://tufts.edu) by [Ian Spangler](https://itspangler.com).*
</div>

<div class="grid grid-cols-1" style="grid-auto-rows: 500px;" width="640">
  <div class="card" id="map" style="padding: 0">
  </div>
</div>

```js
import { WarpedMapLayer } from "npm:@allmaps/leaflet@1.0.0-beta.39";

const maps = await FileAttachment("data/maps.json").json();
const tisch = await FileAttachment("assets/tisch.svg").text();
const center = [42.4062039,-71.1188766];

const map = L.map("map", {
  center,
  zoom: 15,
});

const tischIcon = L.divIcon({
  html: tisch,
  className: "icon",
  iconSize: [100, 100],
});

const tischMarker = L.marker(center, { icon: tischIcon })
  .bindPopup(
    `<p>
      <b>Tisch Library</b><br>
      35 Professors Row<br>
      Medford, MA 02155<br>
    </p>
    `
  )
  .addTo(map);

const overlays = {};

const makeWarpedMapLayer = async (item) => {
  const attribution = `<a target="_blank" href="${item.url}">${item.collection}</a>`;
  const layer = new WarpedMapLayer(null, {
    attribution,
  });
  const ids = await layer.addGeoreferenceAnnotation(item.annotationData);
  layer.setMapsTransformationType(ids, "polynomial");
  return layer;
};

const warpedMapLayers = await Promise.all(
  maps.map((item) =>
    makeWarpedMapLayer(item).then((warpedMapLayer) => ({
      ...item,
      warpedMapLayer,
    }))
  )
);

for (const layer of warpedMapLayers) {
  const title = `<i>${layer.year}</i>`;
  overlays[title] = layer.warpedMapLayer;
}

const layerControl = L.control.layers(overlays, null, { collapsed: false });

const getRandomInt = (max) => Math.floor(Math.random() * max);
const index = getRandomInt(maps.length - 1);
const initialLayer = Object.entries(overlays)[index][1];

initialLayer.addTo(map);
layerControl.addTo(map);

// Force initial render...
setTimeout(() => {
  initialLayer._update();
}, "1000");
```