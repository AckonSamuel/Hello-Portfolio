/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-plusplus */
let toggleNavStatus = false;

function toggleNav() {
  const getMenubar = document.querySelector('.firstmobile-nav');
  //   const getMenubarUl = document.querySelector('.firstmobile-nav ul');
  //   const getMenubarLinks = document.querySelectorAll('.firstmobile-nav a');

  if (toggleNavStatus === false) {
    getMenubar.style.display = 'flex';
    getMenubar.style.width = '100%';

    // const arrayLength = getMenubarLinks.length;
    // for (let i = 0; i < arrayLength; i++) {
    //   getMenubarLinks[i].style.opacity = '1';
    // }
  }

  toggleNavStatus = true;
  return getMenubar.style;
  // if(toggleNavStatus === false){
  //     document.getElementsByClassName('firstmobile-nav').style.display = 'none';
  // }
  // else {
  //     document.getElementsByClassName('firstmobile-nav').style.visibility = 'visible';
  //     return toggleNavStatus = true;
  // }
}

document.getElementsByClassName('.firstmobile-nav').addEventListener('click', toggleNav);