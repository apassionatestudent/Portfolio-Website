// NAVIGATION SECTIONS STARTS

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

// highlights nav links a, if a section covers 80% of the screen 
document.addEventListener('DOMContentLoaded', () => {
  const navSelection = document.getElementsByClassName("nav-selection");
  const sections = ['home', 'about', 'skills', 'hire-me'];

  function setActiveNavigation() {
      let currentSection = null;

      // Check if the scroll position is at the top of the document => remove active-navigation for home only
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollPosition === 0) {
        // Remove the active-navigation class from all nav items
        for (let i = 0; i < navSelection.length; i++) {
            navSelection[i].classList.remove("active-navigation");
        }
        return; // Exit the function early since we've handled the top case
      }

      for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i]);
          const rect = section.getBoundingClientRect();

          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2 * 0.8) {
            currentSection = sections[i];
            break;
        }
          /* 70% version
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentSection = sections[i];
              break;
          } */
      }

      for (let i = 0; i < navSelection.length; i++) {
          if (navSelection[i].getAttribute('href').slice(1) === currentSection) {
              navSelection[i].classList.add("active-navigation");
          } else {
              navSelection[i].classList.remove("active-navigation");
          }
      }
  }

  window.addEventListener('scroll', setActiveNavigation);
  setActiveNavigation(); // Initialize on page load
});


// Update tooltip text based on active navigation for responsive screen 
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerTooltip = document.getElementById('hamburger-tooltip');
  const navSelection = document.getElementsByClassName("nav-selection");

  function updateTooltipText() {
      for (let i = 0; i < navSelection.length; i++) {
          if (navSelection[i].classList.contains('active-navigation')) {
              hamburgerTooltip.textContent = navSelection[i].textContent;
            if (hamburgerTooltip.textContent === 'Hire Me') {
                // Apply styles to the hamburgerTooltip element, crude code as the class toggle doesn't seem to work for some reason
                hamburgerTooltip.style.backgroundColor = "yellow";
                hamburgerTooltip.style.color = "#2d2d2d";
                hamburgerTooltip.style.border = "1px solid yellow";
            } 
            else {
              hamburgerTooltip.style.backgroundColor = "#f0f0f0";
              hamburgerTooltip.style.border = "1px solid #ddd";
            }
            return; // Exit the loop once the active navigation is found
          }
      }
      // Default tooltip text (in case no active navigation)
      hamburgerTooltip.textContent = 'Home';

  }

  window.addEventListener('scroll', updateTooltipText);
  updateTooltipText(); // Initialize on page load
}); 


/* night mode 
 document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const slider = document.querySelector('.slider');

  // Function to apply theme
  function applyTheme(theme) {
    document.documentElement.style.setProperty('--bg-color', theme.bgColor);
    document.documentElement.style.setProperty('--text-color', theme.textColor);
  }

  // Get local time and decide theme
  const currentTime = new Date().getHours();
  let theme;
  if (currentTime >= 7 && currentTime <= 18) {
    theme = { bgColor: '#fff', textColor: '#000' };
  } else {
    theme = { bgColor: '#000', textColor: '#fff' };
  }
  applyTheme(theme);

  // Toggle theme based on local time
  setInterval(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 7 && currentTime <= 18) {
      applyTheme({ bgColor: '#fff', textColor: '#000' });
    } else {
      applyTheme({ bgColor: '#000', textColor: '#fff' });
    }
  }, 3600000); // Check every hour

  // Handle toggle switch
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      document.documentElement.setAttribute('class', 'night-theme');
    } else {
      document.documentElement.setAttribute('class', '');
    }
  });

  // Initialize theme based on saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'night') {
    document.documentElement.setAttribute('class', 'night-theme');
    themeToggle.checked = true;
  }
}); */

// Hamburger Menu for responsiveness 
function openHamburger() {
  document.getElementById("sidepanel").style.width = "100%";
  document.body.style.overflow = 'hidden'; // disenable scroll 
}

function closeHamburger() {
  document.getElementById("sidepanel").style.width = "0px";
  document.body.style.overflow = 'auto'; // re-enable scroll 
}

// Event listeners to all links inside the side panel
document.querySelectorAll('#sidepanel .nav-selection').forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Prevent default action to avoid jumping to the top of the page
    event.preventDefault();
    
    // Perform navigation programmatically
    const href = this.getAttribute('href');
    window.location.href = href;
    
    closeHamburger();
  });
});

// NAVIGATION SECTIONS ENDS

// HOME SECTION STARTS



// HOME SECTION ENDS


// ABOUT SECTION STARTS


// ABOUT SECTION ENDS


// SKILLS SECTION STARTS

document.getElementById("skills-container").style.overflow = 'hidden'; // disable the scroll for the said container, it's annoying 


let isModalOpen = false;

function isClickInsideModal(event) {
  const modalContainers = document.getElementsByClassName('modal-containers');
  return Array.from(modalContainers).some(container => container.contains(event.target));
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.close').addEventListener('click', function() {
      closeModal();
  });
});


function showContent(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.style.display = "block";
        disableScroll();
        isModalOpen = true;

        // close modal if clicks outside 
        function handleClickOutside(event) {
            if (!isClickInsideModal(event) && isModalOpen) {
                closeModal();
            }
        }

        // close modal on "Esc" key
        function handleEscKey(event) {
            if (event.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        }

        /*
        function handleBackButton(event) {
          if (isModalOpen) { // Assuming isModalOpen is a boolean indicating whether the modal is open
              closeModal(); // Close the modal
          }
        } */

        document.querySelector('.close').addEventListener('click', function() {
            closeModal();
        });

        document.addEventListener('click', handleClickOutside, true);
        document.addEventListener('keydown', handleEscKey, true);
        //window.addEventListener('popstate', handleBackButton);

        window.addEventListener('popstate', function(event) {
            closeModal();
        });

        // Prevent default behavior of links and buttons inside the modal
        // document.querySelectorAll('.modal-containers *').forEach(el => el.onclick = function(e) { e.stopPropagation(); });
    }
} 

// Modify the closeModal function to set the modal state to false
function closeModal() {
    if (isModalOpen) {
        ['soft-skills-content', 'customer-service-specialist-content', 'general-virtual-assistant-content',
         'executive-virtual-assistant-content', 'sales-calling-content', 'front-end-web-content'].forEach(id => {
             let element = document.getElementById(id);
             if (element) {
                 element.style.display = "none";
                 enableScroll();
             }
         });
        isModalOpen = false; // Set the modal state to false when closing the modal
    }
}

// disable scroll to ensure user doesn't move elsewhere from Skills section 
function disableScroll() {
  scrollTop = document.documentElement.scrollTop;
  scrollLeft = document.documentElement.scrollLeft;
  // if any scroll is attempted, set this to the previous value
  window.onscroll = function() {
  window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function() {
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
      // changes background upon scroll
      nav.classList.add("navbar-colored");
      nav.classList.remove("navbar-transparent");
    } else {
      nav.classList.add("navbar-transparent");
      nav.classList.remove("navbar-colored");
    }
  };
} 
// SKILLS SECTIONS ENDS


// HIRE ME SECTION STARTS


// HIRE ME SECTION ENDS
