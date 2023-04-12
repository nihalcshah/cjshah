const slides = document.querySelectorAll(".inline");
console.log("sdf")
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function checkSlide(e) {
  slides.forEach(slide => {
    console.log(slide)
    const slideInAt = (window.scrollY + window.innerHeight) - slide.offsetHeight / 2;
    const slideBottom = slide.offsetTop + slide.offsetHeight;
    const isHalfShown = slideInAt > slide.offsetTop;
    const isNotScrolledPast = window.scrollY < slideBottom;
    if (isHalfShown && isNotScrolledPast) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
