/* SLIDESHOW */
let currentSlide = 1;

// Initialize slideshow
slider(currentSlide);

// On dot click get selected slide
function getSlide(n) {
  currentSlide = n;
  slider(currentSlide);
}

function slider(n) {
  const slides = document.getElementsByClassName('slide');
  const dots = document.getElementsByClassName('dot');

  // Hide and deactivate all other slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }

  // Show selected slide
  slides[currentSlide - 1].style.display = "block";
  dots[currentSlide - 1].classList.add('active');
}

/* ACCORDION */
// Get tab and content classes in list
var accordion = document.getElementsByClassName('accordion-heading');
var content = document.getElementsByClassName('content');

// Iterate through tabs class list
for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    // when tabs list doesn't contain any active class, add active to clicked tab and show its content
    if (!this.classList.contains('active')) {
      this.classList.add('active');
      var currentTab = this.getAttribute("data-tab");
      var element = document.getElementById(currentTab);
      element.classList.add('show');
    } else {
      this.classList.remove('active');
      var currentTab = this.getAttribute("data-tab");
      var element = document.getElementById(currentTab);
      element.classList.remove('show');
    }
  });
}