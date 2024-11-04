import * as d3 from "npm:d3";
import confetti from "npm:canvas-confetti";
const background = await FileAttachment("assets/background-boston.jpg").href;
d3.select("body").style("background-image", "url(" + background + ")");
const img = document.getElementById("clickme");
img.addEventListener("click", (event) => {
  const rect = img.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  confetti({
    origin: { x: x / window.innerWidth, y: y / window.innerHeight },
    particleCount: 100,
    spread: 500,
  });
});