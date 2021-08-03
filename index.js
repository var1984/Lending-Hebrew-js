var swiper = new Swiper(".img-slider", {
  pagination: {
    el: ".pagin",
    type: "fraction",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  slidesPerView: 5,
  loop: true,
  spaceBetween: 5,
});

document
  .querySelectorAll("[data-target-id]", "[data-link-id]")
  .forEach((button) => {
    let targetId = button.dataset.targetId;
    // let linkId = button.dataset.linkId;
    let flag = false;

    button.addEventListener("click", () => {
      const container = button.parentNode.parentNode;

      flag = !flag;
      if (flag) {
        container.querySelector(`[data-item-id='${targetId}']`).style.marginTop = "70px";
        console.log(document.querySelectorAll(`[data-item-id='${targetId}']`));

        container.querySelector(`[data-p-id='${targetId}']`).style.display =
          "none";
        container.querySelector(`[data-title-id='${targetId}']`).style.top =
          "0px";
        button.style.bottom = "288px";
      } else {
        container.querySelector(
          `[data-item-id='${targetId}']`
        ).style.marginTop = "375px";
        container.querySelector(`[data-p-id='${targetId}']`).style.display =
          "block";
        container.querySelector(`[data-title-id='${targetId}']`).style.top =
          "295px";
        button.style.bottom = "0px";
      }
    });
  });



let showBtn = document.querySelector(".side-btn-wrap");
let onButton = document.querySelectorAll(".links button");
onButton.forEach((button) => button.addEventListener("click", toggleButton));
function toggleButton() {
  showBtn.style.width = "294px";
  document.querySelector(".links").style.opacity = "1";
  document.querySelector(".btns_pls").style.opacity = "0";
}


document.querySelectorAll("[data-link-id]").forEach((link) => {
  let linkId = link.dataset.linkId;
  let flag = false;

  link.addEventListener("click", () => {
    const container = link.parentNode;
    flag = !flag;
    if (flag) {
      container.querySelector(`[data-list-id='${linkId}']`).style.height =
        "256px";
      container.querySelector(`[data-list-id='${linkId}']`).style.opacity = "1";
      container.querySelector(`[data-list-id='${linkId}']`).style.borderBottom ="1px solid #f5b317";
      container.querySelectorAll(`[data-arow-id='${linkId}']`).forEach(arow => {
            arow.style.transform = "rotate(180deg)";
      })

    } else {
       container.querySelector(`[data-list-id='${linkId}']`).style.height =
         "0px";
       container.querySelector(`[data-list-id='${linkId}']`).style.opacity =
         "0";
       container.querySelector(
         `[data-list-id='${linkId}']`
       ).style.borderBottom = "none";
       container
         .querySelectorAll(`[data-arow-id='${linkId}']`)
         .forEach((arow) => {
           arow.style.transform = "rotate(0deg)";
         });
    }
  });
});


//bottom: 557px

let openform = document.querySelector(".open-form");
let onform = document.querySelector(".on-form");
let formArow = document.querySelectorAll(".form-arow");
 let flag = false;
onform.addEventListener("click", () => {
  flag = !flag;
  if (flag) {
    openform.style.bottom = "557px";
    formArow.forEach((arow) => {
      arow.style.transform = "rotate(180deg)";
    });
  } else {
    openform.style.bottom = "5px";
    formArow.forEach((arow) => {
      arow.style.transform = "rotate(0deg)";
    });
  }
});
  
