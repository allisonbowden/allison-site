// Gentle parallax: objects drift slightly toward the cursor
const objects = document.querySelectorAll(".object");

document.addEventListener("mousemove", (e) => {
  const dx = (e.clientX / window.innerWidth - 0.5) * 2;  // -1..1
  const dy = (e.clientY / window.innerHeight - 0.5) * 2;
  objects.forEach((el, i) => {
    const depth = 3 + (i % 3) * 2; // px of drift, varies per object
    el.style.translate = `${dx * depth}px ${dy * depth}px`;
  });
});
