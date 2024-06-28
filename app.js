
// Navigation Section Starts 

// navigation fade effect on top 
const nav = document.getElementById('navbar'); 

  window.onscroll = function () { 
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        // changes background upon scroll
        nav.classList.add("navbar-colored");
        nav.classList.remove("navbar-transparent");
    } else {
        nav.classList.add("navbar-transparent");
        nav.classList.remove("navbar-colored");
    }
}

const navSelection = document.getElementsByClassName("nav-selection");
// Flag to prevent immediate removal of active class on scroll
let preventActiveRemoval = false;

for (let i = 0; i < navSelection.length; i++) {
  navSelection[i].addEventListener('click', function(event) { 

    if (this.tagName === 'A') {
      event.preventDefault();
    }

    let activeElements = document.querySelectorAll(".active-navigation");
    activeElements.forEach(function(el) {
        el.classList.remove("active-navigation");
    });
    this.classList.add("active-navigation");
    
    preventActiveRemoval = true;
    setTimeout(() => {
      preventActiveRemoval = false;
    }, 1000); // Reset the flag after a short delay
    
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/*
window.addEventListener('scroll', function() {
  if (preventActiveRemoval) return; // Exit if the flag is true
 
  // Use the cross-browser compatible method to get the scroll position
  let scrollTop = document.documentElement.scrollTop  
             || document.body.scrollTop  
             || 0;
 
  let navLinks = document.querySelectorAll('#navbar ul li a');
  navLinks.forEach(function(currLink) {
     let refElement = document.querySelector(currLink.getAttribute('href'));
     if (refElement.offsetTop <= scrollTop && (refElement.offsetTop + refElement.offsetHeight > scrollTop)) {
       document.querySelectorAll('#navbar ul li a').forEach(function(link) {
         link.classList.remove('active');
       });
       currLink.classList.add('active');

     } else if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
      // If the user has scrolled to the bottom of the page, add the.active class to the "Hire Me" link
      document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.classList.remove("active");
        document.querySelector('#hireMe').classList.add("active");
      });
      document.querySelector('#hireMe').classList.add("active");
   }else {
       currLink.classList.remove("active");
     }
  });
 });  */

 /* 
 window.addEventListener('scroll', function() {
  if (preventActiveRemoval) return; // Exit if the flag is true

  // Use the cross-browser compatible method to get the scroll position
  let scrollTop = document.documentElement.scrollTop  
             || document.body.scrollTop  
             || 0;

  let navLinks = document.querySelectorAll('#navbar ul li a');
  navLinks.forEach(function(currLink) {
    let refElement = document.querySelector(currLink.getAttribute('href'));
    if (refElement) { // Check if refElement exists
      let isVisible = false;
      const threshold = 0.7; // 70% visibility threshold
      const elementTop = refElement.getBoundingClientRect().top;
      const elementBottom = refElement.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      // Calculate if the element is at least partially visible
      if ((elementTop >= 0) && (elementBottom <= viewportHeight)) {
        isVisible = true;
      } else if (((elementTop < 0) && (elementBottom > 0)) || ((elementTop > 0) && (elementBottom < viewportHeight))) {
        // Element is partially visible
        const visiblePercentage = Math.min(1, Math.max((viewportHeight - Math.abs(elementTop)), (viewportHeight - Math.abs(elementBottom)))) / viewportHeight;
        isVisible = visiblePercentage >= threshold;
      }

      if (isVisible) {
        document.querySelectorAll('#navbar ul li a').forEach(function(link) {
          link.classList.remove('active');
        });
        currLink.classList.add('active');
      } else {
        currLink.classList.remove("active");
      }
    }
  });

  // Additional logic for highlighting the "Hire Me" link when scrolling to the bottom
  if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
    document.querySelectorAll('nav ul li a').forEach(function(link) {
      link.classList.remove("active");
    });
    document.querySelector('#hireMe').classList.add("active");
  }
}); */ 


window.addEventListener('scroll', function() {
  if (preventActiveRemoval) return; // Exit if the flag is true
 
  // Use the cross-browser compatible method to get the scroll position
  let scrollTop = document.documentElement.scrollTop  
             || document.body.scrollTop  
             || 0;
 
  let navLinks = document.querySelectorAll('#navbar ul li a');
  navLinks.forEach(function(currLink) {
     let refElement = document.querySelector(currLink.getAttribute('href'));
     if (refElement.offsetTop <= scrollTop && (refElement.offsetTop + refElement.offsetHeight > scrollTop)) {
       document.querySelectorAll('#navbar ul li a').forEach(function(link) {
         link.classList.remove('active-navigation');
       });
       currLink.classList.add('active-navigation');

     } else if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
      // If the user has scrolled to the bottom of the page, add the.active class to the "Hire Me" link
      document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.classList.remove("active-navigation");
        document.querySelector('#hireMe').classList.add("active-navigation");
      });
      document.querySelector('#hireMe').classList.add("active-navigation");
   }else {
       currLink.classList.remove("active");
     }
  });
 }); 




// Navigation Section Ends  


// Home Section Starts 



// Home Section Ends 


// About Section Starts 

// About Section  Ends 


// Skills Section Starts 

// Skills Secton Ends 


// Hire Me Section Starts 


// Hire Me Section Ends 

