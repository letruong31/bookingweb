// slider move
window.addEventListener("load", function() {
  const slider = document.querySelector("#slider")
  const sliderMain = document.querySelector(".slider-main")
  const sliderItems = document.querySelectorAll(".slider-item")
  const nextBtn = document.querySelector(".slider-next")
  const prevBtn = document.querySelector(".slider-prev")
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length;
  let positionX = 0;
  let index = 0


  nextBtn.addEventListener("click", function() {
    changeSlide(1);
  })

  prevBtn.addEventListener("click", function() {
    changeSlide(-1);
  })

  function changeSlide(direction) {
    if(direction === 1) {
      if(index >= slidesLength - 1) {
        index = slidesLength -1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`
      index++;
    } else if (direction === -1 && direction !== 0) {
      if(index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`
      index--;
    }
  }
})

// Date at .form-item
window.onload=function(){
  populatedropdown("daydropdown", "monthdropdown", "yeardropdown")
  }
  var monthtext = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function populatedropdown(dayfield, monthfield, yearfield) {
  var today = new Date()
  var dayfield = document.getElementById(dayfield)
  var monthfield = document.getElementById(monthfield)
  var yearfield = document.getElementById(yearfield)
  for (var i = 1; i < 32; i++)
    dayfield.options[i] = new Option(i, i)
  //select today's day
  dayfield.options[today.getDate()] = new Option(today.getDate(), today.getDate(), true, true)
  for (var m = 0; m < 12; m++)
    monthfield.options[m] = new Option(monthtext[m], monthtext[m])
  //select today's month
  monthfield.options[today.getMonth()] = new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true)
  var thisyear = today.getFullYear()
  for (var y = 0; y < 118; y++) {
    yearfield.options[y] = new Option(thisyear, thisyear)
    thisyear -= 1
  }
  //select today's year
  yearfield.options[0] = new Option(today.getFullYear(), today.getFullYear(), true, true)
}