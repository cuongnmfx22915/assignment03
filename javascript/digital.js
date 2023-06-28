"use strict";

// PHẦN NÂNG CAO: BỔ SUNG PROJECT CHARTER CHO CÁC DỰ ÁN
const title = document.querySelector("h1");
if (location.href.includes("project-cv")) {
  title.textContent = "PROJECT CHARTER - PERSONAL CV";
  document.querySelector(".project-cv").classList.remove("d-none");
} else if (location.href.includes("project-pet")) {
  title.textContent = "PROJECT CHARTER - PET MANAGEMENT";
  document.querySelector(".project-pet").classList.remove("d-none");
} else {
  title.textContent = "PROJECT CHARTER - NEWS WEBSITE";
  document.querySelector(".project-news").classList.remove("d-none");
}
