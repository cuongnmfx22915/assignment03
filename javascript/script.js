"use strict";

// CHỨC NĂNG ẨN THÔNG TIN CÁ NHÂN
function submitClick() {
  const emailValue = document.querySelector(".email").value.toLocaleLowerCase();
  const containerInfo = document.querySelector(".container-info");
  const formInfo = document.querySelector(".form-info");
  const errorEmail = document.querySelector(".error");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmail = emailValue.match(regex);

  if (checkEmail) {
    containerInfo.classList.remove("d-none");
    formInfo.classList.add("d-none");
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email!";
    errorEmail.style.color = "#f00";
  }
}

// CHỨC NĂNG ẨN THÔNG TIN NGHỀ NGHIỆP
function mouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.classList.remove("d-none");
}

function mouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.classList.add("d-none");
}

function viewMoreClick(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-more");
  const details = parentElement.querySelectorAll(".details");
  if (viewMore.textContent.includes("View More")) {
    details.forEach((element) => {
      element.classList.remove("d-none");
    });

    viewMore.innerHTML = '<i class="icon fas fa-sort-up"></i> View Less';
  } else {
    details.forEach((element) => {
      element.classList.add("d-none");
    });
    viewMore.innerHTML = '<i class="icon fas fa-sort-down"></i> View More';
  }
}
