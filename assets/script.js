// Animate server counter
let servers = 1; // change this to actual server count
function animateCounter(id, value) {
  let el = document.getElementById(id);
  if (!el) return;
  let counter = 0;
  let step = Math.ceil(value / 100);

  let interval = setInterval(() => {
    counter += step;
    if (counter >= value) {
      counter = value;
      clearInterval(interval);
    }
    el.textContent = counter.toLocaleString();
  }, 20);
}

window.onload = () => {
  // Run server stat animation
  let serverStat = document.getElementById("servers");
  if (serverStat) animateCounter("servers", servers);

  // Build team cards dynamically
  let grid = document.getElementById("creditsGrid");
  if (grid) {
    let team = [
      { name: "Chessz", role: "Creator", img: "assets/images/chessz.png" },
      { name: "Connor", role: "Moderator", img: "assets/images/connor.png" },
      { name: "Gov", role: "Moderator", img: "assets/images/gov.png" },
      { name: "Hayden", role: "Tester", img: "assets/images/Hayden.png" },
      { name: "Elena", role: "Tester", img: "assets/images/Elena.png" }
    ];

    team.forEach(member => {
      let card = document.createElement("div");
      card.className = "credit-card";
      card.innerHTML = `
        <img src="${member.img}" alt="${member.name}">
        <h3>${member.role}</h3>
        <p>${member.name}</p>
      `;
      grid.appendChild(card);
    });
  }

  // ✅ Accordion for features
  document.querySelectorAll(".feature-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".feature-card").forEach(c => {
        if (c !== card) c.classList.remove("active");
      });
      card.classList.toggle("active");
    });
  });
};
