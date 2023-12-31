// slider move
window.addEventListener("load", function () {
  const slider = document.querySelector("#slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length;
  let positionX = 0;
  let index = 0;

  nextBtn.addEventListener("click", function () {
    changeSlide(1);
  });

  prevBtn.addEventListener("click", function () {
    changeSlide(-1);
  });

  function changeSlide(direction) {
    if (direction === 1) {
      if (index >= slidesLength - 1) {
        index = slidesLength - 1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index++;
    } else if (direction === -1 && direction !== 0) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index--;
    }
  }
});
