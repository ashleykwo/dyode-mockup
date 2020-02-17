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