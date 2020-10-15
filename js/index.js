let sliderButtonPrev = document.querySelector('.slider-btn-prev');
let sliderButtonNext = document.querySelector('.slider-btn-next');
let sliderPaginationButtons = document.querySelectorAll('.slider-pagination-btn');
let sliderItems = document.querySelectorAll('.slider-item');
let currentSlide = 0;
if (currentSlide == 0) {
  sliderButtonPrev.setAttribute('disabled', 'disabled');
}
else if (currentSlide = sliderItems.length - 1) {
  sliderButtonNext.setAttribute('disabled', 'disabled');
}
sliderButtonPrev.addEventListener('click', () => {
  changeSlide(currentSlide, currentSlide - 1);
});
sliderButtonNext.addEventListener('click', () => {
  changeSlide(currentSlide, currentSlide + 1);
});
sliderPaginationButtons.forEach((button, i) => {

  button.addEventListener('click', () => {
    if (currentSlide == i) return;
    changeSlide(currentSlide, i)
  })
})

function changeSlide(currentIndex, newIndex) {
  if (newIndex < 0 || newIndex > sliderItems.length - 1) return;
  if (newIndex < currentIndex) {
    sliderButtonNext.hasAttribute('disabled') && sliderButtonNext.removeAttribute('disabled');
  } else {
    sliderButtonPrev.hasAttribute('disabled') && sliderButtonPrev.removeAttribute('disabled');
  }
  sliderItems[currentIndex].classList.remove('current');
  sliderPaginationButtons[currentIndex].classList.remove('active');
  sliderItems[newIndex].classList.add('current');
  sliderPaginationButtons[newIndex].classList.add('active');
  if (newIndex == 0) sliderButtonPrev.setAttribute('disabled', 'disabled');
  else if (newIndex == sliderItems.length - 1) sliderButtonNext.setAttribute('disabled', 'disabled')
  currentSlide = newIndex;
}
