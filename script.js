const fighters = [
  {
    firstname: "Khabib",
    lastname: "Nurmagomedov",
    image: "./assets/khabib.webp",
    nickname: "The Eagle",
    impact: "Undefeated champion with strong global and Muslim fanbase.",
  },
  {
    firstname: "Conor",
    lastname: "McGregor",
    image: "./assets/Conor.png",
    nickname: "The Notorious",
    impact:
      "Top PPV draw and crossover boxing star with massive global influence.",
  },
  {
    firstname: "Jon",
    lastname: "Jones",
    image: "./assets/Jon.png",
    nickname: "Bones",
    impact:
      "Long-reigning champion and one of the most dominant fighters in UFC history.",
  },
  {
    firstname: "Georges",
    lastname: "St-Pierre",
    nickname: "GSP",
    image: "./assets/GSP.png",
    impact:
      "Two-division champion and global icon known for discipline and dominance.",
  },
];

const hof = [
  {
    Name: "Khabib Nurmagomedov",
    Image: "./assets/Nurmagomedov.png",
    Wing: "Modern Wing",
  },
  {
    Name: "Daniel Cormier",
    Image: "./assets/DC.png",
    Wing: "Modern Wing",
  },
  {
    Name: "Georges Saint Pierre",
    Image: "./assets/gsp 2.png",
    Wing: "Modern Wing",
  },
  {
    Name: "Robbie Lawler",
    Image: "./assets/Lawler.webp",
    Wing: "Modern Wing",
  },
  {
    Name: "Anderson Silva",
    Image: "./assets/Silva.png",
    Wing: "Pioneer Wing",
  },
];
AOS.init(
    {
        duration: 1500,
        anchorplacement:"center-center"
    }
);

const grid = document.getElementById("fighter-container");

fighters.forEach((fighter) => {
  const card = document.createElement("div");
  card.classList.add("fightercard");
  card.setAttribute("data-aos", "fade-right");

  card.innerHTML = `
        <span class="first" >${fighter.firstname}</span>
        <span class="last">${fighter.lastname}</span>
        <img src="${fighter.image}" alt="">
        <div class="fighterdetail">
            <h3>${fighter.nickname}</h3>
            <div></div>
            <p>${fighter.impact}</p>
        </div>
    `;

  grid.appendChild(card);
});

const hof_grid = document.getElementById("hof-grid");

hof.forEach((x) => {
  const hof_card = document.createElement("div");
  hof_card.classList.add("hof-card");
  hof_card.setAttribute("data-aos", "fade-left");

  hof_card.innerHTML = `
        <img src="${x.Image}" alt="">
        <h3>${x.Name}</h3>
        <p>${x.Wing}</p>
    `;
  hof_grid.appendChild(hof_card);
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
