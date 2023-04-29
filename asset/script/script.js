// toggle navbar
const toggle_icon = document.querySelector(".toggle_bar");
const nav_bar = document.querySelector(".nav-bar ul");
const close = document.querySelector(".close");

toggle_icon.addEventListener("click", () => {
  close.style.display = "block";
  close.style.zIndex = 2000;

  nav_bar.style.left = 0;
});

close.addEventListener("click", () => {
  nav_bar.style.left = "-120%";
  close.style.zIndex = 0;
});

let index = 0;

setInterval(() => {
  let img = document.querySelector(".slide-content img");
  let h1 = document.querySelector(".slide-content h1");
  let h2 = document.querySelector(".slide-content h2");

  let stars = document.querySelector(".slide-content .stars");

  let h1_content = [
    {
      h1: "Fine Dining Restaurant",
      starRate: "",
      iContent: "",
    },
    {
      h1: "Steak",
      starRate: "3.8/5",
      iContent: `
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>
      `,
    },
    {
      h1: "Sausage Pasta",
      starRate: "4.2/5",
      iContent: `
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
      `,
    },
  ];

  let images_url = [
    "asset/images/img2.jpg",
    "asset/images/img3.jpg",
    "asset/images/img1.jpg",
  ];

  console.log();

  let updateIndex = index++;
  h1.innerHTML = h1_content[updateIndex].h1;
  h2.innerHTML = h1_content[updateIndex].starRate;
  stars.innerHTML = h1_content[updateIndex].iContent;
  console.log(updateIndex);
  if (updateIndex == 2) {
    index = 0;
  }
  img.src = images_url[updateIndex];
}, 2000);

let date = document.querySelector(".date_date");
let date_two = document.querySelector(".date_date_2");

let currentDetails = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentMonth = months[currentDetails.getMonth() + 1]; // returns the name of the current month
let currentYear = currentDetails.getFullYear(); // returns the current year (e.g. 2023)
let currentDate = currentDetails.getDate(); // returns the current date of the month (e.g. 24)

date.innerHTML = currentDate + " " + currentMonth + " " + currentYear;
date_two.innerHTML = currentDate + " " + currentMonth + " " + currentYear;
