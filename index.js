/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-plusplus */
let toggleNavStatus = false;

function toggleNav() {
  const getBoxic = document.querySelector('.container');
  const getMenubar = document.querySelector('.firstmobile-nav');
  const getImages = document.querySelector('.images');
  if (toggleNavStatus === false) {
    getBoxic.style.marginTop = '75vh';
    getImages.style.background = '#e5e5e5';
    getMenubar.style.position = 'absolute';
    getMenubar.style.display = 'flex';
    getMenubar.style.width = '100%';
    toggleNavStatus = true;
  } else {
    getImages.style.background = '#fff';
    getMenubar.style.display = 'none';
    toggleNavStatus = false;
    getBoxic.style.marginTop = 'inherit';
  }
}
document.getElementsByClassName('.firstmobile-nav').addEventListener('click', toggleNav);