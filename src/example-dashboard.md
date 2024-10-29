<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Force-Directed Graph with Tags</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <style>
    svg {
      width: 100%;
      height: 600px;
    }
    circle {
      stroke: #fff;
      stroke-width: 1.5px;
    }
    text {
      font-family: Arial, sans-serif;
      font-size: 36px;
      pointer-events: none;
    }
    .legend {
      font-family: Arial, sans-serif;
      font-size: 12px;
    }
    .tag-button {
      cursor: pointer;
      margin: 5px;
      padding: 5px;
      background-color: lightgray;
      border: none;
      border-radius: 3px;
    }
    .tag-button:hover {
      background-color: darkgray;
    }
  </style>
</head>
<body>

  <div id="controls">
    <button class="tag-button" onclick="filterByTag('remote sensing')">Remote Sensing</button>
    <button class="tag-button" onclick="filterByTag('statistics')">Statistics</button>
    <button class="tag-button" onclick="filterByTag('python')">Python</button>
    <button class="tag-button" onclick="filterByTag('')">Reset</button>
  </div>

  <svg></svg>

```js
const csvData = await FileAttachment('data/work.csv').text();
function csvToJson(csv) {
  const lines = csv.split("\n");
  const headers = lines[0].split(",");

  return lines.slice(1).map(line => {
    const values = line.split(",");
    return headers.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
  });
}
const jsonData = csvToJson(csvData);

console.log(jsonData)
```

  <script>

    // Sample node data
    const data = {
      nodes: [
        { id: 'Geospatial Ethics', type: 'lab', tags: 'statistics' },
        { id: 'Data Quality Control', type: 'activity', tags: 'python, remote sensing' },
        { id: 'Mapping and Coordinate Systems', type: 'lab', tags: 'remote sensing' },
        { id: 'GIS for Disaster Management', type: 'activity', tags: 'python' },
        { id: 'Remote Sensing', type: 'activity', tags: 'advanced' },
        { id: 'Climate Change and GIS', type: 'lab', tags: 'statistics' },
        // Add more entries as needed
      ],
      links: [
        { source: 'Geospatial Ethics', target: 'Data Quality Control' },
        { source: 'GIS for Disaster Management', target: 'Remote Sensing' },
        { source: 'Climate Change and GIS', target: 'Remote Sensing' },
        { source: 'Data Quality Control', target: 'Mapping and Coordinate Systems' },
        // More links based on tags or types
      ]
    };

    const width = window.innerWidth;
    const height = 600;

    const svg = d3.select("svg")
      .attr("viewBox", [0, 0, width, height]);

    const colorScale = d3.scaleOrdinal()
      .domain(['lab', 'activity', 'assignment'])
      .range(['#f39c12', '#2ecc71', '#3498db']); // Yellow, green, blue for different types

    const tagCenters = {
      'remote sensing': { x: width / 4, y: height / 2 },
      'statistics': { x: width / 2, y: height / 2 },
      'python': { x: 3 * width / 4, y: height / 2 },
      'advanced': { x: width / 2, y: height / 3 },
      // Add more tag centers as needed
    };

    const simulation = d3.forceSimulation(data.nodes)
      .force("link", d3.forceLink(data.links).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke-width", 2);

    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(data.nodes)
      .join("circle")
      .attr("r", 10)
      .attr("fill", d => colorScale(d.type))
      .call(drag(simulation));

    node.append("title")
      .text(d => `${d.id} (${d.type})`);

    const label = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(data.nodes)
      .join("text")
      .attr("text-anchor", "middle")
      .attr("dy", -15)
      .text(d => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      label
        .attr("x", d => d.x)
        .attr("y", d => d.y);
    });

    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    // Filter by tag
    function filterByTag(tag) {
      // Reset forces
      simulation.force("x", null).force("y", null);

      if (tag && tagCenters[tag]) {
        // Apply forces to move nodes to tag centers
        simulation.force("x", d3.forceX(d => tagCenters[d.tags.includes(tag) ? tag : 'advanced'].x).strength(0.5));
        simulation.force("y", d3.forceY(d => tagCenters[d.tags.includes(tag) ? tag : 'advanced'].y).strength(0.5));
      }

      simulation.alpha(1).restart();
    }
  </script>

</body>
</html>
