var x = window.matchMedia("(max-width: 768px)")
const design = document.querySelector('[data-design]');
curvedSectionsChange(x) // Call listener function at run time
x.addListener(curvedSectionsChange) // Attach listener function on state changes

function curvedSectionsChange(x) {
    if (x.matches) { // If media query matches 
        design.src = "./assets/images/bg-curve-mobile.svg"
    } else {
        design.src = "./assets/images/bg-curve-desktop.svg";
    }
  }